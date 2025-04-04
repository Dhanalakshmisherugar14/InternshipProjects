import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNotesComponent } from './notes.component';

describe('StickyNotesComponent', () => {
  let component: StickyNotesComponent;
  let fixture: ComponentFixture<StickyNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StickyNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
