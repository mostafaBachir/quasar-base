<template>
  <q-page class="about-contact-page q-pa-xl">
    <div class="row q-col-gutter-xl items-start q-mb-xl scroll-fade-up">
      <!-- Colonne gauche - Texte About -->
      <div class="col-12 col-md-6">
        <section class="glass-card text-white">
          <h2 class="text-h4 text-glow q-mb-md">About Inovision</h2>
          <p class="text-body1 text-grey-4 q-mb-md">
            Inovision is an AI-powered platform that simplifies receipt and invoice processing.
            Whether you're a freelancer, business owner or individual, we help you capture and
            structure data from your daily purchases with speed and intelligence.
          </p>
          <p class="text-body1 text-grey-4">
            Using advanced AI, we extract line items, totals, taxes, dates and vendors from your
            receipts and turn them into structured, exportable data — accessible from anywhere.
          </p>
        </section>
      </div>

      <!-- Colonne droite - Illustration -->
      <div class="col-12 col-md-6">
        <q-img
          src="~assets/contact_illustration.png"
          alt="AI Illustration"
          class="about-img"
          :ratio="4 / 3"
          fit="cover"
        />
      </div>
    </div>

    <div class="row q-col-gutter-xl items-start scroll-fade-up">
      <!-- Colonne gauche - Contact Form -->
      <div class="col-12 col-md-6">
        <section class="glass-card q-pa-md q-mb-xl">
          <h2 class="text-h5 text-white text-glow q-mb-md">Get in Touch</h2>
          <ContactForm />
        </section>
      </div>

      <!-- Colonne droite - Info contact -->
      <div class="col-12 col-md-6">
        <section class="glass-card text-white contact-info">
          <h2 class="text-h6 text-glow q-mb-sm">Contact Information</h2>
          <p class="text-grey-4">
            📍 InovoCB FZ-LLC, Ras Al Khaimah, United Arab Emirates<br />
            ✉️ <a href="mailto:info@inovocb.com" class="text-primary">info@inovocb.com</a>
          </p>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import ContactForm from 'src/components/ContactForm.vue'
import { onMounted } from 'vue'

function animateOnScroll(el) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('visible')
        observer.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  observer.observe(el)
}

onMounted(() => {
  document.querySelectorAll('.scroll-fade-up').forEach(animateOnScroll)
})
</script>

<style lang="sass" scoped>

.about-contact-page
  position: relative
  background: linear-gradient(180deg, #0c0c26, #1a1b3f)
  min-height: 100vh
  overflow: hidden
  padding-bottom: 5rem

  &::before
    content: ''
    position: absolute
    top: -10%
    left: 0
    width: 100%
    height: 140%
    background: url('~assets/bg-parallax-pattern.svg') repeat
    background-size: cover
    opacity: 0.03
    animation: scrollBackground 60s linear infinite
    z-index: 0

// Remove global ::after blur to avoid full-page blur
.contact-section,
.about-section,
.info-section
  position: relative
  z-index: 2
  max-width: 1200px
  margin: 0 auto

.about-img
  border-radius: 16px
  box-shadow: 0 0 30px rgba(0, 184, 255, 0.15)
  animation: floatImage 6s ease-in-out infinite alternate

.text-glow
  text-shadow: 0 0 6px #00B8FF, 0 0 12px #9A00FF

.glass-card
  padding:23px
  background: rgba(255, 255, 255, 0.05)
  border: 1px solid rgba(255, 255, 255, 0.1)
  border-radius: 16px
  backdrop-filter: blur(10px)
  box-shadow: 0 0 20px rgba(0, 184, 255, 0.05), 0 0 40px rgba(154, 0, 255, 0.08)
  z-index: 2

.animated-icon
  display: inline-block
  animation: iconPulse 2s ease-in-out infinite

@keyframes floatImage
  from
    transform: translateY(0px)
  to
    transform: translateY(-15px)

@keyframes scrollBackground
  from
    background-position: 0 0
  to
    background-position: 0 100%

.scroll-fade-up
  opacity: 0
  transform: translateY(40px)
  transition: all 0.8s ease-out

.scroll-fade-up.visible
  opacity: 1
  transform: translateY(0)

@keyframes iconPulse
  0%, 100%
    transform: scale(1)
  50%
    transform: scale(1.15)
</style>
