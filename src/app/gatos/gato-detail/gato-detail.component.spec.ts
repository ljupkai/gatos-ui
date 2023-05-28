import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoDetailComponent } from './gato-detail.component';

describe('GatoDetailComponent', () => {
  let component: GatoDetailComponent;
  let fixture: ComponentFixture<GatoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GatoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
