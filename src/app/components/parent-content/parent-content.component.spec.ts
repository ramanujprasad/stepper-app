import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentContentComponent } from './parent-content.component';

describe('ParentContentComponent', () => {
  let component: ParentContentComponent;
  let fixture: ComponentFixture<ParentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
