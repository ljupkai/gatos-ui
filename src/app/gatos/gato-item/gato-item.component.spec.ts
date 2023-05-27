import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatoItemComponent } from './gato-item.component';

describe('GatoItemComponent', () => {
  let component: GatoItemComponent;
  let fixture: ComponentFixture<GatoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GatoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
