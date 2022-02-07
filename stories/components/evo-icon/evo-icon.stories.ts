import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EvoIconComponent, EvoIconModule } from '../../../projects/ui/src/lib/components/evo-icon';

// TODO: replace to @evo/icons after icons module will be ready
import { icons } from '@evo/icons';

export default {
    title: 'components/evo-icon',
    component: EvoIconComponent,
    decorators: [
        moduleMetadata({
            imports: [
                EvoIconModule.forChild([...icons]),
            ],
        }),
    ],
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: {
        // backgroundColor: {control: 'color'},
    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const template: Story<EvoIconComponent> = (args: EvoIconComponent) => ({
    props: args,
});

export const primary = template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
primary.args = {
    shape: 'barcode'
};

// export const secondary = template.bind({});
// secondary.args = {
//     label: 'Button',
// };
//
// export const large = template.bind({});
// large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const small = template.bind({});
// small.args = {
//     size: 'small',
//     label: 'Button',
// };
