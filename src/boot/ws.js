import { defineBoot } from '#q-app/wrappers'
import { Notify } from 'quasar'
import { initAllWebSockets, registerWebSocketHandlers } from 'src/services/ws-manager'

export default defineBoot(() => {
  // Déclaration des handlers de chaque socket
  registerWebSocketHandlers('logs', {
    message: (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('[WS][logs] 📩', data)

        // 🎉 Affiche un toast si type == "toast"
        if (data.type === 'toast') {
          Notify.create({
            message: data.message || 'Notification WebSocket',
            color: data.color || 'primary',
            icon: data.icon || 'info',
          })
        }
      } catch (e) {
        console.error('[WS][logs] ❌ JSON invalide:', e)
      }
    },
  })

  registerWebSocketHandlers('events', {
    message: (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('[WS][events] 📩', data)
        // Exemple : dispatch à un store ou traitement des événements
      } catch (e) {
        console.error('[WS][events] ❌ JSON invalide:', e)
      }
    },
  })

  // Active uniquement les WebSockets nécessaires
  initAllWebSockets({
    logs: 'ws://127.0.0.1:8000/ws/logs/',
    // events: 'ws://127.0.0.1:8000/ws/events/',
  })
})
