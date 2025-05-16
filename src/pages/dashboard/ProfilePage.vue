<template>
  <div class="profile-page q-pa-md">
    <!-- Carte profil -->
    <div class="profile-card q-pa-lg shadow-card">
      <div class="row items-center q-gutter-lg">
        <q-avatar size="100px" class="glow-avatar">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>

        <div class="col">
          <h3 class="text-h5 text-glow q-mb-xs">{{ profile.name }}</h3>
          <p class="text-subtitle2 text-grey-4 q-mb-none">{{ profile.email }}</p>
          <p class="text-caption text-grey-5">Membre depuis : {{ profile.joined }}</p>
        </div>

        <div class="q-ml-auto">
          <q-btn outline color="accent" label="Modifier Profil" icon="edit" @click="editMode = !editMode" class="q-mr-sm" />
          <q-btn color="negative" label="Se déconnecter" icon="logout" @click="logout" />
        </div>
      </div>
    </div>

    <!-- Formulaire d'édition -->
    <transition name="fade-only">
      <div v-show="editMode" class="shadow-card q-pa-lg q-mt-lg">
        <h5 class="text-h6 text-accent q-mb-md">Informations personnelles</h5>
        <q-form @submit.prevent="saveProfile" class="q-gutter-md">
          <q-input v-model="profile.name" label="Nom complet" filled />
          <q-input v-model="profile.email" label="Adresse e-mail" filled />
          <q-input v-model="profile.phone" label="Téléphone" filled />
          <div>
            <q-btn type="submit" label="Enregistrer" color="primary" icon="save" />
            <q-btn flat label="Annuler" color="grey" class="q-ml-sm" @click="editMode = false" />
          </div>
        </q-form>
      </div>
    </transition>

    <!-- Préférences -->
    <div class="q-mt-xl">
      <div class="shadow-card q-pa-lg q-mb-lg">
        <h5 class="text-h6 text-accent q-mb-md">Préférences</h5>
        <q-toggle v-model="notif" label="Recevoir des notifications" />
        <q-toggle v-model="darkMode" label="Mode sombre" />
      </div>

      <div class="shadow-card q-pa-lg">
        <h5 class="text-h6 text-accent q-mb-md">Sécurité</h5>
        <q-btn flat color="primary" label="Changer mot de passe" icon="lock" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { use_auth_store } from 'src/stores/auth-store'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = use_auth_store()

const editMode = ref(false)
const notif = ref(true)
const darkMode = ref(true)

const profile = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (514) 123-4567',
  joined: '2023'
})

function saveProfile() {
  editMode.value = false
  // Ici tu peux envoyer les données au backend (axios, etc.)
}

function logout() {
  auth.logout(router)
}
</script>

<style lang="sass" scoped>
.profile-page
  max-width: 1000px
  margin: auto

.profile-card
  background: rgba(15, 15, 40, 0.85)
  backdrop-filter: blur(16px)
  border-radius: 24px
  border: 1px solid rgba(255, 255, 255, 0.05)

.shadow-card
  background: rgba(20, 20, 45, 0.85)
  backdrop-filter: blur(10px)
  border-radius: 20px
  box-shadow: 0 8px 20px rgba(0, 184, 255, 0.06)
  border: 1px solid rgba(255, 255, 255, 0.04)

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 10px #9A00FF

.glow-avatar
  box-shadow: 0 0 12px rgba(154, 0, 255, 0.3)

.fade-only-enter-active,
.fade-only-leave-active
  transition: opacity 0.3s ease
.fade-only-enter-from,
.fade-only-leave-to
  opacity: 0
</style>
