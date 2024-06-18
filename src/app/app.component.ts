import { Component, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneralService } from './api/general.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
	BsModalService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appAngDSWII';

  constructor(
		private generalService: GeneralService,
		private modalService: BsModalService
	) {

	}

	ngOnInit(): void {
		this.generalService.indexGet().subscribe({
			next: (response: any) => {
				console.log(response);
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}

	showModal(myModal: TemplateRef<any>): void {
		this.modalService.show(myModal);
	}
	
	closeModal(): void {
		this, this.modalService.hide();
	}
}

