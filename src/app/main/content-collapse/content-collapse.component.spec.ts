import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCollapseComponent } from './content-collapse.component';

describe('ContentCollapseComponent', () => {
  let component: ContentCollapseComponent;
  let fixture: ComponentFixture<ContentCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
