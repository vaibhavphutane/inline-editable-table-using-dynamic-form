import { AbstractControl } from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  console.log(typeof control.value);
  if (!control.value.includes('@gmail.com')) {
    return {validEmail: true};
  }
  return null;
}
