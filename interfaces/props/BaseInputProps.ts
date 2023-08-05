
export default {
    modelValue: {
        type: String,
        required: true
    },
    findErrors: {
        type: Function as PropType<(value: String) => string>,
        required: false,
        default: () => '',
    },
    placeholder: {
        type: String,
        required: false,
        default: ''
    },
    label: {
        type: String,
        required: false,
        default: ''
    },
    errorMessage: {
        type: String,
        required: false,
        default: ''
    },
    autocomplete: {
        type: String as PropType<'on' | 'off' | 'email' | 'password'>,
        required: false,
        default: ''
    },
    name: {
        type: String,
        required: false,
        default: ''
    },
    type: {
        type: String,
        required: false,
        default: 'text'
    },
    value: {
        type: String,
        required: false,
        default: '',
    },
}