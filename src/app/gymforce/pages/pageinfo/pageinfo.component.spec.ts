import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinfoComponent } from './pageinfo.component';

describe('PageinfoComponent', () => {
  let component: PageinfoComponent;
  let fixture: ComponentFixture<PageinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageinfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
