import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDatosComponent } from './listar-datos.component';

describe('ListarDatosComponent', () => {
  let component: ListarDatosComponent;
  let fixture: ComponentFixture<ListarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
