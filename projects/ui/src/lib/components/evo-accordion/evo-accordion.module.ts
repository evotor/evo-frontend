import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {EvoUiModule} from '../../evo-ui.module';
import {EvoIconModule} from '../evo-icon';
import {EvoAccordionContentComponent} from './evo-accordion-content/evo-accordion-content.component';
import {EvoAccordionPanelComponent} from './evo-accordion-panel/evo-accordion-panel.component';
import {EvoAccordionTitleComponent} from './evo-accordion-title/evo-accordion-title.component';
import {EvoAccordionComponent} from './evo-accordion.component';
import {navigationIcons} from '@evo/icons';

@NgModule({
    imports: [
        CommonModule,
        EvoUiModule,
        EvoIconModule.forRoot([
            navigationIcons
        ]),
    ],
    declarations: [
        EvoAccordionComponent,
        EvoAccordionTitleComponent,
        EvoAccordionPanelComponent,
        EvoAccordionContentComponent,
    ],
    exports: [
        EvoUiModule,
        EvoAccordionComponent,
        EvoAccordionTitleComponent,
        EvoAccordionPanelComponent,
        EvoAccordionContentComponent,
    ],
})
export class EvoAccordionModule {
}
