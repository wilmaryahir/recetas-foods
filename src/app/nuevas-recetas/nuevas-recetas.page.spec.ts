import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevasRecetasPage } from './nuevas-recetas.page';

describe('NuevasRecetasPage', () => {
  let component: NuevasRecetasPage;
  let fixture: ComponentFixture<NuevasRecetasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevasRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
