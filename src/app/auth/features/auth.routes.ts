import { Route }from "@angular/router";

export default [
    {
        path: 'auth',
        loadChildren:() => import('./auth.module').then(m => m.AuthModule)
    }
];