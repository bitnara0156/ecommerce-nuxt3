import { Meta, StoryFn } from "@storybook/vue3";
import BaseRange from "./BaseRange.vue";
import BaseRangeProps from "interfaces/props/BaseRangeProps";
export default {
    title: 'UI/BaseRange',
    tags: ['autodocs'],
    component: BaseRange,
    argTypes: {
        limit: {
            control: {
                accepts: ['min', 'max', true]
            },
            description: 'Max value allowed for the input',
        },
        minimum: {
            control: 'text',
            description: 'Min value allowed for the input',
        },
        textInput: {
            control: 'text',
            description: `Sets up text inputs on the left and the right, can be euther ${true}, 'min' or 'max'`,
        },
    },
    decorators: [
        ()=>({template: `
        <div class="w-96 border border-gray-300 rounded shadow py-2 px-4">
            <p class="text-gray-600"> Range input </p>
            <div class="py-4">
                <story />
            </div>
        </div>`})
    ]
} as Meta

const Template: StoryFn<typeof BaseRange> = (args) => ({
    components: { BaseRange },
    setup() {
        return { args };
    },
    template: '<base-range v-bind="args" v-model:minValue="args.minValue" v-model:maxValue="args.maxValue" />',
})

export const Default = Template.bind({})
Default.args = {} as unknown as BaseRangeProps

export const UsingInput = Template.bind({})
UsingInput.args = {
    maxValue: 100,
    textInput: true
} as unknown as BaseRangeProps


export const BigStep = Template.bind({})
BigStep.args = {
    step: 10,
    textInput: 'min'
} as unknown as BaseRangeProps

export const BigLimit = Template.bind({})
BigLimit.args = {
    limit: 10000,
    textInput: 'min'
} as unknown as BaseRangeProps

export const MinMaxMode = Template.bind({})
MinMaxMode.args = {
    maxValue: 100,
    textInput: true,
}

export const MinInputOnly = Template.bind({})
MinInputOnly.args = {
    textInput: 'min',
    maxValue: 10,
} as unknown as BaseRangeProps


export const MaxInputOnly = Template.bind({})
MaxInputOnly.args = {
    textInput: 'max',
    maxValue: 100,
} as unknown as BaseRangeProps


export const MinimalRange = Template.bind({})
MinimalRange.args = {
    step: 25,
    minimalRange: 2400,
    limit: 6000,
    maxValue: 900,
    textInput: true,
} as unknown as BaseRangeProps