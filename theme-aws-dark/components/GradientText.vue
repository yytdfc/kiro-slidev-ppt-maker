<template>
  <span :class="['gradient-text', colorClass]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'blue-green',
    validator: (value: string) => ['blue-green', 'blue-purple', 'orange-pink'].includes(value)
  }
})

const colorClass = computed(() => `gradient-${props.color}`)
</script>

<style scoped>
.gradient-text {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.gradient-blue-green {
  background: linear-gradient(135deg, #00a1e0 0%, #00d4aa 100%);
}

.gradient-blue-purple {
  background: linear-gradient(135deg, #2e6db5 0%, #9d4edd 100%);
}

.gradient-orange-pink {
  background: linear-gradient(135deg, #ff9900 0%, #ff6b9d 100%);
}
</style>
