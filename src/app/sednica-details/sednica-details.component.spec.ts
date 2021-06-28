import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SednicaDetailsComponent } from './sednica-details.component';

describe('SednicaDetailsComponent', () => {
  let component: SednicaDetailsComponent;
  let fixture: ComponentFixture<SednicaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SednicaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SednicaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
