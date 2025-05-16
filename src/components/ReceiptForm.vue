<template>
  <!-- Informations du reçu -->
  <q-card class="receipt-form bg-dark q-pa-md q-mb-md">
    <div class="q-gutter-sm">
      <!-- Marchand + Date -->
      <div class="row q-col-gutter-sm">
        <div class="col-8">
          <q-input
            v-model="form.merchant"
            label="Marchand"
            outlined
            dense
            color="accent"
            dark
            :rules="[(val) => !!val || 'Obligatoire']"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.date"
            label="Date d’achat"
            type="date"
            outlined
            dense
            color="accent"
            dark
            :rules="[(val) => !!val || 'Obligatoire']"
          />
        </div>
      </div>

      <!-- N° reçu + Total HT + TTC -->
      <div class="row q-col-gutter-sm">
        <div class="col-4">
          <q-input
            v-model="form.receiptNumber"
            label="N° reçu"
            outlined
            dense
            color="accent"
            dark
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.htotal"
            label="Total HT"
            type="number"
            prefix="CAD"
            outlined
            dense
            color="accent"
            dark
            :rules="[(val) => !!val || 'Obligatoire']"
          />
        </div>
        <div class="col-4">
          <q-input
            v-model="form.total"
            label="Total TTC"
            type="number"
            prefix="CAD"
            outlined
            dense
            color="accent"
            dark
            :rules="[(val) => !!val || 'Obligatoire']"
          />
        </div>
      </div>
    </div>
  </q-card>

  <!-- Liste des articles -->
  <q-card class="q-mt-md bg-dark text-white no-shadow">
    <div class="q-table__container q-pa-sm">
      <!-- En-têtes -->
      <div class="row items-center text-caption text-grey q-mb-xs">
        <div class="col-2">Catégorie</div>
        <div class="col-3">Nom</div>
        <div class="col-1">Qté</div>
        <div class="col-2">Prix U</div>
        <div class="col-3">Total</div>
        <div class="col-1 text-center">⛔</div>
      </div>

      <!-- Lignes dynamiques -->
      <div
        class="row q-col-gutter-sm q-mb-sm items-center"
        v-for="(item, index) in form.items"
        :key="index"
      >
        <div class="col-2">
          <q-input v-model="item.category" dense outlined color="accent" dark />
        </div>
        <div class="col-3">
          <q-input v-model="item.name" dense outlined color="accent" dark />
        </div>
        <div class="col-1">
          <q-input
            v-model.number="item.qty"
            type="number"
            dense
            outlined
            color="accent"
            dark
            @input="updateItemTotal(index)"
          />
        </div>
        <div class="col-2">
          <q-input
            v-model.number="item.price"
            type="number"
            prefix="CAD"
            dense
            outlined
            color="accent"
            dark
            @input="updateItemTotal(index)"
          />
        </div>
        <div class="col-3">
          <q-input
            :model-value="(item.qty * item.price).toFixed(2)"
            readonly
            dense
            outlined
            color="accent"
            dark
            prefix="CAD"
          />
        </div>
        <div class="col-1 text-center">
          <q-btn dense round flat icon="delete" color="negative" @click="removeItem(index)" />
        </div>
      </div>

      <!-- Ajouter un article -->
      <q-btn
        flat
        color="accent"
        icon="add"
        label="Ajouter un article"
        class="q-mt-sm"
        @click="addItem"
      />
    </div>
  </q-card>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  merchant: '',
  total: '',
  htotal: '',
  date: '',
  receiptNumber: '',
  items: [],
})

function addItem() {
  form.items.push({ category: '', name: '', qty: 1, price: 0 })
}

function updateItemTotal(index) {
  const item = form.items[index]
  if (!item.qty || !item.price) return
  item.total = item.qty * item.price
}

function removeItem(index) {
  form.items.splice(index, 1)
}
</script>

<style scoped>
.receipt-form {
  border-radius: 12px;
  background: #1a1a2d;
  box-shadow: 0 0 8px rgba(142, 45, 226, 0.2);
  max-width: 400px;
}
</style>
