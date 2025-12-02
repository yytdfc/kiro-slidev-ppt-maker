<template>
  <div class="slidev-layout end">
    <div class="end-content">
      <slot />
    </div>
    <div class="end-footer">
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
.end {
  background: linear-gradient(135deg, #0f2942 0%, #1a4d8f 25%, #2e6db5 50%, #7b3f9e 75%, #9d4edd 100%);
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.end-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.end-content :deep(h1) {
  font-size: 4.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.end-content :deep(h2) {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.end-content :deep(p) {
  font-size: 1.25rem;
  color: #ffffff;
  opacity: 0.9;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.end-footer {
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
