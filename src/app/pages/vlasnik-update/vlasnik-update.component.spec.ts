import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikUpdateComponent } from './vlasnik-update.component';

describe('VlasnikUpdateComponent', () => {
  let component: VlasnikUpdateComponent;
  let fixture: ComponentFixture<VlasnikUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlasnikUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
