import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PragraphComponent } from './pragraph.component';

describe('PragraphComponent', () => {
  let component: PragraphComponent;
  let fixture: ComponentFixture<PragraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PragraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PragraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
