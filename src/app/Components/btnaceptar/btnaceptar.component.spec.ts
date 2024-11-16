import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnaceptarComponent } from './btnaceptar.component';

describe('BtnaceptarComponent', () => {
  let component: BtnaceptarComponent;
  let fixture: ComponentFixture<BtnaceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnaceptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnaceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
