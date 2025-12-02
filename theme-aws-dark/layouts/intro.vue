<template>
  <div class="slidev-layout intro">
    <div class="intro-content">
      <slot />
    </div>
    <div class="intro-footer">
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
.intro {
  background: rgb(20, 30, 44);
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.intro-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-content :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.intro-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.intro-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.intro-content :deep(p) {
  font-size: 1.125rem;
  color: #ffffff;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.intro-content :deep(ul),
.intro-content :deep(ol) {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #ffffff;
  padding-left: 2.5rem;
  margin: 1rem 0;
}

.intro-content :deep(li) {
  margin-bottom: 0.5rem;
}

.intro-footer {
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
