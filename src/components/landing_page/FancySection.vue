<!-- src/components/FancySection.vue -->
<template>
  <section class="fancy-section section-container">
    <slot />
  </section>
</template>

<style lang="sass" scoped>
.fancy-section
  max-width: 1200px
  margin-top: 64px
  margin-bottom: 64px
  padding: 32px 20px
  border-radius: 24px
  background: rgba(15, 15, 40, 0.85)
  backdrop-filter: blur(12px)
  border: 1px solid rgba(255, 255, 255, 0.06)
  box-shadow: 0 6px 28px rgba(154, 0, 255, 0.12)
</style>
