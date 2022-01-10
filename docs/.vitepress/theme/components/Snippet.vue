<template>
  <div class="flex space-x-3">
    <button
      v-for="({ props }, i) of nodes"
      class="snippet-tab"
      :class="{ active: i === activeTab }"
      @click="activeTab = i"
    >
      {{ props?.title }}
    </button>
  </div>
  <wrap-node
    v-for="(node, i) of nodes"
    :value="node.children[0]"
    :class="i === activeTab ? 'block' : 'hidden'"
  />
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue';

const slots = useSlots();
const nodes = slots?.default();

const activeTab = ref(0);
</script>
