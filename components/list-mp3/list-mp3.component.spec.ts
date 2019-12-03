import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMp3Component } from './list-mp3.component';

describe('ListMp3Component', () => {
  let component: ListMp3Component;
  let fixture: ComponentFixture<ListMp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
