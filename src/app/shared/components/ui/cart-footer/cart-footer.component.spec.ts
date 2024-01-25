import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFooterComponent } from './cart-footer.component';

describe('CartFooterComponent', () => {
  let component: CartFooterComponent;
  let fixture: ComponentFixture<CartFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartFooterComponent]
    });
    fixture = TestBed.createComponent(CartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
