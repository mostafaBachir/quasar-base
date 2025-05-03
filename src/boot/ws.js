// src/boot/ws.js
import { defineBoot } from '#q-app/wrappers'
import ReconnectingWebSocket from 'reconnecting-websocket'

export default defineBoot(({ app }) => {
  const WEBSOCKET_URL = 'ws://127.0.0.1:8000/ws/logs/' // <- adapte au besoin

  const socket = new ReconnectingWebSocket(WEBSOCKET_URL, [], {
    debug: false,
    reconnectInterval: 3000,
    maxReconnectAttempts: 10,
  })

  socket.onopen = () => console.log('[WS] ✅ Connecté à', WEBSOCKET_URL)
  socket.onclose = () => console.warn('[WS] ❌ Déconnecté')
  socket.onerror = (error) => console.error('[WS] ⚠️ Erreur:', error)

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data)
      console.log('[WS] 📩 Message reçu:', data)

      // 🔥 Tu peux dispatcher ici selon `data.type` ou `data.action`
      // Exemple :
      // if (data.action === 'log') afficherLog(data.payload)
    } catch (e) {
      console.error('[WS] ❌ Erreur de parsing JSON:', e)
    }
  }

  // Injection globale
  app.config.globalProperties.$ws = socket
  window.$ws = socket // utile pour debugger dans la console navigateur
})
