import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cp-show-error',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="field?.touched || field?.dirty">
      <div *ngIf="field?.errors?.['required']" class="error-message">
        Este campo es requerido
      </div>
      <div *ngIf="field?.errors?.['pattern']" class="error-message">
        Formato incorrecto
      </div>
    </div>
  `,
  styles: [`
    .error-message {
      color: red;
      font-size: 12px;
      font-weight: bold;
    }
  `]
})
export class CpShowErrorComponent {
  @Input() field!: AbstractControl | null;
}