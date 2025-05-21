<template>
  <footer class="footer-main q-mt-xl q-pt-md q-pb-sm">
    <div class="footer-content row items-start q-col-gutter-lg">
      <!-- Logo & baseline -->
      <div class="col-12 col-sm-4 flex flex-col items-start q-mb-sm">
        <q-avatar size="38px" class="footer-logo q-mb-xs">
          <img src="~assets/logo.webp" alt="Inovision Logo" />
        </q-avatar>
        <div class="footer-app-name text-glow text-h6 q-mb-xs" style="font-size: 1.1rem">
          Inovision
        </div>
        <div class="footer-baseline text-grey-4" style="font-size: 0.97rem">
          L’IA au service de vos reçus & factures.
        </div>
      </div>
      <!-- Infos de contact -->
      <div class="col-12 col-sm-4 q-mb-sm">
        <div class="footer-title q-mb-xs" style="font-size: 1rem">
          <q-icon name="mail" class="q-mr-xs" /> Contact
        </div>
        <div class="footer-contact" style="font-size: 0.97rem">support@inovision.ai</div>
        <div class="footer-contact q-mt-xs" style="font-size: 0.97rem">
          <q-icon name="public" class="q-mr-xs" /> Montréal, QC, Canada
        </div>
      </div>
      <!-- Liens rapides -->
      <div class="col-12 col-sm-4 q-mb-sm">
        <div class="footer-title q-mb-xs" style="font-size: 1rem">Liens utiles</div>
        <q-list dense>
          <q-item tag="a" href="/" clickable v-ripple>
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section>Accueil</q-item-section>
          </q-item>
          <q-item tag="a" href="/about" clickable v-ripple>
            <q-item-section avatar><q-icon name="info" /></q-item-section>
            <q-item-section>À propos</q-item-section>
          </q-item>
          <q-item tag="a" href="/privacy" clickable v-ripple>
            <q-item-section avatar><q-icon name="gavel" /></q-item-section>
            <q-item-section>Confidentialité</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-separator class="q-my-sm" />
    <div class="footer-bottom row items-center justify-between">
      <span class="text-grey-6" style="font-size: 0.94rem"
        >&copy; {{ new Date().getFullYear() }} Inovision. Tous droits réservés.</span
      >
      <span class="text-grey-6" style="font-size: 0.94rem">Made with ❤️ in Canada</span>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="sass" scoped>
.footer-main
  background: rgba(24, 26, 48, 0.89)
  border-top: 1.5px solid rgba(192, 198, 255, 0.09)
  backdrop-filter: blur(10px)
  box-shadow: 0 0 10px #00B8FF12
  color: #fff
  width: 100%
  font-family: 'Ubuntu', sans-serif

.footer-content
  max-width: 1120px
  margin: 0 auto
  width: 100%

.footer-logo img
  filter: drop-shadow(0 0 8px #9A00FF44)

.footer-app-name
  font-weight: 700

.footer-baseline
  color: #bbb

.footer-title
  font-weight: bold
  color: #9A00FF

.footer-contact
  color: #e3e3fa

.footer-bottom
  max-width: 1120px
  margin: 0 auto
  width: 100%
  font-size: 0.95rem

@media (max-width: 800px)
  .footer-content
    flex-direction: column
  .footer-bottom
    flex-direction: column
    gap: 4px
    text-align: center
</style>
