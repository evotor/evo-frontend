import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {
    EvoAccordionComponent,
    EvoAccordionContentComponent,
    EvoAccordionModule,
    EvoAccordionPanelComponent,
    EvoAccordionTitleComponent
} from '../../../projects/ui/src/lib/components/evo-accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export default {
    title: 'components/evo-accordion',
    component: EvoAccordionComponent,
    subcomponents: {
        'components/evo-accordion-panel': EvoAccordionPanelComponent,
        'components/evo-accordion-title': EvoAccordionTitleComponent,
        'components/evo-accordion-content': EvoAccordionContentComponent,
    },
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
        isExpandedPanel4: {
            control: 'boolean',
            defaultValue: false,
        },
    },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const template: Story = (args) => ({
    props: args,
    template: `
        <evo-accordion>
            <evo-accordion-panel>
                <evo-accordion-title label="Panel 1"></evo-accordion-title>
                <evo-accordion-content *evoIsExpanded="true">Panel 1 Content</evo-accordion-content>
            </evo-accordion-panel>

            <evo-accordion-panel>
                <evo-accordion-title label="Panel 2"></evo-accordion-title>
                <ng-template evoIsExpanded>
                    <evo-accordion-content>Panel 2 Content</evo-accordion-content>
                </ng-template>
            </evo-accordion-panel>

            <evo-accordion-panel>
                <evo-accordion-title label="Panel 3 {{isExpandedPanel3 ? 'Opened' : 'Closed'}}"></evo-accordion-title>
                <ng-template evoIsExpanded (evoIsExpandedChange)="isExpandedPanel3 = $event">
                    <evo-accordion-content>Panel 3 Content</evo-accordion-content>
                </ng-template>
            </evo-accordion-panel>

            <evo-accordion-panel>
                <evo-accordion-title label="Panel 4"></evo-accordion-title>
                <ng-template [(evoIsExpanded)]="isExpandedPanel4">
                    <evo-accordion-content>Panel 4 Content</evo-accordion-content>
                </ng-template>
            </evo-accordion-panel>

            <evo-accordion-panel #panel5>
                <evo-accordion-title label="Panel 5"></evo-accordion-title>
                <evo-accordion-content *evoIsExpanded>Panel 5 Content</evo-accordion-content>
            </evo-accordion-panel>


        </evo-accordion>
        <br>
        <button (click)="panel5.toggle()">Toggle panel 5</button>
    `,
});

export const primary = template.bind({
    isExpandedPanel4: false,
});
