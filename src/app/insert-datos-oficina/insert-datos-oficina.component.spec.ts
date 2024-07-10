import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDatosOficinaComponent } from './insert-datos-oficina.component';

describe('InsertDatosOficinaComponent', () => {
  let component: InsertDatosOficinaComponent;
  let fixture: ComponentFixture<InsertDatosOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDatosOficinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertDatosOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
