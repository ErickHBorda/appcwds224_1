import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { OficinaService } from '../api/oficina.service';

@Component({
	selector: 'app-insert-datos-oficina',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule
	],
	templateUrl: './insert-datos-oficina.component.html',
	styleUrl: './insert-datos-oficina.component.scss'
})

export class InsertDatosOficinaComponent {
	frmInsertPerson: UntypedFormGroup;

	get descripcionFb(){ return this.frmInsertPerson.controls['descripcion']; }
	get paisFb(){ return this.frmInsertPerson.controls['pais']; }
	get fechaCreacionFb(){ return this.frmInsertPerson.controls['fechaCreacion']; }
	get estadoFb(){ return this.frmInsertPerson.controls['estado']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: OficinaService
	) {
		this.frmInsertPerson = this.formBuilder.group({
			descripcion: [null, []],
			pais: [null, []],
			fechaCreacion: [null, []],
			estado: [null, []],
		});
	}

	onClickBtnSubmit(): void {
		let formData: FormData = new FormData();

		formData.append('descripcion', this.descripcionFb.value);
		formData.append('pais', this.paisFb.value);
		formData.append('fechaCreacion', this.fechaCreacionFb.value);
		formData.append('estado', this.estadoFb.value);

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