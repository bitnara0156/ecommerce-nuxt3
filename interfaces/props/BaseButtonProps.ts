import { PropType } from 'vue';
type ButtonType = 'default' | 'stroked' | 'icon' | 'untyped' | null
export default {
    type: {
        type: String as PropType<ButtonType>,
        required: false,
        default: 'default'
    },
    icon: {
        type: String,
        required: false,
        default: 'fa-solid fa-arrow-right',
    }
}
export { ButtonType };