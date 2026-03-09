import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { authGuard, guestGuard } from './guards/auth-guard';

export const routes:Routes=
[
    {
        path:'',
        canActivate:[authGuard],
        loadComponent: ()=> import('./pages/layout/layout').then(m=>m.Layout),
        children:
        [    
            {    
                path:'home',   
                canActivate:[authGuard],
                loadComponent:()=> import('./pages/home/home').then((m)=>m.Home)
            },    
            {
                path:'',   
                pathMatch:'full',
                redirectTo:'login'
            },
            {
                path: 'alumnos',
                canActivate:[authGuard],
                loadComponent:()=> import('./pages/alumnos/alumnos').then((m)=>m.Alumnos)
            },
            {
                path: 'maestros',
                canActivate:[authGuard],
                loadComponent:()=> import('./pages/maestro/maestro').then((m)=>m.Maestro)
            },
            {
                path: 'calificaciones',
                canActivate:[authGuard],
                loadComponent:()=> import('./pages/calificaciones/calificaciones').then((m)=>m.Calificaciones)
            }
        ]
    },    
    {
        path:'login',   
        canActivate:[guestGuard],
        loadComponent:()=> import('./pages/login/login').then((m)=>m.Login)
    },        
    {
        path:'**', /*cualquier cosa que meta lo manda aca  */
        redirectTo:'pagina404'
    }
]

export const routesOld: Routes = 
[
    {
        path:'',   
        pathMatch:'full',
        redirectTo:'login'
    },
    {

        path:'login',   
        canActivate:[guestGuard],
        loadComponent:()=> import('./pages/login/login').then((m)=>m.Login)
    },    
    {

        path:'home',   
        canActivate:[authGuard],
        loadComponent:()=> import('./pages/home/home').then((m)=>m.Home)
    },          
    {
        path:'layout',   
        canActivate:[authGuard],
        loadComponent:()=> import('./pages/layout/layout').then((m)=>m.Layout)
    },
    
    {
        path:'**', /*cualquier cosa que meta lo manda aca  */
        redirectTo:'pagina404'
    }
];
