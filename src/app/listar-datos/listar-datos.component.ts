import { Component, TemplateRef } from '@angular/core';
import { PersonService } from '../api/person.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listar-datos',
  standalone: true,
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
  ],
  templateUrl: './listar-datos.component.html',
  styleUrl: './listar-datos.component.scss'
})
export class ListarDatosComponent {
	frmEditPerson: UntypedFormGroup;

  	listPerson: any[] = [];
	indexToModify: number = -1;

	get idPersonFb(){return this.frmEditPerson.controls['idPerson']}
	get firstNameFb(){ return this.frmEditPerson.controls['firstName']; }
	get surNameFb(){ return this.frmEditPerson.controls['surName']; }
	get dniFb(){ return this.frmEditPerson.controls['dni']; }
	get genderFb(){ return this.frmEditPerson.controls['gender']; }
	get birthDateFb(){ return this.frmEditPerson.controls['birthDate']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: PersonService,
		private modalService: BsModalService
	) { 
		this.frmEditPerson = this.formBuilder.group({
			idPerson: [null, []],
			firstName: [null, []],
			surName: [null, []],
			dni: [null, []],
			gender: [null, []],
			birthDate: [null, []]
		});
	}

	ngOnInit() {
		this.personService.getAll().subscribe({
			next: (response: any[]) => {
				this.listPerson = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	delete(idPerson: String, index:number): void{
		this.personService.delete(idPerson).subscribe({
			next: (response: any)=>{
				this.listPerson.splice(index,1);
			},
			error: (error: any)=>{
				console.log(error);
			}
		});
	}

	showModal(modalEditPerson: TemplateRef<any>, index: any): void {
		this.indexToModify = index;

		this.idPersonFb.setValue(this.listPerson[index].idPerson);
		this.firstNameFb.setValue(this.listPerson[index].firstName);
		this.surNameFb.setValue(this.listPerson[index].surName);
		this.dniFb.setValue(this.listPerson[index].dni);
		this.genderFb.setValue(this.listPerson[index].gender.toString());
		this.birthDateFb.setValue(this.listPerson[index].birthDate.toString().substring(0, 10));

		this.modalService.show(modalEditPerson);
	}


	closeModal(): void {
		this.modalService.hide();
	}

	onClickSaveChanges(): void {
		let formData: FormData = new FormData();

		formData.append('idPerson', this.idPersonFb.value);
		formData.append('firstName', this.firstNameFb.value);
		formData.append('surName', this.surNameFb.value);
		formData.append('dni', this.dniFb.value);
		formData.append('gender', this.genderFb.value);
		formData.append('birthDate', this.birthDateFb.value);

		this.personService.update(formData).subscribe({
			next: (response: any) => {
				console.log(response);

				this.listPerson[this.indexToModify].firstName = this.firstNameFb.value;
				this.listPerson[this.indexToModify].surName = this.surNameFb.value;
				this.listPerson[this.indexToModify].dni = this.dniFb.value;
				this.listPerson[this.indexToModify].gender = this.genderFb.value;
				this.listPerson[this.indexToModify].birthDate = this.birthDateFb.value;

				this.modalService.hide();
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
