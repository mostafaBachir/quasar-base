import Dexie, { Table } from 'dexie'

export interface QueuedAction {
  id?: number
  type: string
  payload: any
  meta: {
    timestamp: number
    offline: boolean
    jwt_iat: number
    client_id: string
  }
}

class ActionsDB extends Dexie {
  actions!: Table<QueuedAction>

  constructor() {
    super('ActionsQueueDB')
    this.version(1).stores({
      actions: '++id, type, meta.timestamp',
    })
  }
}

export const actionsDB = new ActionsDB()
