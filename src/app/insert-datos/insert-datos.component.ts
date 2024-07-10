import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { PersonService } from '../api/person.service';

@Component({
	selector: 'person-insert',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
	templateUrl: './insert-datos.component.html',
	styleUrl: './insert-datos.component.scss'
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
		private personService: PersonService
	) {
		this.frmInsertPerson = this.formBuilder.group({
			firstName: [null, [Validators.required]],
			surName: [null, [Validators.required]],
			dni: [null, [Validators.required, Validators.pattern(/^([0-9]{8})?$/)]],
			gender: [null, [Validators.required]],
			birthDate: [null, [Validators.required]]
		});
	}

	onClickBtnSubmit(): void {
		if(!this.frmInsertPerson.valid) {
			this.frmInsertPerson.markAllAsTouched();
			this.frmInsertPerson.markAsDirty();

			return;
		}

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
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}