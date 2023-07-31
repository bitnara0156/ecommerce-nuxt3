import { PropType } from "vue";
type BaseToggleMessageList = {
    truphyCondition: String,
    falsyCondition: String,
}
export default {
    modelValue: {
        type: Boolean,
        required: false,
        default: false
    },
    label: {
        type: String,
        required: false,
        default: '',
    },
    message: {
        type: Object as PropType<BaseToggleMessageList>,
        required: false,
        default: ''
    }
}