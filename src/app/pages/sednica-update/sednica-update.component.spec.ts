import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SednicaUpdateComponent } from './sednica-update.component';

describe('SednicaUpdateComponent', () => {
  let component: SednicaUpdateComponent;
  let fixture: ComponentFixture<SednicaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SednicaUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SednicaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
