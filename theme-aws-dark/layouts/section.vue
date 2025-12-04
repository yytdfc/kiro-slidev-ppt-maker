<template>
  <div class="slidev-layout section">
    <div class="section-content">
      <slot />
    </div>
    <div class="section-footer">
      <div class="footer-left">
        <AWSLogo size="sm" color="#e0e0e0" />
        <p class="copyright">© {{ new Date().getFullYear() }}, Amazon Web Services, Inc. or its affiliates. All rights reserved. Amazon Confidential and Trademark.</p>
      </div>
      <div class="page-number-box">
        <SlideCurrentNo />
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  background: var(--theme-gradient-section, linear-gradient(135deg, #0a2540 0%, #1a4d7a 40%, #2e6db5 60%, #265a6b 100%));
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.section-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.section-content :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 0;
}

.section-content :deep(h2) {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.3;
  margin-top: 2rem;
}

.section-content :deep(p) {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-top: 1.5rem;
}

.section-content :deep(ul),
.section-content :deep(ol) {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-top: 1.5rem;
  padding-left: 1.5rem;
}

.section-content :deep(li) {
  margin-top: 0.5rem;
}

.section-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
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
