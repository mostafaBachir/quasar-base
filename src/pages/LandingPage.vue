<template>
  <q-page>
    <HeroSection />
    <FeaturesSection />
    <WorldHeatmap />

    <TestimonialsSection />

    <FooterSection />
    <!-- ... autres sections ... -->
  </q-page>
</template>

<script setup>
import HeroSection from 'src/components/landing_page/HeroSection.vue'
import FeaturesSection from 'src/components/landing_page/FeaturesSection.vue'
import TestimonialsSection from 'src/components/landing_page/TestimonialsSection.vue'
import FooterSection from 'src/components/landing_page/FooterSection.vue'
import WorldHeatmap from 'src/components/landing_page/WorldHeatmap.vue'
</script>
