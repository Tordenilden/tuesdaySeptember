import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteperComponent } from './sorteper.component';

describe('SorteperComponent', () => {
  let component: SorteperComponent;
  let fixture: ComponentFixture<SorteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorteperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
