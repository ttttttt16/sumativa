import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumativavisualComponent } from './sumativavisual.component';

describe('SumativavisualComponent', () => {
  let component: SumativavisualComponent;
  let fixture: ComponentFixture<SumativavisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumativavisualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumativavisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
