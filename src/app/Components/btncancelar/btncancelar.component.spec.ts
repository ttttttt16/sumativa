import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtncancelarComponent } from './btncancelar.component';

describe('BtncancelarComponent', () => {
  let component: BtncancelarComponent;
  let fixture: ComponentFixture<BtncancelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtncancelarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtncancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
