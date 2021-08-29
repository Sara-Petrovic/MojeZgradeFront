import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunSendComponent } from './racun-send.component';

describe('RacunSendComponent', () => {
  let component: RacunSendComponent;
  let fixture: ComponentFixture<RacunSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacunSendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
