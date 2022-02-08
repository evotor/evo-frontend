import { EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormUtils {

    static validateControls(control: AbstractControl) {
        if (control instanceof FormControl) {
            control.markAsDirty();
            control.markAsTouched();
            (control.statusChanges as EventEmitter<string>).emit(control.status);
        } else if (control instanceof FormGroup) {
            for (const controlName of Object.keys(control.controls)) {
                FormUtils.validateControls(control.controls[controlName]);
            }
        } else if (control instanceof FormArray) {
            for (const subControl of control.controls) {
                FormUtils.validateControls(subControl);
            }
        }
    }

    static resetControls(control: AbstractControl) {
        if (control instanceof FormControl) {
            control.markAsPristine();
            control.markAsUntouched();
            control.setValue('', {
                emitEvent: false,
                onlySelf: true,
            });
        } else if (control instanceof FormGroup) {
            for (const controlName of Object.keys(control.controls)) {
                FormUtils.resetControls(control.controls[controlName]);
            }
        } else if (control instanceof FormArray) {
            for (const subControl of control.controls) {
                FormUtils.resetControls(subControl);
            }
        }
    }
}
