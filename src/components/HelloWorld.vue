

<template>
  <h1>呢容</h1>
  <DynamicForm :options="formOption" :config="formConfig" :value="formState" :onFormFinish="handleButton"  />



</template>


<script setup lang="ts">
import '../style.css'
import{reactive} from 'vue'
import DynamicForm from '../antdDesignVue/FormDesign/antdForm'
import { FormConfig, FormItemOption, FormItemRadio, FormItemSelect, FormItemType,FormLabelWrapperCol,FormLayout,FormRules } from '../antdDesignVue/public-index';
interface formItem{
    resource:string,
    textarea:string,
    graud:number,
}
const formState=reactive<formItem>({
    resource:'0',
    textarea:'',
    graud:1,
});
const formOption=reactive<any>([
  {
    type:'AInput',
    label:'测试内容',
    fileId:'textarea',
    value:formState.textarea,
    placeholder:'请输入内容',
    FormRules:[{required:true,message:'请输入测试内容'}] as FormRules[],
    onChange:(value)=>{
      formState.textarea=value.target.value;
    }
  }
])

const formConfig=new FormConfig();
formConfig.layout=FormLayout.horizontal;


const itemRadio=new FormItemRadio();
itemRadio.type=FormItemType.Radio;
itemRadio.label="性别";
itemRadio.fileId='resource';
itemRadio.value=formState.resource;
itemRadio.options=[{value:'1',label:'男'},{value:'0',label:'女'}] as FormItemOption[];
itemRadio.FormRules=[{required:true,message:'请选择性别'}] as FormRules[],
itemRadio.onChange=(value:any)=>{
  console.log(value.target.value);
}
const itemSelect=new FormItemSelect();
itemSelect.type=FormItemType.Select;
itemSelect.label='班级';
itemSelect.fileId='graud';
itemSelect.value=formState.graud;
itemSelect.options=[{value:1,label:'测试1'},{value:2,label:'测试2'}] as FormItemOption[];
itemSelect.FormRules=[{required:true,message:'请选择班级'}] as FormRules[],
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