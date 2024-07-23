import {  CheckboxGroup, DatePicker, Input, InputNumber, RadioGroup, Select, Textarea } from "ant-design-vue";

//配置antd-design组件名称内容
export const compoentsConfig={
    Text:Input,
    Textarea,
    Number:InputNumber,
    Select,
    Radio:RadioGroup,
    Checkbox:CheckboxGroup,
    DatePicker,
}

export const defaultCompoentProps={
    Text: {
        allowClear: true,
        bordered: true,
        disabled: false,
        showCount: true,
        maxlength: 100,
    },
    Textarea: {
        allowClear: true,
        autoSize: { minRows: 4, maxRows: 4 },
        showCount: true,
        maxlength: 200,
        style: {
            width: '100%'
        }
    },
    Select: {
        allowClear: true,
        bordered: true,
        disabled: false,
        showArrow: true,
        optionFilterProp: 'label',
        optionLabelProp: 'label',
        showSearch: true,
    },
    DatePicker: {
        allowClear: true,
        bordered: true,
        disabled: false,
        format: 'YYYY-MM-DD',
        picker: 'date',
        style: {
            width: '100%'
        }
    },
}