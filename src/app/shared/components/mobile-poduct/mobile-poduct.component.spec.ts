import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePoductComponent } from './mobile-poduct.component';

describe('MobilePoductComponent', () => {
  let component: MobilePoductComponent;
  let fixture: ComponentFixture<MobilePoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilePoductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
