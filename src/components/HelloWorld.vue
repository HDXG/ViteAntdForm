

<template>
  <h1>呢容</h1>
  <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />
</template>


<script setup lang="ts">
import '../style.css'
import{reactive} from 'vue'
import DynamicForm from '../antDesignVue/FormDesign/antForm'
import { FormConfig, FormItemOption, FormItemRadio, FormItemSelect, FormItemSelectMode, FormItemType,FormLabelWrapperCol,FormRules } from '../antDesignVue/public-index';
import SVG_ICONS from '../icons/SVG_ICONS';
import { timeFormat } from '../utils/dateTime';
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
});
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
      formState.textarea=value.target.value;
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
      formState.Date=timeFormat(value);
    }
  },
  {
    type:FormItemType.DatePicker,
    label:'日期开始结束',
    DateType:1,
    fileId:'BeginDate',
    value:formState.BeginDate,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请选择开始和结束日期'}] as FormRules[],
    onChange:(value)=>{
      console.log(value);
    }
  }
])

const formConfig=new FormConfig();


const itemRadio=new FormItemRadio();
itemRadio.type=FormItemType.Radio;
itemRadio.label="性别";
itemRadio.fileId='resource';
itemRadio.value=formState.resource;
itemRadio.options=[{value:'1',label:'男'},{value:'0',label:'女'}] as FormItemOption[];
itemRadio.FormRules=[{required:true,message:'请选择性别'}] as FormRules[];

const itemSelect=new FormItemSelect();
itemSelect.type=FormItemType.Select;
itemSelect.label='班级';
itemSelect.fileId='class';
itemSelect.value=formState.class;
itemSelect.options=[{value:1,label:'测试1'},{value:2,label:'测试2'}] as FormItemOption[];
itemSelect.FormRules=[{required:true,message:'请选择班级'}] as FormRules[],
itemSelect.suffixIcon=SVG_ICONS.setup.exitfullscreennew;
itemSelect.mode=FormItemSelectMode.multiple;
itemSelect.onChange=(value)=>{
  console.log(value);
};

formOption.push(itemRadio);
formOption.push(itemSelect);
formOption.push({
  type:'submit',
  wrapperCol:{ span:12, offset:6}  as FormLabelWrapperCol
});




const handleButton=((value)=>{
  console.log(value);
});

</script>