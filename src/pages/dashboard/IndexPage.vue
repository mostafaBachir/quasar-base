<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Bienvenue {{ store.user.prenom || store.user.email }}</div>
        <div class="text-subtitle2">Tu es bien connecté à l’espace protégé.</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { auth_store } from 'stores/auth-store'
import { onMounted } from 'vue'

const store = auth_store()
onMounted(() => {
  if (window.$ws) {
    if (window.$ws.readyState === WebSocket.OPEN) {
      window.$ws.send(JSON.stringify({ type: 'ping' }))
      console.log('📤 Ping envoyé immédiatement')
    } else {
      window.$ws.addEventListener('open', () => {
        console.log('✅ WebSocket ouvert, envoi du ping')
        window.$ws.send(JSON.stringify({ type: 'ping' }))
      })
    }
  } else {
    console.error('❌ WebSocket non initialisé')
  }
})
</script>
