
import upload from './svg/Design/upload.svg?url'
import radio from './svg/Design/radio.svg?url'
import inputNumber from './svg/Design/inputNumber.svg?url'
import datePicker from './svg/Design/datePicker.svg?url'
import select from './svg/Design/select.svg?url'
import check from './svg/Design/Check.svg?url'
import input from './svg/Design/input.svg?url'
import textArea from './svg/Design/textArea.svg?url'
import formConfig from './svg/Design/formConfig.svg?url'
import formOption from './svg/Design/formOption.svg?url'
class iconOption{
    label:string='';
    value:string='';
}

const iconOptions:iconOption[]=[
    {label:"上传",value:upload},
    {label:"单选按钮",value:radio},
    {label:"数字框",value:inputNumber},
    {label:'日期',value:datePicker},
    {label:"选择",value:select},
    {label:"复选",value:check},
    {label:"文本框",value:input},
    {label:"文本域",value:textArea},
    {label:"表单配置",value:formConfig},
    {label:"表单项配置",value:formOption},
];

export default iconOptions;

