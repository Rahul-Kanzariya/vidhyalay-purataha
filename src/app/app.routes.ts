import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
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