<template>
  <div class="slidev-layout image-right">
    <div class="content-container">
      <div class="content-left">
        <slot />
      </div>
      <div class="content-right">
        <slot name="right" />
      </div>
    </div>
    <div class="image-right-footer">
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
.image-right {
  background: rgb(20, 30, 44);
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  overflow: auto;
}

.content-left :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.content-left :deep(h2) {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.content-left :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.content-left :deep(p) {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1rem;
}

.content-left :deep(ul),
.content-left :deep(ol) {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #ffffff;
  padding-left: 2.5rem;
  margin: 1rem 0;
}

.content-left :deep(li) {
  margin-bottom: 0.5rem;
}

.content-right :deep(img) {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.image-right-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1rem;
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
