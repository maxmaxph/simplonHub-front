import { AbstractControl, ValidatorFn } from '@angular/forms';

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      // Si le champ est vide, on le considère comme valide
      return null;
    }

    const valid = /^[0-9]{10}$/.test(control.value);
    return valid ? null : { phoneNumberInvalid: true };
  };
}
