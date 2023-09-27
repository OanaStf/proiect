import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoileaComponent } from './doilea.component';

describe('DoileaComponent', () => {
  let component: DoileaComponent;
  let fixture: ComponentFixture<DoileaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoileaComponent]
    });
    fixture = TestBed.createComponent(DoileaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
