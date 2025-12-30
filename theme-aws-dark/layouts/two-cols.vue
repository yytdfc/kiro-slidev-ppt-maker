<template>
  <div class="slidev-layout two-cols">
    <div class="two-cols-content">
      <h1 class="two-cols-title">
        <slot name="title">
          <slot />
        </slot>
      </h1>
      
      <div class="two-cols-container">
        <div class="two-cols-left">
          <slot name="left" />
        </div>
        <div class="two-cols-right">
          <slot name="right" />
        </div>
      </div>
    </div>
    
    <div class="two-cols-footer">
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
.two-cols {
  background: var(--theme-background, #000000);
  padding: 1.5rem 3rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.two-cols-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.two-cols-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  flex-shrink: 0;
}

.two-cols-title :deep(h1) {
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.2;
}

.two-cols-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  overflow: auto;
  min-height: 0;
}

.two-cols-left,
.two-cols-right {
  overflow-y: auto;
  padding-right: 0.5rem;
}

.two-cols-left :deep(h2),
.two-cols-right :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.two-cols-left :deep(h3),
.two-cols-right :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.two-cols-left :deep(p),
.two-cols-right :deep(p) {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin-bottom: 1rem;
}

.two-cols-left :deep(ul),
.two-cols-right :deep(ul),
.two-cols-left :deep(ol),
.two-cols-right :deep(ol) {
  font-size: 1rem;
  line-height: 1.7;
  color: #ffffff;
  padding-left: 2rem;
  margin: 0.75rem 0;
}

.two-cols-left :deep(li),
.two-cols-right :deep(li) {
  margin-bottom: 0.5rem;
}

.two-cols-left :deep(strong),
.two-cols-right :deep(strong) {
  color: #00a1e0;
  font-weight: 600;
}

.two-cols-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 0.5rem;
  padding-bottom: 0.25rem;
  flex-shrink: 0;
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

/* 自定义滚动条样式 */
.two-cols-left::-webkit-scrollbar,
.two-cols-right::-webkit-scrollbar {
  width: 4px;
}

.two-cols-left::-webkit-scrollbar-track,
.two-cols-right::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.two-cols-left::-webkit-scrollbar-thumb,
.two-cols-right::-webkit-scrollbar-thumb {
  background: rgba(0, 161, 224, 0.5);
  border-radius: 2px;
}

.two-cols-left::-webkit-scrollbar-thumb:hover,
.two-cols-right::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 161, 224, 0.7);
}
</style>
