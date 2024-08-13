import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { PersonService } from '../api/person.service';
import { CpShowErrorComponent } from "../cp-show-error/cp-show-error.component";
import { Notify } from '../Notify';


@Component({
	selector: 'person-insert',
	standalone: true,
	imports: [
    FormsModule,
    ReactiveFormsModule,
    CpShowErrorComponent
	],
	templateUrl: './insert-datos.component.html',
	styleUrl: './insert-datos.component.scss',
})

export class PersonInsertComponent {
	frmInsertPerson: UntypedFormGroup;

	get firstNameFb(){ return this.frmInsertPerson.controls['firstName']; }
	get surNameFb(){ return this.frmInsertPerson.controls['surName']; }
	get dniFb(){ return this.frmInsertPerson.controls['dni']; }
	get genderFb(){ return this.frmInsertPerson.controls['gender']; }
	get birthDateFb(){ return this.frmInsertPerson.controls['birthDate']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: PersonService,
		private notify: Notify
	) {
		this.frmInsertPerson = this.formBuilder.group({
			firstName: ['', [Validators.required]],
			surName: ['', [Validators.required]],
			dni: ['', [Validators.required, Validators.pattern(/^([0-9]{8})?$/)]],
			gender: ['', [Validators.required]],
			birthDate: ['', [Validators.required]]
		});
	}

	onClickBtnSubmit(): void {

		/*if(!this.frmInsertPerson.valid) {
			this.frmInsertPerson.markAllAsTouched();
			this.frmInsertPerson.markAsDirty();
			return;
		}*/
		let formData: FormData = new FormData();
	
		formData.append('firstName', this.firstNameFb.value);
		formData.append('surName', this.surNameFb.value);
		formData.append('dni', this.dniFb.value);
		formData.append('gender', this.genderFb.value); 
		formData.append('birthDate', this.birthDateFb.value);
	
		this.personService.insert(formData).subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (errorResponse: any) => {
				console.log(errorResponse.error); // Asegúrate de que la respuesta de error esté en el formato esperado
		
				if (errorResponse && errorResponse.error && errorResponse.error.listMessage) {
				  const errors = errorResponse.error.listMessage; 
				  this.showErrors(errors); 
				} else {
				  console.error('Ocurrió un error inesperado:', errorResponse);
				}
			}
		});
	}
		
	showErrors(errors: string[]) {
		for (const error of errors) {
		  this.notify.error({
			title: 'Error:',
			text: error,
			nonblock: false,
			delay: 1200, 
			width: '400px', 
		  });
		}
	}
		
}