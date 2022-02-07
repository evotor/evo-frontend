import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { skipInitialRenderAnimation } from '../../animations/';

@Component({
    selector: 'evo-accordion',
    template: `
        <ng-content></ng-content>`,
    styleUrls: ['./evo-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [skipInitialRenderAnimation],
})
export class EvoAccordionComponent {

    @HostBinding('@skipInitialRender') skipInitialRender: boolean | undefined;

}
