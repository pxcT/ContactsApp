import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';

// Layout components
import { SidebarMenuComponent } from '@app-layout/sidebar-menu/sidebar-menu.component';
import { ContainerComponent } from '@app-layout/container/container.component';
import { TopbarComponent } from '@app-layout/topbar/topbar.component';

// User-defined modules
import { AppRoutingModule } from './app-routing.module';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidebarMenuComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
