<template>
  <div class="slidev-layout default">
    <div class="content-area">
      <slot />
    </div>
    
    <div class="default-footer">
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
.default {
  background: var(--theme-background, #000000);
  padding: 1.5rem 3rem 1rem 3rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-area {
  flex: 1;
  overflow: auto;
}

.content-area :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  margin-top: 0;
  line-height: 1.2;
}

.content-area :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.content-area :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.content-area :deep(p) {
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.content-area :deep(ul),
.content-area :deep(ol) {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  padding-left: 2rem;
  margin: 0.5rem 0;
}

.content-area :deep(li) {
  margin-bottom: 0.25rem;
}

.default-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.5rem;
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
