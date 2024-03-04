import { Component, OnInit, signal } from '@angular/core';
import { CartFacade } from 'src/app/core/state/cart/cart.facade';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  step = 'orders';

  constructor(private cartFacade: CartFacade) {}

  ngOnInit(): void {}

  finishOrder() {
    const phoneNumber = '11955306357'; // WhatsApp number in international format without '+'
    const message = encodeURIComponent(
      'Hello, I would like to chat with you on WhatsApp!',
    ); // URL-encoded message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  }

  changeStep() {
    if (this.step === 'address') {
      this.step = 'orders';
      return;
    }
    if (this.step === 'orders') {
      this.step = 'address';
      return;
    }
  }
}
