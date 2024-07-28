<template>
    <a-layout style="width: 100%;"  :style="{  height: '70px',zIndex:'19', position: 'fixed', left: 0, top: 0, bottom: 0 }">
        <a-layout-header class="header">
            <h1 style="color: #fff;">Ant-Design-Vue 表单设计器</h1>
        </a-layout-header>
    </a-layout>
    <a-row style="z-index:20;position: fixed;width: 100%;margin-top:70px;overflow: auto;">
        <a-col :span="4"  >
            <LayoutSide style="background: #fff">
                <h1 style="height: 50px;text-align: center;line-height: 50px;;">组件内容</h1>
                <a-space  :size="[12, 24]" wrap >
                    <template v-for="(item,_index) in antDesignOption" :key="_index">
                        <a-tooltip :title="item.title">
                            <a-button  type="dashed" @click="handleDesignContext(item.type)">
                                <img :src="item.icon" class="Icon" alt="">
                                <span class="inline-block" >{{ item.title }}</span>
                            </a-button>
                        </a-tooltip>
                    </template>
                </a-space>
            </LayoutSide>
        </a-col>
        <a-col :span="16"  class="scrollable-row">
            <a-layout style="padding: 0 5px 5px;">
                <a-layout-content style="background:#fff;min-height:100vh;padding: 24px" >
                    <h1>组件显示</h1>
                </a-layout-content>
            </a-layout>
        </a-col>
        <a-col :span="4"   class="scrollable-row">
            <a-layout style="padding: 0 5px 5px;">
                <a-layout-content style="background:#fff;min-height:100vh;">
                    <a-tabs v-model:activeKey="activeKey">
                        <a-tab-pane key="1">
                            <template #tab>
                                <img :src="SVG_ICONS.design.formConfig" width="20" height="20" />
                                <span>表单配置</span>
                            </template>
                            《我和我的祖国》
                        </a-tab-pane>
                        <a-tab-pane key="2">
                            <template #tab>
                                <img :src="SVG_ICONS.design.formOption" width="20" height="20" />
                                <span>组件配置</span>
                            </template>
                                Tab 2
                        </a-tab-pane>
                    </a-tabs>
                </a-layout-content>
            </a-layout>
        </a-col>
    </a-row>
    
</template>
<script lang="ts" setup>
import { LayoutSider as LayoutSide} from 'ant-design-vue'
import { reactive, ref} from 'vue';
import SVG_ICONS from '../icons/SVG_ICONS.ts';
import { FormItemType } from '../antDesignVue/public-index.ts';
import type {antDesignContext} from './demo.d.ts'
const activeKey = ref('1');




const antDesignOption=reactive<antDesignContext[]>([
    {
        title:'文本框',
        icon:SVG_ICONS.design.input,
        type:FormItemType.Input
    },
    {
        title:'文本域',
        icon:SVG_ICONS.design.textArea,
        type:FormItemType.Textarea
    },
    {
        title:'数字框',
        icon:SVG_ICONS.design.inputNumber,
        type:FormItemType.InputNumber
    },
    {
        title:'选择框',
        icon:SVG_ICONS.design.select,
        type:FormItemType.Select
    },
    {
        title:'单选按钮',
        icon:SVG_ICONS.design.radio,
        type:FormItemType.Radio
    },
    {
        title:'复选按钮',
        icon:SVG_ICONS.design.check,
        type:FormItemType.Checkbox
    }
])


const handleDesignContext=(item)=>{
    console.log(item as FormItemType);
}

</script>
<style  scoped>
:deep(.ant-space){
    width: 310px;
}
h1{
    font-weight: bold;
    text-align: center
}
    .site-layout-background {
        background: #fff;
    }
.scrollable-row {  
  overflow-y: auto; /* 启用垂直滚动 */  
  max-height: 1000px; /* 设置最大高度 */  
}
.Icon{
    width:20x;
    height:22px;
    line-height:32px;  
    display: inline-block;  
    vertical-align: middle;
    margin-right:5px;
}
.inline-block{
    display: inline-block;  
    vertical-align: middle;
}
</style>