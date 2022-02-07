import { Directive, Injector, Input } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { EvoControlState } from '../interfaces/evo-control-state';
import { EvoControlError } from '../interfaces/evo-control-error';

@Directive()
export class EvoBaseControl {

    @Input() errorsMessages: EvoControlError | undefined;
    @Input() state: EvoControlState | undefined;

    private _control: AbstractControl | undefined;

    constructor(
        protected injector: Injector,
    ) {
    }

    get control(): AbstractControl | undefined {
        if (!this._control) {
            this.initBaseControl();
        }
        return this._control;
    }

    set control(control: AbstractControl | undefined) {
        this._control = control;
    }

    initBaseControl() {
        const ngControl = this.injector?.get(NgControl, null);
        if (ngControl?.control) {
            this._control = ngControl?.control;
        }
    }

    get currentState(): EvoControlState {
        return Object.assign(
            {
                valid: this.control ? this.control.dirty && this.control.touched && this.control.valid : undefined,
                invalid: this.control ? this.control.dirty && this.control.touched && this.control.invalid : undefined,
            },
            this.state,
        );
    }

    get showErrors(): boolean {
        return this.currentState.invalid;
    }

}
