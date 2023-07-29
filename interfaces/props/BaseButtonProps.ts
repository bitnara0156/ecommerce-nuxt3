import { PropType } from 'vue';
type ButtonType = 'default' | 'stroked' | 'icon' | null
export default {
    type: {
        type: String as PropType<ButtonType>,
        required: false,
        default: 'default'
    }
}