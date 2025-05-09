<template>
  <q-page class="flex flex-center q-pa-md bg-dark">
    <div class="login-card q-pa-xl bg-blur text-white rounded-borders">
      <h1 class="text-h5 text-glow q-mb-lg">Welcome Back</h1>

      <q-form @submit.prevent="handleLogin" class="column q-gutter-md" style="min-width: 320px">
        <q-input
          v-model="email"
          type="email"
          label="Email"
          outlined
          dense
          color="primary"
          bg-color="white"
          :rules="[(val) => !!val || 'Email is required']"
        />
        <q-input
          v-model="password"
          type="password"
          label="Password"
          outlined
          dense
          color="primary"
          bg-color="white"
          :rules="[(val) => !!val || 'Password is required']"
        />

        <q-btn
          label="Login"
          color="primary"
          class="bg-gradient-primary text-white full-width"
          type="submit"
          unelevated
        />

        <div class="q-mt-sm text-center">
          <q-btn to="/register" flat label="Create an account" class="text-info" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
import { use_auth_store } from 'src/stores/auth-store'

const $q = useQuasar()
const router = useRouter()
const auth = use_auth_store()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    $q.notify({ type: 'negative', message: 'Please fill in both fields' })
    return
  }

  const success = await auth.login(email.value, password.value)
  if (success) router.push('/dashboard')
}
</script>

<style lang="sass" scoped>
.bg-dark
  background: linear-gradient(180deg, #0c0c26, #1a1b3f)

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 12px #9A00FF

.bg-gradient-primary
  background: linear-gradient(to right, #9A00FF, #00B8FF)

.login-card
  backdrop-filter: blur(12px)
  background-color: rgba(20, 20, 50, 0.6)
  border-radius: 20px
  box-shadow: 0 10px 30px rgba(0, 184, 255, 0.1)

.rounded-borders
  border-radius: 20px
</style>
