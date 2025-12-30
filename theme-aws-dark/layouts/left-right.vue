<template>
  <div class="slidev-layout left-right">
    <div class="cols-container">
      <div class="col-left">
        <slot />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
    
    <div class="left-right-footer">
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
.left-right {
  background: var(--theme-background, #000000);
  padding: 1.5rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.cols-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  overflow: auto;
}

.col-left :deep(h1),
.col-right :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.col-left :deep(h2),
.col-right :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.col-left :deep(h3),
.col-right :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.col-left :deep(p),
.col-right :deep(p) {
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.col-left :deep(ul),
.col-right :deep(ul),
.col-left :deep(ol),
.col-right :deep(ol) {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  padding-left: 2rem;
  margin: 0.5rem 0;
}

.col-left :deep(li),
.col-right :deep(li) {
  margin-bottom: 0.25rem;
}

.left-right-footer {
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
