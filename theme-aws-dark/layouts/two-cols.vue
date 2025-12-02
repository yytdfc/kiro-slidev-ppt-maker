<template>
  <div class="slidev-layout two-cols">
    <div class="cols-container">
      <div class="col-left">
        <slot />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
    
    <div class="two-cols-footer">
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
.two-cols {
  background: rgb(20, 30, 44);
  padding: 2.5rem 3rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.cols-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  overflow: auto;
}

.col-left :deep(h1),
.col-right :deep(h1) {
  font-size: 3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.col-left :deep(h2),
.col-right :deep(h2) {
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.col-left :deep(h3),
.col-right :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.col-left :deep(p),
.col-right :deep(p) {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1rem;
}

.col-left :deep(ul),
.col-right :deep(ul),
.col-left :deep(ol),
.col-right :deep(ol) {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #ffffff;
  padding-left: 2.5rem;
  margin: 1rem 0;
}

.col-left :deep(li),
.col-right :deep(li) {
  margin-bottom: 0.5rem;
}

.two-cols-footer {
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
