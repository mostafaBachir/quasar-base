<template>
  <q-form @submit.prevent="submitForm" class="contact-form q-mt-xl">
    <h2 class="text-h6 text-white text-glow q-mb-md">Send us a message</h2>

    <q-input
      v-model="form.name"
      label="Your Name"
      outlined
      dense
      class="q-mb-md"
      color="accent"
      bg-color="white"
      :rules="[(val) => !!val || 'Name is required']"
    />

    <q-input
      v-model="form.email"
      type="email"
      label="Your Email"
      outlined
      dense
      class="q-mb-md"
      color="accent"
      bg-color="white"
      :rules="[(val) => !!val || 'Email is required']"
    />

    <q-input
      v-model="form.subject"
      label="Subject"
      outlined
      dense
      class="q-mb-md"
      color="accent"
      bg-color="white"
    />

    <q-input
      v-model="form.message"
      type="textarea"
      label="Message"
      outlined
      autogrow
      class="q-mb-md"
      color="accent"
      bg-color="white"
      :rules="[(val) => !!val || 'Message cannot be empty']"
    />

    <q-btn
      label="Send Message"
      color="primary"
      class="bg-gradient-primary text-white"
      type="submit"
      icon="send"
    />
  </q-form>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    $q.notify({
      type: 'negative',
      message: 'Please fill in all required fields.',
    })
    return
  }

  // Simulate a successful submission
  console.log('Form submitted', form.value)

  $q.notify({
    type: 'positive',
    message: 'Your message has been sent!',
  })

  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
}
</script>

<style lang="sass" scoped>
.contact-form
  max-width: 600px

.text-glow
  text-shadow: 0 0 5px #00B8FF, 0 0 12px #9A00FF

.bg-gradient-primary
  background: linear-gradient(to right, #9A00FF, #FF00A0)
</style>
