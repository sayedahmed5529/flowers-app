import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuirtyComponent } from './secuirty.component';

describe('SecuirtyComponent', () => {
  let component: SecuirtyComponent;
  let fixture: ComponentFixture<SecuirtyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuirtyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuirtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
