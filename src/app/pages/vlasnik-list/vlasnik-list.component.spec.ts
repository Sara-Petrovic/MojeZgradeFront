import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikListComponent } from './vlasnik-list.component';

describe('VlasnikListComponent', () => {
  let component: VlasnikListComponent;
  let fixture: ComponentFixture<VlasnikListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlasnikListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
