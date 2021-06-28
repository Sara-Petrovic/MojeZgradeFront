import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SednicaCreateComponent } from './sednica-create.component';

describe('SednicaCreateComponent', () => {
  let component: SednicaCreateComponent;
  let fixture: ComponentFixture<SednicaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SednicaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SednicaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
