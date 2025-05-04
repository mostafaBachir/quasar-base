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
import { use_auth_store } from 'stores/auth-store'

const store = use_auth_store()
</script>
