import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  if (!control.value.includes('@gmail.com')) {
    return {validEmail: true};
  }
  return null;
}
