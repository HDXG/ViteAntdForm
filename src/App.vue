<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN';
const zh_CN=zhCN;
window.onbeforeunload=function(){
    //var storeage=window.localStorage;
    //storeage.clear();
};
</script>

<template>
  <a-config-provider :locale="zh_CN">
    <HelloWorld />
  </a-config-provider>
  
</template>
