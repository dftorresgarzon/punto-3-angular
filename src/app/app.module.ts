import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Modulos enrutamiento
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './componets/shared/navbar/navbar.component';
import { EmpleadosComponent } from './componets/empleados/empleados.component';
import { EmpleadoComponent } from './componets/empleado/empleado.component';
import { NuevoEmpleadoComponent } from './componets/nuevo-empleado/nuevo-empleado.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { HomeComponent } from './componets/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    NuevoEmpleadoComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
