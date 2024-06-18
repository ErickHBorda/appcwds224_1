import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDatosComponent } from './insert-datos.component';

describe('InsertDatosComponent', () => {
  let component: InsertDatosComponent;
  let fixture: ComponentFixture<InsertDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
