<template>
    <a-layout style="width: 100%;"  :style="{  height: '70px',zIndex:'19', position: 'fixed', left: 0, top: 0, bottom: 0 }">
        <a-layout-header class="header">
            <h1 style="color: #fff;">Ant-Design-Vue 表单设计器</h1>
        </a-layout-header>
    </a-layout>
    <a-row style="z-index:20;position: fixed;width: 100%;margin-top:70px;overflow:auto;">
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
        <a-col :span="14"  class="scrollable-row">
            <a-layout style="padding: 0 5px 5px;">
                <a-layout-content style="background:#fff;min-height:100vh;padding: 24px" >
                    <h1>组件显示</h1>
                    <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />
                </a-layout-content>
            </a-layout>
        </a-col>
        <a-col :span="6"   class="scrollable-row">
            <a-layout style="padding: 0 5px 5px;">
                <a-layout-content style="background:#fff;min-height:100vh;">
                    <a-tabs v-model:activeKey="activeKey">
                        <a-tab-pane key="1">
                            <template #tab>
                                <img :src="SVG_ICONS.design.formConfig" width="20" height="20" />
                                <span>表单配置</span>
                            </template>
                            <a-form >
                                <a-form-item label="布局方式">
                                    <a-radio-group v-model:value="formConfig.layout" :options="formConfigLayout"
                                    @change="formConfig.layout=$event.target.value;">
                                    </a-radio-group>
                                </a-form-item>
                            </a-form>

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
import  {antDesignContext,antDesignContextService} from './demo.ts'
import   {FormConfig,DatePickerPresetsData} from '../antDesignVue/public-index'
import DynamicForm from '../antDesignVue/FormDesign/antForm'
const activeKey = ref('1');
const formConfigLayout=ref(["horizontal","vertical","inline"]);

const formState=reactive<any>({});

//表单内部配置项
// const formOption=reactive<any>([]);

const formOption=reactive<any>([
{
    type:FormItemType.Input,
    label:'测试内容',
    fileId:'textarea',
    value:formState.textarea,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请输入测试内容'}] as FormRules[],
    prefix:SVG_ICONS.setup.exitfullscreennew,
    suffix:SVG_ICONS.setup.fullscreennew,
    onChange:(value)=>{
        formState.textarea=value.target.value
    }
},
{
    type:FormItemType.Input,
    label:'测试内容2',
    fileId:'textarea1',
    value:formState.textarea1,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请输入测试内容2'}] as FormRules[],
    onChange:(value)=>{
      formState.textarea1=value.target.value;
    },
  },
  {
    type:FormItemType.Radio,
    label:"性别",
    fileId:'resource',
    value:formState.resource,
    options:[{value:'1',label:'男'},{value:'0',label:'女'}] as FormItemOption[],
    FormRules:[{required:true,message:'请选择性别'}] as FormRules[],
  },
  {
    type:FormItemType.Checkbox,
    label:'职业',
    fileId:'career',
    value:formState.career,
    options:[{value:-1,label:'全选'},{value:1,label:'牛马'},{value:2,label:'小牛马'},
      {value:3,label:'大牛马'},{value:4,label:'不是牛马'}] as FormItemOption[],
    // FormRules:[{required:true,message:'请选择职业'}] as FormRules[],
    // indeterminate:true,
    onChange:(value)=>{
      console.log(value)
    }
  },
  {
    type:FormItemType.InputNumber,
    label:'金额',
    fileId:'money',
    value:formState.money,
    min:0,
    max:100,
    FormRules:[{required:true,message:'请输入金额'}] as FormRules[],
  },
  {
    type:FormItemType.DatePicker,
    label:'日期选择',
    fileId:'Date',
    value:formState.Date,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请选择日期'}] as FormRules[],
    onChange:(value)=>{
      formState.Date=timeFormat(value)
    }
  },
  {
    type:FormItemType.DatePicker,
    label:'日期开始结束',
    DateType:1,
    fileId:'BeginDate',
    value:formState.BeginDate,
    presets:DatePickerPresetsData(),
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请选择开始和结束日期'}] as FormRules[],
    onChange:(value)=>{
      formState.BeginDate=timeFormat(value,1)
    }
  },
  {
    type:'submit',
    wrapperCol:{ span:12, offset:6}  as FormLabelWrapperCol
  }
])



//表单配置
const formConfig=reactive<FormConfig>({
    layout:'horizontal',
});

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


const handleButton=(value)=>{
    console.log(value);
}

const handleDesignContext=(item)=>{
    const antDesignService=new antDesignContextService();
    formOption.push(antDesignService.AddContext(item));
    console.log(formOption);
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