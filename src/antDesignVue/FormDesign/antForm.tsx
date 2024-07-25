
import {  defineComponent, PropType, watch } from 'vue';
import {  FormConfig, FormItemType } from './FormConfig/public-index';
import { Button, CheckboxGroup, DatePicker, Form,FormItem,Input,message,RadioGroup,RangePicker,Select} from 'ant-design-vue'
import 'dayjs/locale/zh-cn';
import { timeFormat } from '../..//utils/dateTime';
import { ConfigType } from 'dayjs';
function renderFormItem(formItems: any[]) {
    return formItems.map((ele: any) => 
        {
            //IsItDisplayed 判断表单项是否显示
            if(ele.IsItDisplayed){
                return (<></>);
            }
            return (<FormItem  label={ele?.label} name={ele?.fileId}
                wrapper-col={ele?.wrapperCol}
                rules={ele?.FormRules}>{createFormItem(ele)}
            </FormItem>)
        })
}

function createFormItem(formItem: any){
    if(formItem.type === FormItemType.Input){
        return (<Input v-model:value={formItem.value}
            bordered={formItem?.bordered}
            placeholder={formItem.placeholder} allow-clear 
            onChange={formItem?.onChange}
            prefix={formItem?.prefix!=null?<img src={formItem.prefix} class='InputIcon' />:null}
            suffix={formItem?.suffix!=null?<img src={formItem.suffix} class='InputIcon' />:null}
            >
         </Input>)
    }
    if(formItem.type === FormItemType.Radio) {
        return (<RadioGroup
            v-model:value={formItem.value}
            options={formItem.options}  name={formItem.name} onChange={formItem?.onChange}></RadioGroup>)
    } 
    if(formItem.type===FormItemType.Checkbox){
        return (<CheckboxGroup
            v-model:value={formItem.value}   options={formItem.options}  onChange={formItem?.onChange}
      ></CheckboxGroup>)
    }
    //选择框
    if(formItem.type===FormItemType.Select){
        return(<Select v-model:value={formItem.value} mode={formItem.mode} 
              options={formItem.options} 
              onChange={formItem?.onChange} 
              suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}
            ></Select>)
    }
    //日期选择
    if(formItem.type===FormItemType.DatePicker){
        if(formItem.DateType==1){
            return(<RangePicker v-model:value={formItem.value} 
                picker={formItem?.picker}
                bordered={formItem.bordered}
                onChange={formItem?.onChange} 
                suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}
            ></RangePicker>)
        }
        else
            return(<DatePicker v-model:value={formItem.value} 
                picker={formItem?.picker}
                bordered={formItem.bordered}
                onChange={formItem?.onChange} 
                suffixIcon={formItem?.suffixIcon!=null?<img src={formItem.suffixIcon} class='InputIcon' />:null}
            ></DatePicker>)
    }
    //提交按钮内容
    if(formItem.type==='submit'){
        return(
            <Button type='primary'  html-type="submit">提交</Button> 
            // {/* <Button type='primary' class="marginLeftButton" >重置</Button> */}
        )
    }
    return (<div>1</div>)
}


export default  defineComponent({
    name:'DynamicForm',
    props: {  
        options: {  type: Array as PropType<any[]>, required: true,},
        config:{type:null,required:true},
        value:{type:null,required:true},
        onFormFinish: {  
            type: Function as PropType<(values: any) => void>,  
            required: false,  
          },  
        onFormFinishFailed: {  
            type: Function as PropType<(errorInfo: any) => void>,  
            required: false,  
          },  
      },  
    setup(props){
        //表单提交成功事件
        const handleSubmit = (values:any) => { 
            if (props.onFormFinish) {  
                props.onFormFinish(values);  
            }  
        };  
        //表单提交失败事件
        const finishFailed=(errorInfo:any)=>{
            message.error(errorInfo.errorFields[0].errors);
            // if (props.onFormFinishFailed) {  
            //     props.onFormFinishFailed(errorInfo);  
            // }  
        }
        watch(props.options,(newValue:any[])=>{
            newValue.map((item)=>{
                switch(item.type as FormItemType){
                     //日期判断
                    case FormItemType.DatePicker:
                        if(item.value!='')
                        {
                            if(item.DateType==1){
                                var date:any=[];
                                item.value.map((dateItem:ConfigType)=>{
                                    date.push(timeFormat(dateItem));
                                });
                                props.value[item.fileId]=date;
                            }
                            else
                            props.value[item.fileId]=timeFormat(item.value);
                        }
                           
                        break;
                    default:
                        props.value[item.fileId]=item.value; 
                        break;
                }
               
                
            })
        });
        const config=props.config as FormConfig;
        return ()=>(<Form   name="basic" model={props.value} 
            label-col={config?.labelCol}
            wrapper-col={config?.wrapperCol}
            layout={config?.layout}
            autocomplete={config?.autocomplete}
            disabled={config?.disabled}
            onFinish={handleSubmit}
            onFinishFailed={finishFailed} 
          >
            {renderFormItem(props.options)}
        </Form>);
    },
});