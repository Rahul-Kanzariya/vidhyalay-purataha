import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProjectsComponent } from './projects/projects.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from '../core/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        // canActivateChild: [authGuard],
        children: [
            {
                path: 'dashboard', 
                component: DashboardComponent
            },
            {
                path: 'students', 
                loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
            },
            {
                path: 'payments', 
                component: PaymentsComponent
            },
            {
                path: 'projects', 
                component: ProjectsComponent
            },
        ]
    },
    { 
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/dashboard',
    }
];