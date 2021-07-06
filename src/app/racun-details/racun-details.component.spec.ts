import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunDetailsComponent } from './racun-details.component';

describe('RacunDetailsComponent', () => {
  let component: RacunDetailsComponent;
  let fixture: ComponentFixture<RacunDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacunDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
