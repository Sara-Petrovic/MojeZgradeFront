import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikDetailsComponent } from './vlasnik-details.component';

describe('VlasnikDetailsComponent', () => {
  let component: VlasnikDetailsComponent;
  let fixture: ComponentFixture<VlasnikDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlasnikDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
