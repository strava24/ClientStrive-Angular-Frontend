import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientComponent } from './component/client/client.component';
import { ClientProjectComponent } from './component/client-project/client-project.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login', // this means that the application should redirect to login page when the url is localhost:4200/ or the relevant port
        pathMatch: 'full' // This ensures that the URL should be full and not partial for this to work
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'master',
                component: MasterComponent
            },
            {
                path: 'emplyee',
                component: EmployeeComponent
            },
            {
                path: 'client',
                component: ClientComponent
            },
            {
                path: 'client-project',
                component: ClientProjectComponent
            }
        ]
    }
]

