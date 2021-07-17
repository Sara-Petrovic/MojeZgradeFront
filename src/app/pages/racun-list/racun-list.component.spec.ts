import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunListComponent } from './racun-list.component';

describe('RacunListComponent', () => {
  let component: RacunListComponent;
  let fixture: ComponentFixture<RacunListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacunListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
