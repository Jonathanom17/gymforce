import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanesComponent } from './page-planes.component';

describe('PagePlanesComponent', () => {
  let component: PagePlanesComponent;
  let fixture: ComponentFixture<PagePlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePlanesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
