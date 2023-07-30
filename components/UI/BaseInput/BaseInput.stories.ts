import { Meta, StoryFn } from "@storybook/vue3";
import BaseInput from "./BaseInput.vue";
import BaseInputProps from "../../../interfaces/props/BaseInputProps";
export default {
    title: 'UI/BaseInput',
    component: BaseInput,
    argTypes: BaseInputProps as unknown,
} as Meta;

const Template: StoryFn<typeof BaseInput> = (args) => ({
    components: { BaseInput },
    setup() {
        return { args }
    },
    template: `
    <base-input v-bind='args' v-model='args.value' />
    `
})

export const Default = Template.bind({})
Default.args = {
    placeholder: 'Default input',
    label: 'Default input'
}
export const PropsErrorMessage = Template.bind({})
PropsErrorMessage.args = {
    placeholder: 'With Error',
    label: 'With Error',
    errorMessage: 'Error message - error message, error error message'
}
export const ValidationFunction = Template.bind({})
ValidationFunction.args = {
    placeholder: 'Be careful!',
    label: 'Enter from 5 to 15 characters',
    findErrors: (value: String) => {
        return value.length < 5
            ? 'Damn bro too short'
            : value.length > 15
            ? 'Daaaamn bruh too long!'
            : ''
    }
}
export const PasswordExample = Template.bind({})
PasswordExample.args = {
    placeholder: 'Your password',
    label: 'Enter your password',
    type: 'password',
    name: 'password',
    autocomplete: 'password',
}
export const EmailExample = Template.bind({})
EmailExample.args = {
    placeholder: 'Your email',
    label: 'Enter your email',
    type: 'email',
    name: 'email',
    autocomplete: 'email',
}