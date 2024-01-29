import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  NgModule,
  isDevMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import {
  featherAirplay,
  featherArrowLeft,
  featherX,
} from '@ng-icons/feather-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { cartFeature } from './core/state/cart/cart.reducer';
import { MenuModule } from './features/menu/menu.module';
import { MessageService } from 'primeng/api';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    ToastModule,
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
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
