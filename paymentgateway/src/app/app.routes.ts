import { Routes } from '@angular/router';
import { CreateComponent } from './post/create/create.component';

export const routes: Routes = [
    {
        path:"" , redirectTo:"/post/create" , pathMatch:"full"
    },
    {
        path:"post/create", component:CreateComponent, title:"Create Order"
    }
];
