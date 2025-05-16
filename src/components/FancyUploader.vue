<template>
  <div class="fancy-uploader q-pa-sm">
    <!-- Zone de drop / clic -->
    <div
      class="uploader-area cursor-pointer"
      @click="triggerFileInput"
      @dragover.prevent
      @drop.prevent="handleDrop"
    >
      <q-icon name="cloud_upload" size="32px" class="q-mb-sm" />
      <div class="text-caption text-bold">Déposez vos reçus ici</div>
      <input
        type="file"
        :multiple="multiple"
        :accept="accept"
        ref="fileInput"
        class="hidden"
        @change="handleFiles"
      />
    </div>

    <!-- Miniatures -->
    <div v-if="files.length" class="row q-col-gutter-sm q-mt-sm">
      <div v-for="(file, index) in files" :key="index" class="col-auto preview-card">
        <q-img v-if="file.__img" :src="file.__img" ratio="1" class="preview-image" />
        <div v-else class="preview-placeholder">
          <q-icon name="description" size="md" />
        </div>
        <q-btn
          dense
          round
          flat
          icon="close"
          class="remove-btn"
          color="red"
          size="sm"
          @click.stop="remove(index)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modelValue: Array,
  multiple: { type: Boolean, default: true },
  accept: { type: String, default: 'image/*,application/pdf' },
})

const emit = defineEmits(['update:modelValue'])

const fileInput = ref(null)
const files = ref([])

// Initialiser les fichiers
onMounted(() => {
  files.value = [...props.modelValue]
})

// Propager vers le parent
watch(files, () => {
  emit('update:modelValue', files.value)
})

function triggerFileInput() {
  fileInput.value.click()
}

function handleFiles(e) {
  const inputFiles = Array.from(e.target.files)
  processFiles(inputFiles)
}

function handleDrop(e) {
  const dropped = Array.from(e.dataTransfer.files)
  processFiles(dropped)
}

function processFiles(inputFiles) {
  inputFiles.forEach((file) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        file.__img = e.target.result
      }
      reader.readAsDataURL(file)
    }
    files.value.push(file)
  })
}

function remove(index) {
  files.value.splice(index, 1)
}
</script>

<style scoped>
.fancy-uploader {
  width: 140px;
  background: #121225;
  border: 1px dashed #8e2de2;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
  font-size: 12px;
  box-shadow: 0 0 8px rgba(142, 45, 226, 0.15);
}
.uploader-area {
  cursor: pointer;
  padding: 10px 0;
}
.preview-card {
  position: relative;
  width: 48px;
  height: 48px;
  margin: 4px auto;
}
.preview-image,
.preview-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #111;
  object-fit: cover;
}
.remove-btn {
  position: absolute;
  top: -6px;
  right: -6px;
}
</style>
