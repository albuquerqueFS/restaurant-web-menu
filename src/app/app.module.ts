import {
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  NgModule,
  isDevMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './features/menu/menu.module';
import { LayoutComponent } from './core/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { cartFeature } from './core/state/cart/cart.reducer';
import {
  featherAirplay,
  featherArrowLeft,
  featherX,
} from '@ng-icons/feather-icons';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    StoreModule.forRoot({ cart: cartFeature.reducer }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgIconsModule.withIcons({ featherAirplay, featherArrowLeft, featherX }),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-br',
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    provideNgIconsConfig({
      size: '1.5em',
      color: 'black',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
