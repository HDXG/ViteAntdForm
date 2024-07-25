

<template>
  <h1>呢容</h1>
  <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />
</template>


<script setup lang="ts">
import '../style.css'
import{reactive} from 'vue'
import DynamicForm from '../antDesignVue/FormDesign/antForm'
import { DatePickerPresetsData, FormConfig, FormItemOption, FormItemSelectMode, FormItemType,FormLabelWrapperCol,FormRules } from '../antDesignVue/public-index'
import SVG_ICONS from '../icons/SVG_ICONS'
import { timeFormat } from '../utils/dateTime'
interface formItem{
    resource:string,
    textarea:string,
    class:any,
    textarea1:string,
    Date:string,
    BeginDate:[],
}
const formState=reactive<formItem>({
    resource:'0',
    textarea:'',
    textarea1:'',
    class:undefined,
    Date:'',
    BeginDate:[],
})
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
    type:FormItemType.Select,
    label:'班级',
    fileId:'class',
    value:formState.class,
    options:[{value:1,label:'测试1'},{value:2,label:'测试2'}] as FormItemOption[],
    FormRules:[{required:true,message:'请选择班级'}] as FormRules[],
    suffixIcon:SVG_ICONS.setup.exitfullscreennew,
    mode:FormItemSelectMode.multiple,
    onChange:(value)=>{
      console.log(value)
    }
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
const formConfig=new FormConfig();
const handleButton=((value)=>{
  console.log(value);
})

</script>