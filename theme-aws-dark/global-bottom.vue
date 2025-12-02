<script setup lang="ts">
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $slidev } = useSlideContext()

const showFooter = computed(() => {
  const layout = $slidev?.nav?.currentLayout
  // Only show footer on layouts without their own footer
  // Most layouts have their own footer, so this is just a fallback
  const layoutsWithOwnFooter = [
    'cover', 'section', 'center', 'end',
    'two-cols', 'image-right', 'intro', 'default'
  ]
  return !layoutsWithOwnFooter.includes(layout || '')
})
</script>

<template>
  <div v-if="showFooter" class="global-footer">
    <div class="footer-left">
      <AWSLogo size="sm" color="#e0e0e0" />
      <p class="copyright">© {{ new Date().getFullYear() }}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Amazon Confidential and Trademark.</p>
    </div>
    <div class="page-number-box">
      <SlideCurrentNo />
    </div>
  </div>
</template>

<style scoped>
.global-footer {
  position: fixed;
  bottom: 0.75rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 10;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.copyright {
  font-size: 0.5rem;
  color: #e0e0e0;
  margin: 0;
  line-height: 1.2;
  max-width: 600px;
}

.page-number-box {
  text-align: center;
  font-size: 0.75rem;
  color: #e0e0e0;
  font-weight: 400;
}
</style>
