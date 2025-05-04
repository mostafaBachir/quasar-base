import ReconnectingWebSocket from 'reconnecting-websocket'

const sockets = {}
const manualOfflineFlags = {}
const socketUrls = {}
const socketHandlers = {}

export function createWebSocket(name, url, options = {}) {
  const isOffline = localStorage.getItem(`offline_${name}`) === '1'
  manualOfflineFlags[name] = isOffline
  socketUrls[name] = url

  if (isOffline) {
    console.warn(`[WS][${name}] ❌ Mode offline actif : socket non créé`)
    return null
  }

  const socket = new ReconnectingWebSocket(url, [], {
    debug: false,
    reconnectInterval: 3000,
    maxReconnectAttempts: 20,
    ...options,
  })

  socket.reconnectEnabled = true
  const originalReconnect = socket.reconnect.bind(socket)

  socket.reconnect = () => {
    if (socket.reconnectEnabled) {
      originalReconnect()
    } else {
      console.log(`[WS][${name}] 🔒 Reconnexion bloquée (offline manuel)`)
    }
  }

  // Appliquer les handlers personnalisés
  const handlers = socketHandlers[name] || {}
  Object.entries(handlers).forEach(([event, fn]) => {
    socket.addEventListener(event, fn)
  })

  sockets[name] = socket
  return socket
}

export function ensureWebSocket(name) {
  const socket = sockets[name]
  const isOffline = getManualOffline(name)
  const url = socketUrls[name]

  if (!isOffline && !socket && url) {
    console.info(`[WS][${name}] 🚀 Recréation via ensureWebSocket()`)
    createWebSocket(name, url)
  }
}

export function initAllWebSockets(definitions = {}) {
  Object.entries(definitions).forEach(([name, url]) => {
    createWebSocket(name, url)
  })
}

export function registerWebSocketHandlers(name, handlers) {
  socketHandlers[name] = handlers
}

export function getWebSocket(name) {
  return sockets[name] || null
}

export function isSocketOpen(name) {
  const socket = sockets[name]
  return socket && socket.readyState === WebSocket.OPEN && !manualOfflineFlags[name]
}

export function setManualOffline(name, value) {
  const socket = sockets[name]
  manualOfflineFlags[name] = value
  localStorage.setItem(`offline_${name}`, value ? '1' : '0')

  if (socket) {
    if (value) {
      console.warn(`[WS][${name}] ⛔ Fermeture manuelle`)
      socket.reconnectEnabled = false
      socket.close()
    } else {
      console.info(`[WS][${name}] 🔁 Reconnexion autorisée`)
      socket.reconnectEnabled = true
      socket.reconnect()
    }
  } else if (!value) {
    ensureWebSocket(name)
  }
}

export function getManualOffline(name) {
  if (manualOfflineFlags[name] === undefined) {
    manualOfflineFlags[name] = localStorage.getItem(`offline_${name}`) === '1'
  }
  return manualOfflineFlags[name]
}

export function setGlobalOffline(value) {
  localStorage.setItem('global_offline', value ? '1' : '0')

  Object.keys(socketUrls).forEach((name) => {
    setManualOffline(name, value)
  })
}

export function getGlobalOffline() {
  return localStorage.getItem('global_offline') === '1'
}
