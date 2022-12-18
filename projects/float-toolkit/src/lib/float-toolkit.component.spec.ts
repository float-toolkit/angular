import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatToolkitComponent } from './float-toolkit.component';

describe('FloatToolkitComponent', () => {
  let component: FloatToolkitComponent;
  let fixture: ComponentFixture<FloatToolkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatToolkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
