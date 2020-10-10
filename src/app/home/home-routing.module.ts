import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { MainDashboardComponent } from '@app-home/main-dashboard/main-dashboard.component';

const HOME_ROUTES_CONFIGURATION = [{
    path: '',
    component: MainDashboardComponent
}]

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES_CONFIGURATION)],
    exports: [RouterModule]
})
export class HomeRoutingModule { 
    static components = [MainDashboardComponent]
}
