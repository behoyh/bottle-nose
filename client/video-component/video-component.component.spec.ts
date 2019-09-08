import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponentComponent } from './video-component.component';

describe('VideoComponentComponent', () => {
  let component: VideoComponentComponent;
  let fixture: ComponentFixture<VideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
