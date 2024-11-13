import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/features/auth.routes')
    },
    {
        path: 'formulario',
        loadChildren: () => import('./formulario/formulario.routes')
    },
    {
        path: 'formulario',
        loadChildren: () => import('./formulario/resistencia/resistencia.routes')
    },
    {
        path: 'formulario',
        loadChildren: () => import('./formulario/empleados/empleados.routes')
    }
];