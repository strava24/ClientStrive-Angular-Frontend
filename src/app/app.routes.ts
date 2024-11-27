import { Routes } from '@angular/router';
import { MasterComponent } from './component/master/master.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { ClientComponent } from './component/client/client.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'master', // this means that the application should redirect to master page when the usrl is localhost:4200/ or the relevant port
        pathMatch: 'full' // This ensures that the URL should be full and not partial for this to work
    },
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
    }
];
