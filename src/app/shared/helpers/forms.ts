import { FormControl } from "@angular/forms";

export function noWhitespaceValidator(control: FormControl) {
    return control.value.indexOf(' ') < 0 ? null : { 'whitespace': true };       
}