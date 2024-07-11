import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpShowErrorComponent } from './cp-show-error.component';

describe('CpShowErrorComponent', () => {
  let component: CpShowErrorComponent;
  let fixture: ComponentFixture<CpShowErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpShowErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CpShowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
