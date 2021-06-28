import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SednicaListComponent } from './sednica-list.component';

describe('SednicaListComponent', () => {
  let component: SednicaListComponent;
  let fixture: ComponentFixture<SednicaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SednicaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SednicaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
