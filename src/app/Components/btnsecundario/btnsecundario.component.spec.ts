import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnsecundarioComponent } from './btnsecundario.component';

describe('BtnsecundarioComponent', () => {
  let component: BtnsecundarioComponent;
  let fixture: ComponentFixture<BtnsecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnsecundarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnsecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
