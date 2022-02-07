import { NgModule } from '@angular/core';
import { EvoClickOutsideDirective, EvoIsExpandedDirective, EvoUiClassDirective } from './directives';

const bundle = [
    EvoClickOutsideDirective,
    EvoIsExpandedDirective,
    EvoUiClassDirective,
];

@NgModule({
    declarations: [
        ...bundle,
    ],
    exports: [
        ...bundle,
    ],
})
export class EvoUiModule {

}
