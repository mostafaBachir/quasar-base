import { defineStore } from 'pinia'
import { actionsDB } from 'src/db/actions-db'
import { getWebSocket, isSocketOpen } from 'src/services/ws-manager'
import { v4 as uuidv4 } from 'uuid'

export const use_queu_store = defineStore('queu_store', {
  state: () => ({
    isSyncing: false,
  }),

  actions: {
    async queue_store(type, payload, jwtDecoded) {
      const action = {
        type,
        payload,
        meta: {
          timestamp: Date.now(),
          offline: !isSocketOpen('events'),
          jwt_iat: jwtDecoded.iat,
          client_id: 'device-' + uuidv4().slice(0, 8),
        },
      }

      await actionsDB.actions.add(action)

      if (isSocketOpen('events')) {
        this.syncActions()
      }
    },

    async syncActions() {
      if (this.isSyncing || !isSocketOpen('events')) return
      this.isSyncing = true

      const ws = getWebSocket('events')
      const actions = await actionsDB.actions.toArray()

      for (const action of actions) {
        try {
          ws.send(JSON.stringify(action))
          await actionsDB.actions.delete(action.id)
        } catch (e) {
          console.warn('[WS][events] Erreur lors de l’envoi:', e)
          break
        }
      }

      this.isSyncing = false
    },
  },
})
