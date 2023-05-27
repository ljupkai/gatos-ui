import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoFormComponent } from './gato-form.component';

describe('GatoFormComponent', () => {
  let component: GatoFormComponent;
  let fixture: ComponentFixture<GatoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GatoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
