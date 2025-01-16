import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraekfastComponent } from './braekfast.component';

describe('BraekfastComponent', () => {
  let component: BraekfastComponent;
  let fixture: ComponentFixture<BraekfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BraekfastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BraekfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
