import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleScrapperComponent } from './google-scrapper.component';

describe('GoogleScrapperComponent', () => {
  let component: GoogleScrapperComponent;
  let fixture: ComponentFixture<GoogleScrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleScrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleScrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
