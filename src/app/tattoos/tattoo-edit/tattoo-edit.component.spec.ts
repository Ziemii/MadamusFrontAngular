import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooEditComponent } from './tattoo-edit.component';

describe('TattooEditComponent', () => {
  let component: TattooEditComponent;
  let fixture: ComponentFixture<TattooEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
