import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorImagenesComponent } from './selector-imagenes.component';

describe('SelectorImagenesComponent', () => {
  let component: SelectorImagenesComponent;
  let fixture: ComponentFixture<SelectorImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
