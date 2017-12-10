import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleListsComponent } from './multiple-lists.component';

describe('MultipleListsComponent', () => {
  let component: MultipleListsComponent;
  let fixture: ComponentFixture<MultipleListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
