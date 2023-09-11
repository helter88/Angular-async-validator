import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, Validator } from "@angular/forms";

@Injectable({providedIn:"root"})
export class MatchPassword implements Validator {
    validate(formGroup: AbstractControl) {
        const {password, passwordConfirmation} = formGroup.value;

        if(password === passwordConfirmation){
            return null;
        } else {
            return {invalidPassword: true}
        }
    }
}
