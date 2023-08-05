type ButtonType = 'default' | 'stroked' | 'icon' | 'untyped' | null
export default interface BaseButtonProps {
    type: ButtonType | String,
    icon: String
}
export { ButtonType };