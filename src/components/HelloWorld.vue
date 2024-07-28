

<template>
  <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />
</template>


<script setup lang="ts">
import '../style.css'
import{onMounted, reactive} from 'vue'
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
    money:number,
    career:any,
}
const formState=reactive<formItem>({
    resource:'0',
    textarea:'',
    textarea1:'',
    class:undefined,
    Date:'',
    BeginDate:[],
    money:1,
    career:[]
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
const formConfig=new FormConfig();
formConfig.wrapperCol={span:12} as FormLabelWrapperCol;
const handleButton=((value:formItem)=>{
  console.log(value.class.join(','));
})

onMounted(()=>{
  console.log(1);
})

</script>