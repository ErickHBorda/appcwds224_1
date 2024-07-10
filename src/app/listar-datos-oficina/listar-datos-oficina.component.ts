import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OficinaService } from '../api/oficina.service';

@Component({
  selector: 'app-listar-datos-oficina',
  standalone: true,
  imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
  ],
  templateUrl: './listar-datos-oficina.component.html',
  styleUrl: './listar-datos-oficina.component.scss'
})
export class ListarDatosOficinaComponent {
	frmEditPerson: UntypedFormGroup;
  	frmSearch: UntypedFormGroup;

  	listPerson: any[] = [];
  	indexToModify: number = -1;
  	noResults: boolean = false;

  	get searchFb(){return this.frmSearch.controls['descripcion']}
	get codigoOficinaFb(){return this.frmEditPerson.controls['codigoOficina']}
	get descripcionFb(){ return this.frmEditPerson.controls['descripcion']; }
	get paisFb(){ return this.frmEditPerson.controls['pais']; }
	get fechaCreacionFb(){ return this.frmEditPerson.controls['fechaCreacion']; }
	get estadoFb(){ return this.frmEditPerson.controls['estado']; }

	constructor(
		private formBuilder: FormBuilder,
		private personService: OficinaService,
		private modalService: BsModalService
	) { 
		this.frmEditPerson = this.formBuilder.group({
			codigoOficina: [null, []],
			descripcion: [null, []],
			pais: [null, []],
			fechaCreacion: [null, []],
			estado: [null, []],
		});
    this.frmSearch=this.formBuilder.group({
      descripcion: [null, []]
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

	delete(codigoOficina: String, index:number): void{
		this.personService.delete(codigoOficina).subscribe({
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

		this.codigoOficinaFb.setValue(this.listPerson[index].codigoOficina);
		this.descripcionFb.setValue(this.listPerson[index].descripcion);
		this.paisFb.setValue(this.listPerson[index].pais);
		this.fechaCreacionFb.setValue(this.listPerson[index].fechaCreacion.toString().substring(0, 10));
		this.estadoFb.setValue(this.listPerson[index].estado.toString());

		this.modalService.show(modalEditPerson);
	}


	closeModal(): void {
		this.modalService.hide();
	}

	onClickSaveChanges(): void {
		let formData: FormData = new FormData();

		formData.append('codigoOficina', this.codigoOficinaFb.value);
		formData.append('descripcion', this.descripcionFb.value);
		formData.append('pais', this.paisFb.value);
		formData.append('fechaCreacion', this.fechaCreacionFb.value);
		formData.append('estado', this.estadoFb.value);

		this.personService.update(formData).subscribe({
			next: (response: any) => {
				console.log(response);

				this.listPerson[this.indexToModify].descripcion = this.descripcionFb.value;
				this.listPerson[this.indexToModify].pais = this.paisFb.value;
				this.listPerson[this.indexToModify].fechaCreacion = this.fechaCreacionFb.value;
				this.listPerson[this.indexToModify].estado = this.estadoFb.value;

				this.modalService.hide();
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

  onClickSearch(): void {
    const descripcion = this.searchFb.value;
    this.personService.search(descripcion).subscribe({
      next: (response: any[]) => {
        // Actualiza la lista de personas con los resultados de la búsqueda
        this.listPerson = response;
        this.noResults = response.length === 0;
        console.log('Búsqueda exitosa:', response);
      },
      error: (error: any) => {
        console.error('Error al buscar personas:', error);
        // Maneja el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
      }
    });
  }
}
