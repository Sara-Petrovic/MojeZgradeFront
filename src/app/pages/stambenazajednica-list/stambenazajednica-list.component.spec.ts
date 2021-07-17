import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StambenazajednicaListComponent } from './stambenazajednica-list.component';

describe('StambenazajednicaListComponent', () => {
  let component: StambenazajednicaListComponent;
  let fixture: ComponentFixture<StambenazajednicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StambenazajednicaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StambenazajednicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
