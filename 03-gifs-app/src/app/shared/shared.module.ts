import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./components/sidebar/sidebar.componen";


@NgModule({
    declarations: [
        SidebarComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SidebarComponent,
    ]
})
export class SharedModule {}