import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatosListaComponent } from './gatos-lista.component';

describe('GatosListaComponent', () => {
  let component: GatosListaComponent;
  let fixture: ComponentFixture<GatosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GatosListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
