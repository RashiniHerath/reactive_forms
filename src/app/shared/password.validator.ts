import { AbstractControl } from "@angular/forms";

function PassowrdValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && (password.pristine || confirmPassword.pristine)) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch': true} : null;
}