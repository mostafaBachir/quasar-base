<template>
  <FancySection>
    <h2 class="text-h2 text-glow text-center q-mb-xl">Fonctionnalités principales</h2>
    <div class="row justify-center q-col-gutter-xl q-mb-lg">
      <div class="col-12 col-sm-6 col-md-3" v-for="feat in features" :key="feat.title">
        <FancyCard :icon="feat.icon" :title="feat.title" :desc="feat.desc" />
      </div>
    </div>
  </FancySection>
</template>

<script setup>
import FancyCard from 'components/ui/FancyCard.vue'
import FancySection from 'components/landing_page/FancySection.vue'

const features = [
  {
    icon: 'psychology',
    title: 'Précision IA',
    desc: 'Extraction automatique fiable grâce à l’intelligence artificielle.',
  },
  {
    icon: 'schedule',
    title: 'Gain de temps',
    desc: 'Traitement instantané, zéro saisie manuelle.',
  },
  {
    icon: 'code',
    title: 'Intégration facile',
    desc: 'API REST simple, réponses en JSON ou YAML.',
  },
  {
    icon: 'security',
    title: 'Sécurité & confidentialité',
    desc: 'Protection de vos données et conformité RGPD.',
  },
]
</script>

<style lang="sass" scoped>
.text-h2
  font-family: 'Ubuntu', sans-serif
  font-size: clamp(2.2rem, 4vw, 3rem)
  font-weight: 700
  letter-spacing: .01em
</style>
