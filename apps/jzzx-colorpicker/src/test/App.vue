<template>
  {{ color }}
  <d-color-picker v-model="color"></d-color-picker>
</template>
<script setup lang="ts">
import { ref } from 'vue-demi'
import DColorPicker from '../color-picker/src/color-picker'
const color = ref('fba')
</script>
