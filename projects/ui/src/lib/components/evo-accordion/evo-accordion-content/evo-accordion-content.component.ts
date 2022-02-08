import {Component, HostBinding, Optional} from '@angular/core';
import {expandAnimation} from '../../../animations/';
import {EvoIsExpandedDirective} from '../../../directives/';
import {EvoExpandedService} from '../../../services/';

@Component({
    selector: 'evo-accordion-content',
    template: `
        <ng-content></ng-content>`,
    styleUrls: ['./evo-accordion-content.component.scss'],
    animations: [expandAnimation],
})
export class EvoAccordionContentComponent {

    constructor(
        @Optional() private readonly evoIsExpandedDirective: EvoIsExpandedDirective,
        private readonly evoExpandedService: EvoExpandedService,
    ) {
    }

    @HostBinding('@expand') get expandAnimation() {
        if (this.evoIsExpandedDirective) {
            return;
        } else {
            return this.evoExpandedService.isExpanded ? 'open' : 'close';
        }
    }
}
