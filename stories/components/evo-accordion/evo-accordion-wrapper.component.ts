import { Component } from '@angular/core';

@Component({
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
    `
})
export class EvoAccordionWrapperComponent {
    isExpandedPanel3 = false;
    isExpandedPanel4 = false;
}
