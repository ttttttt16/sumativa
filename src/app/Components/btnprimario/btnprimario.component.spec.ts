import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnprimarioComponent } from './btnprimario.component';

describe('BtnprimarioComponent', () => {
  let component: BtnprimarioComponent;
  let fixture: ComponentFixture<BtnprimarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnprimarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnprimarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
