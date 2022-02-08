import {NgModule} from '@angular/core';
import {EvoClickOutsideDirective, EvoIsExpandedDirective, EvoUiClassDirective} from './directives';
import {SafeHtmlPipe} from './pipes';

const directives = [
    EvoClickOutsideDirective,
    EvoIsExpandedDirective,
    EvoUiClassDirective,
];

const pipes = [
    SafeHtmlPipe,
]

@NgModule({
    declarations: [
        ...directives,
        ...pipes,
    ],
    exports: [
        ...directives,
        ...pipes,
    ],
    imports: [],
})
export class EvoUiModule {

}
