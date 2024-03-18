import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevousuPage } from './nuevousu.page';

describe('NuevousuPage', () => {
  let component: NuevousuPage;
  let fixture: ComponentFixture<NuevousuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevousuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
