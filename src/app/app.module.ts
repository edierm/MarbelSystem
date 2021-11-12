import { ReactiveFormsModule } from '@angular/forms';
import { FixedPluginModule } from './dashboard/shared/fixedplugin/fixedplugin.module';

import { ClientModule } from './client/client.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardModule } from './dashboard/dashboard.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ClientModule,
    DashboardModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    FixedPluginModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
