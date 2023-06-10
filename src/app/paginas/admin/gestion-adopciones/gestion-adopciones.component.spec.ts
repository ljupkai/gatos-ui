import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdopcionesComponent } from './gestion-adopciones.component';

describe('GestionAdopcionesComponent', () => {
  let component: GestionAdopcionesComponent;
  let fixture: ComponentFixture<GestionAdopcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GestionAdopcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAdopcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
