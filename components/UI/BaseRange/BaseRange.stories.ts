import { Meta, StoryFn } from "@storybook/vue3";
import BaseRange from "./BaseRange.vue";
import BaseRangeProps from "interfaces/props/BaseRangeProps";
export default {
    title: 'UI/BaseRange',
    tags: ['autodocs'],
    component: BaseRange,
    argTypes: {
        twoSided: {
            control: Boolean,
            description: 'Specifies if our range input has dynamic min and max thumbs'
        }
    },
    decorators: [
        ()=>({template: `<div class="w-64"><story /></div>`})
    ]
} as Meta

const Template: StoryFn<typeof BaseRange> = (args) => ({
    components: { BaseRange },
    setup() {
        return { args };
    },
    template: '<base-range v-bind="args" v-model:minValue="args.min" v-model:maxValue="args.max" />',
})

export const Default = Template.bind({})
Default.args = {
    twoSided: false,
    min: 0,
    max: 100
} as unknown as BaseRangeProps

export const TwoSided = Template.bind({})
TwoSided.args = {
    twoSided: true,
}
