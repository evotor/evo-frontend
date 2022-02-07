import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { EvoIconComponent } from '../../../projects/ui/src/lib/components/evo-icon';
import { EvoAccordionModule } from '../../../projects/ui/src/lib/components/evo-accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EvoAccordionWrapperComponent } from './evo-accordion-wrapper.component';

export default {
    title: 'components/evo-accordion',
    component: EvoAccordionWrapperComponent,
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                EvoAccordionModule,
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
