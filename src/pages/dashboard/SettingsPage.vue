<template>
  <div class="settings-page q-pa-md">
    <h4 class="text-h5 text-glow q-mb-md">Paramètres</h4>

    <!-- Section Affichage -->
    <div class="shadow-card q-pa-lg q-mb-lg">
      <h6 class="text-h6 text-accent q-mb-md">Affichage</h6>
      <q-toggle v-model="darkMode" label="Activer le mode sombre" />
      <q-select
        v-model="lang"
        label="Langue"
        :options="languages"
        emit-value
        map-options
        filled
        class="q-mt-md"
      />
    </div>

    <!-- Section Notifications -->
    <div class="shadow-card q-pa-lg q-mb-lg">
      <h6 class="text-h6 text-accent q-mb-md">Notifications</h6>
      <q-toggle v-model="notifEmail" label="Par e-mail" />
      <q-toggle v-model="notifSMS" label="Par SMS" />
      <q-toggle v-model="notifPush" label="Notifications push" />
    </div>

    <!-- Section Compte -->
    <div class="shadow-card q-pa-lg">
      <h6 class="text-h6 text-accent q-mb-md">Compte</h6>
      <q-btn flat color="primary" label="Modifier mot de passe" icon="lock" class="q-mb-sm" />
      <q-btn
        flat
        color="negative"
        label="Supprimer mon compte"
        icon="delete_forever"
        @click="confirmDelete"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const darkMode = ref(true)
const lang = ref('fr')
const notifEmail = ref(true)
const notifSMS = ref(false)
const notifPush = ref(true)

const languages = [
  { label: 'Français 🇫🇷', value: 'fr' },
  { label: 'English 🇺🇸', value: 'en' },
  { label: 'العربية 🇸🇦', value: 'ar' },
]

function confirmDelete() {
  $q.dialog({
    title: 'Confirmer',
    message: 'Es-tu sûr de vouloir supprimer ton compte ? Cette action est irréversible.',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    // Action de suppression
    console.log('Compte supprimé')
  })
}
</script>

<style lang="sass" scoped>
.settings-page
  max-width: 800px
  margin: auto

.shadow-card
  background: rgba(20, 20, 45, 0.85)
  backdrop-filter: blur(10px)
  border-radius: 20px
  box-shadow: 0 8px 20px rgba(0, 184, 255, 0.06)
  border: 1px solid rgba(255, 255, 255, 0.04)

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 10px #9A00FF
</style>
