<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  sessionId: {
    type: String,
    default: ''
  }
})

const showSessionId = computed(() => props.sessionId && props.sessionId.trim() !== '')
</script>

<template>
  <div class="slidev-layout cover">
    <div v-if="showSessionId" class="session-id">
      <span class="session-label">{{ sessionId }}</span>
    </div>
    
    <div class="cover-content">
      <h1 class="cover-title">
        <slot name="title">
          <slot />
        </slot>
      </h1>
      
      <p class="cover-subtitle">
        <slot name="subtitle">Enter subtitle</slot>
      </p>
      
      <div class="speaker-info">
        <slot name="speaker">
          <p>Speaker name (pronouns)</p>
          <p>Speaker job title</p>
          <p>Speaker company</p>
        </slot>
      </div>
    </div>
    
    <div class="cover-footer">
      <p class="copyright">© {{ new Date().getFullYear() }}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Amazon Confidential and Trademark.</p>
      <div class="aws-logo-large">
        <AWSLogo size="xl" color="#ffffff" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  background: linear-gradient(135deg, #0a2540 0%, #1a4d7a 40%, #2e6db5 60%, #7b3f9e 80%, #9d4edd 100%);
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
}

.session-id {
  position: absolute;
  top: 2.5rem;
  left: 3rem;
}

.session-label {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.9);
  font-family: monospace;
  border-radius: 4px;
}

.cover-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3rem;
  max-width: 75%;
}

.cover-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 1.5rem 0;
  line-height: 1.15;
}

.cover-title :deep(h1) {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.15;
}

.cover-title :deep(p) {
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.15;
}

.cover-subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 2.5rem 0;
  line-height: 1.4;
  opacity: 0.95;
}

.cover-subtitle :deep(h2),
.cover-subtitle :deep(p) {
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  line-height: 1.4;
}

.speaker-info {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.speaker-info :deep(p) {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.4;
}

.speaker-info :deep(h3),
.speaker-info :deep(h4) {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  line-height: 1.4;
}

.cover-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.copyright {
  font-size: 0.5rem;
  color: #e0e0e0;
  margin: 0;
  line-height: 1.2;
  max-width: 60%;
}

.aws-logo-large {
  display: flex;
  align-items: center;
}
</style>
