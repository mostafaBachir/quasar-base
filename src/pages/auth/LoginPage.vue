<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2" style="min-width: 300px; width: 100%; max-width: 400px">
      <q-card-section>
        <div class="text-h6 text-center">Connexion</div>
      </q-card-section>

      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input filled v-model="email" label="Email" type="email" required />
        <q-input filled v-model="password" label="Mot de passe" type="password" required />

        <div class="row justify-between items-center q-mt-sm">
          <q-btn label="Se connecter" color="primary" type="submit" />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { use_auth_store } from 'stores/auth-store'

const router = useRouter()
const store = use_auth_store()

const email = ref('')
const password = ref('')

const onSubmit = async () => {
  const ok = await store.login(email.value, password.value)
  if (ok) {
    router.push('/')
  }
}
</script>
