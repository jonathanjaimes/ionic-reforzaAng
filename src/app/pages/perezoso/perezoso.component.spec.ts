import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerezosoComponent } from './perezoso.component';

describe('PerezosoComponent', () => {
  let component: PerezosoComponent;
  let fixture: ComponentFixture<PerezosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerezosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerezosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
