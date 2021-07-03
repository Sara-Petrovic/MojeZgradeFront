import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StambenazajednicaDetailsComponent } from './stambenazajednica-details.component';

describe('StambenazajednicaDetailsComponent', () => {
  let component: StambenazajednicaDetailsComponent;
  let fixture: ComponentFixture<StambenazajednicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StambenazajednicaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StambenazajednicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
