//pureba prelimianr de servicio
import { Injectable } from '@angular/core';

import { Empleado } from '../interfaces/empleados.interfaces';

@Injectable()
export class EmpleadosServices {
    private empleados: Empleado[] =
        [
            {

                id:1,
                nombres:'felipe',
                cargos: 'desarrollador web',
                jefe: 'pancho '
            }
            {

                id:2,
                nombres:'daniel',
                cargos: 'analistas db',
                jefe: 'pancho '
            }


        ];
    constructor() {
        console.log('%cservicio productos listo para usar', 'background-color:purple;color:white');
    }

    getAllEmployses(): Empleado[] {
        return this.empleados;
    }

