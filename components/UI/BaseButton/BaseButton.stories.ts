import BaseButton from "./BaseButton.vue";
import { ButtonType } from "../../../interfaces/props/BaseButtonProps";
import { Meta, StoryFn } from '@storybook/vue3';
export default {
    title: 'UI/BaseButton',
    component: BaseButton,
    argTypes: {
        type: {
            control: 'string',
            description: 'Button can be either default, stroked, of icon (SB v 7.1 doesn\'t support Fontawesome CDN, so icon button has no icon in here)'
        }
    },
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