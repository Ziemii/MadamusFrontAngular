import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattooNewComponent } from './tattoo-new.component';

describe('TattooNewComponent', () => {
  let component: TattooNewComponent;
  let fixture: ComponentFixture<TattooNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattooNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattooNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
