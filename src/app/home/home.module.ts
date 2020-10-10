import { NgModule } from '@angular/core';

// Components
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [HomeRoutingModule],
    exports: [],
    declarations: HomeRoutingModule.components,
    providers: [],
})
export class HomeModule { }
