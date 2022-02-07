import { Component, HostListener, Input } from '@angular/core';
import { EvoExpandedService } from '../../../services/evo-expanded.service';

@Component({
    selector: 'evo-accordion-title',
    templateUrl: './evo-accordion-title.component.html',
    styleUrls: ['./evo-accordion-title.component.scss'],
})
export class EvoAccordionTitleComponent {

    @Input() label: string | undefined;

    isExpanded$ = this.expandedService.isExpandedChange$;

    constructor(
        private expandedService: EvoExpandedService,
    ) {
    }

    @HostListener('click') onClick() {
        this.expandedService.isExpanded = !this.expandedService.isExpanded;
    }
}
