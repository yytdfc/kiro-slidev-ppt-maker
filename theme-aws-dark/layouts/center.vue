<template>
  <div class="slidev-layout center">
    <div class="center-content">
      <slot />
    </div>
    <div class="center-footer">
      <div class="footer-left">
        <AWSLogo size="sm" color="#e0e0e0" />
        <p class="copyright">© {{ new Date().getFullYear() }}, Amazon Web Services, Inc. or its affiliates. All rights reserved.</p>
      </div>
      <div class="page-number-box">
        <SlideCurrentNo />
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  background: var(--theme-background, #000000);
  padding: 1.5rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.center-content {
  flex: 1;
  overflow: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.center-content :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.center-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.center-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.center-content :deep(p) {
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.center-content :deep(ul),
.center-content :deep(ol) {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  padding-left: 2rem;
  margin: 0.5rem 0;
  text-align: left;
}

.center-content :deep(li) {
  margin-bottom: 0.25rem;
}

.center-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.25rem;
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
