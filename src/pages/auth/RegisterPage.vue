<template>
  <q-page class="flex flex-center q-pa-md bg-dark">
    <div class="register-card q-pa-xl bg-blur text-white rounded-borders">
      <h1 class="text-h5 text-glow q-mb-lg">Create Your Account</h1>

      <q-form @submit.prevent="handleRegister" class="column q-gutter-md" style="min-width: 320px">
        <q-input
          v-model="prenom"
          label="First Name"
          outlined
          dense
          color="primary"
          bg-color="white"
          stack-label
          :rules="[(val) => !!val || 'First name is required']"
        />
        <q-input
          v-model="nom"
          label="Last Name"
          outlined
          dense
          color="primary"
          bg-color="white"
          stack-label
          :rules="[(val) => !!val || 'Last name is required']"
        />
        <q-input
          v-model="email"
          type="email"
          label="Email"
          outlined
          dense
          color="primary"
          bg-color="white"
          stack-label
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
          stack-label
          :rules="[(val) => !!val || 'Password is required']"
        />

        <q-btn
          label="Register"
          color="primary"
          class="bg-gradient-primary text-white full-width"
          type="submit"
          unelevated
          :loading="loading"
        />

        <div class="q-mt-sm text-center">
          <q-btn to="/login" flat label="Already have an account?" class="text-info" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { use_auth_store } from 'src/stores/auth-store'
import { register } from 'src/services/auth'

const router = useRouter()
const authStore = use_auth_store()

const prenom = ref('')
const nom = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const handleRegister = async () => {
  if (!prenom.value || !nom.value || !email.value || !password.value) {
    authStore.notify('Please fill all fields', 'warning')
    return
  }

  loading.value = true
  try {
    await register({
      first_name: prenom.value,
      last_name: nom.value,
      email: email.value,
      password: password.value,
    })

    const loggedIn = await authStore.login(email.value, password.value)
    if (loggedIn) {
      router.push('/dashboard')
    }
  } catch (err) {
    authStore.notify('Registration failed', 'negative')
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>

<style lang="sass" scoped>
.bg-dark
  background: linear-gradient(180deg, #0c0c26, #1a1b3f)

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 12px #9A00FF

.bg-gradient-primary
  background: linear-gradient(to right, #9A00FF, #00B8FF)

.register-card
  backdrop-filter: blur(12px)
  background-color: rgba(20, 20, 50, 0.6)
  border-radius: 20px
  box-shadow: 0 10px 30px rgba(0, 184, 255, 0.1)

.rounded-borders
  border-radius: 20px
</style>
