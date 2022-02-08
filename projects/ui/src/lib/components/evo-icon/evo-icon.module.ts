import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EvoIconComponent} from './evo-icon.component';
import {EvoIconsLibrary} from './classes/evo-icons-library';
import {IconsCategory} from './interfaces/icons-category';
import {evoIconsLibraryGetter} from './functions/evo-icons-library-getter';
import {ICONS_LIST_TOKEN} from './tokens/icons-list-token';
import {EvoUiModule} from '../../evo-ui.module';

@NgModule({
    imports: [
        CommonModule,
        EvoUiModule,
    ],
    exports: [EvoIconComponent],
    declarations: [EvoIconComponent],
})
export class EvoIconModule {
    static forRoot(iconsList: IconsCategory[]): ModuleWithProviders<EvoIconModule> {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: ICONS_LIST_TOKEN,
                useValue: iconsList,
                multi: true,
            }, {
                provide: EvoIconsLibrary,
                useFactory: evoIconsLibraryGetter,
                deps: [ICONS_LIST_TOKEN],
            }]
        };
    }

    static forChild(iconsList: IconsCategory[]): ModuleWithProviders<EvoIconModule> {
        return {
            ngModule: EvoIconModule,
            providers: [{
                provide: ICONS_LIST_TOKEN,
                useValue: iconsList,
                multi: true,
            }, {
                provide: EvoIconsLibrary,
                useFactory: evoIconsLibraryGetter,
                deps: [ICONS_LIST_TOKEN],
            }]
        };
    }
}
