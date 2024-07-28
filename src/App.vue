<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import Demo from './components/Demo.vue'
const zh_CN=zhCN;
</script>

<template>
  <a-config-provider :locale="zh_CN">
    <!-- <HelloWorld /> -->
    <Demo/>
  </a-config-provider>
  
</template>
