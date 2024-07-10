import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDatosOficinaComponent } from './listar-datos-oficina.component';

describe('ListarDatosOficinaComponent', () => {
  let component: ListarDatosOficinaComponent;
  let fixture: ComponentFixture<ListarDatosOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDatosOficinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDatosOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
