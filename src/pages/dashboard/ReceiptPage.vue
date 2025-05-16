<template>
  <q-page class="q-pa-lg relative-position" style="background: #0d0d1a; color: white">
    <!-- Uploader + bouton, bien en haut de la pile -->
    <div
      class="tools-bar"
      style="
        position: absolute;
        top: 40px;
        right: 40px;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 5;
      "
    >
      <div class="text-center">
        <q-btn
          icon="edit_note"
          color="secondary"
          round
          size="md"
          @click="addManual"
          class="fancy-button"
        />
        <div class="text-caption q-mt-xs text-grey-4 non-selectable">Ajouter manuellement</div>
      </div>

      <FancyUploader v-model="files" :multiple="true" />
    </div>

    <!-- Le contenu principal -->
    <div class="q-mx-auto" style="max-width: 800px">
      <ReceiptForm />

      <q-card class="q-pa-lg bg-transparent no-shadow">
        <div class="text-h5 text-center text-bold text-purple q-mb-md">Ajouter un reçu</div>

        <div class="q-mb-lg">
          <div class="text-subtitle2 text-center non-selectable">
            Commencez par glisser un reçu pour l'analyser automatiquement.
          </div>
        </div>

        <div class="row justify-end q-gutter-sm">
          <q-btn
            label="Analyser"
            color="primary"
            :loading="loading"
            icon="insights"
            @click="analyze"
          />
          <q-btn label="Annuler" color="secondary" flat @click="resetForm" />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import FancyUploader from 'src/components/FancyUploader.vue'
import ReceiptForm from 'src/components/ReceiptForm.vue'
const files = ref([])
const loading = ref(false)

function analyze() {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

function resetForm() {
  files.value = []
}

function addManual() {
  console.log('Ajout manuel déclenché') // à remplacer plus tard par affichage d’un formulaire
}
</script>
<style scoped>
.fancy-button {
  transition:
    box-shadow 0.3s,
    transform 0.2s;
}

.fancy-button:hover {
  box-shadow: 0 0 8px #8e2de2;
  transform: scale(1.05);
}
</style>
