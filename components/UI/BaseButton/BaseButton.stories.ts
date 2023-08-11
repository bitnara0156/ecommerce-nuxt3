import BaseButton from "./BaseButton.vue";
import { Meta, StoryFn } from '@storybook/vue3';
export default {
    title: 'UI/BaseButton',
    component: BaseButton,
    argTypes: {
        theme: {
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
    theme: 'default',
    default: 'Example of a default button'
}
export const Stroked = Template.bind({});
Stroked.args = {
    theme: 'stroked',
    default: 'Example of a stroked button'
}
export const Icon = Template.bind({});
Icon.args = {
    theme: 'icon',
    default: "Example of icon button",
}
export const Unthemed = Template.bind({});
Unthemed.args = {
    theme: 'untyped',
    default: 'Example of a untyped button'
}