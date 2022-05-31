import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFullComponent } from './api-full.component';

describe('ApiFullComponent', () => {
  let component: ApiFullComponent;
  let fixture: ComponentFixture<ApiFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
