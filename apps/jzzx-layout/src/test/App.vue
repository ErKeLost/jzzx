<template>
  <adny-layout
    :mode="mode"
    :fixed-header-and-tab="fixedHeaderAndTab"
    :fixed-footer="fixedFooter"
    :sider-collapse="siderCollapse"
  >
    <template #header>
      <div text-red class="flex-center h-full bg-[#abf]">Header</div>
    </template>
    <template #tab>
      <div class="flex-center h-full bg-[#fba]">Tab</div>
    </template>
    <template #sider>
      <div class="h-full px-12px bg-[#fab] whitespace-nowrap">
        <div class="flex-center h-56px">Sider</div>
        <div>
          <h4>layout mode:</h4>
          <div v-for="item in modeList" :key="item">
            <span class="pr-8px">{{ item }}</span>
            <input
              type="radio"
              name="mode"
              :value="item"
              :checked="item === mode"
              class="cursor-pointer"
              @change="setMode(item)"
            />
          </div>
        </div>
        <div class="pt-24px">
          <span class="pr-8px">fixedHeaderAndTab</span>
          <input type="checkbox" :checked="fixedHeaderAndTab" @change="setFixedHeaderAndTab" />
        </div>
        <div class="pt-24px">
          <span class="pr-8px">fixedFooter</span>
          <input type="checkbox" :checked="fixedFooter" @change="setFixedFooter" />
        </div>
        <div class="pt-24px">
          <span class="pr-8px">siderCollapse</span>
          <input type="checkbox" :checked="siderCollapse" @change="setSiderCollapse" />
        </div>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-[#bfa]">Footer</div>
    </template>
    <div v-for="i in 100" :key="i" class="text-center">{{ i }}</div>
  </adny-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import adnyLayout from '../index.vue'

type Mode = 'vertical' | 'horizontal';
const mode = ref<Mode>('vertical');
const modeList: Mode[] = ['vertical', 'horizontal'];
function setMode(value: Mode) {
  mode.value = value;
}

const fixedHeaderAndTab = ref(true);
function setFixedHeaderAndTab() {
  fixedHeaderAndTab.value = !fixedHeaderAndTab.value;
}

const fixedFooter = ref(false);
function setFixedFooter() {
  fixedFooter.value = !fixedFooter.value;
}

const siderCollapse = ref(false);
function setSiderCollapse() {
  siderCollapse.value = !siderCollapse.value;
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
