import { Component, TemplateRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
	constructor(
		private generalService: GeneralService,
		private router: Router
	) { }

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

	changeView(route: string): void {
		this.router.navigateByUrl(route);
	}
}