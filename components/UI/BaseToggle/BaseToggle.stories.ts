import { StoryFn, Meta } from "@storybook/vue3"
import BaseToggle from "./BaseToggle.vue"
import BaseToggleProps from "../../../interfaces/props/BaseToggleProps";
export default {    
    title: 'UI/BaseToggle',
    component: BaseToggle,
    tags: ['autodocs'],
    args: BaseToggleProps,
    decorators: [
        ()=>({template: '<div class="border rounded p-3 shadow"><story /></div>'})
    ]
} as Meta

const Template: StoryFn<typeof BaseToggle> = (args) => ({
    components: {BaseToggle},
    setup() {
        return { args };
    },
    template: `<base-toggle v-bind='args' v-model="args.value" />`
})

export const Default = Template.bind({})
Default.args = {
    label: "Default"
}

export const ConditionalMessages = Template.bind({})
ConditionalMessages.args = {
    label: "Conditional Messages",
    message: {
        truphyCondition: 'Toggle is on!',
        falsyCondition: 'Toggle is off!'
    }
}