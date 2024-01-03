import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NazwaComponent } from './nazwa.component';

describe('NazwaComponent', () => {
  let component: NazwaComponent;
  let fixture: ComponentFixture<NazwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NazwaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NazwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
