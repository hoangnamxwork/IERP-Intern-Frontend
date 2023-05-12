import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ExpenseComponent } from '../expense/expense.component';
import { ProductComponent } from '../product/product.component';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { EmployeeComponent } from '../employee/employee.component';
import { OrderComponent } from '../order/order.component';

@NgModule({
  declarations: [
    ExpenseComponent,
    ProductComponent,
    EmployeeComponent,
    OrderComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, LayoutModule],
})
export class DashboardModule {}
