
export default {
    modelValue: {
        type: String,
        required: true
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
        type: String,
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
    }
}