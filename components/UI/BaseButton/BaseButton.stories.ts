import BaseButton from "./BaseButton.vue";
import BaseButtonProps from "../../../interfaces/props/BaseButtonProps";
import { Meta, StoryFn } from '@storybook/vue3';
export default {
    title: 'UI/BaseButton',
    component: BaseButton,
    argTypes: BaseButtonProps as unknown,
    tags: ['autodocs'],
} as Meta;

const Template: StoryFn<typeof BaseButton> = (args) => ({
    components: { BaseButton },
    setup() {
        return { args }
    },
    template: `
    <base-button v-bind="args" v-html="args.default" />
    `
})

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    default: 'Example of a default button'
}
export const Stroked = Template.bind({});
Stroked.args = {
    type: 'stroked',
    default: 'Example of a stroked button'
}
export const Icon = Template.bind({});
Icon.args = {
    type: 'icon',
    default: "Example of icon button",
}
export const Untyped = Template.bind({});
Untyped.args = {
    type: 'untyped',
    default: 'Example of a untyped button'
}