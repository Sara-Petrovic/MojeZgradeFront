import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StambenazajednicaComponent } from './stambenazajednica.component';

describe('StambenazajednicaComponent', () => {
  let component: StambenazajednicaComponent;
  let fixture: ComponentFixture<StambenazajednicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StambenazajednicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StambenazajednicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
