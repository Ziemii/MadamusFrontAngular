import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooShowcaseComponent } from './tattoo-showcase.component';

describe('TattooShowcaseComponent', () => {
  let component: TattooShowcaseComponent;
  let fixture: ComponentFixture<TattooShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
