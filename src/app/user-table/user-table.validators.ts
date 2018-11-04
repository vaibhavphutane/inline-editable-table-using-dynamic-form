import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  if (!control.value.endsWith('@gmail.com')) {
    return {validEmail: true};
  }
  return null;
}
