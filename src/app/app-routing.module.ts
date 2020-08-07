import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';


import { HomeComponent } from './componets/home/home.component';
import { NotFoundComponent } from './componets/shared/not-found/not-found.component';
import { EmpleadoComponent } from './componets/empleado/empleado.component';
import { EmpleadosComponent } from './componets/empleados/empleados.component';
import { NuevoEmpleadoComponent } from './componets/nuevo-empleado/nuevo-empleado.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'empleado/:id', component: EmpleadoComponent},
    {path: 'Nuevo-empleado', component: NuevoEmpleadoComponent},
    {path: '**',pathMatch:'full', redirectTo:'not-found'}//siempre va de ultimas para que si no encuentra la ruta se valla a ese*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }