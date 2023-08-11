type ButtonType = 'default' | 'stroked' | 'icon' | 'untyped' | null
export default interface BaseButtonProps {
    theme: ButtonType | String,
    icon?: String
}
export { ButtonType };