import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnoscuroComponent } from './btnoscuro.component';

describe('BtnoscuroComponent', () => {
  let component: BtnoscuroComponent;
  let fixture: ComponentFixture<BtnoscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnoscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnoscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
