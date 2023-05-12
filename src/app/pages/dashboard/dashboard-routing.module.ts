import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseComponent } from '../expense/expense.component';
import { ProductComponent } from '../product/product.component';
import { DashboardComponent } from './dashboard.component';
import { EmployeeComponent } from '../employee/employee.component';
import { OrderComponent } from '../order/order.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'employee',
        component: EmployeeComponent,
        
      },
      {
        path: 'expense',
        component: ExpenseComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'order',
        component: OrderComponent 
      },
    ]
    
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
