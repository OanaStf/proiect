import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaComponent } from './prima.component';

describe('PrimaComponent', () => {
  let component: PrimaComponent;
  let fixture: ComponentFixture<PrimaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimaComponent]
    });
    fixture = TestBed.createComponent(PrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
