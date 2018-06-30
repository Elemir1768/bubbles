import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from "ngx-bootstrap";
import { AlertModule } from "ngx-bootstrap";
import { ButtonsModule } from "ngx-bootstrap";
import { CarouselModule } from "ngx-bootstrap";
import { CollapseModule } from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from "ngx-bootstrap";
import { PopoverModule } from "ngx-bootstrap";
import { ProgressbarModule } from "ngx-bootstrap";
import { RatingModule } from "ngx-bootstrap";
import { SortableModule } from "ngx-bootstrap";
import { TabsModule } from "ngx-bootstrap";
import { TimepickerModule } from "ngx-bootstrap";
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TypeaheadModule } from "ngx-bootstrap";

@NgModule({
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        CarouselModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        PopoverModule.forRoot(),
        ProgressbarModule.forRoot(),
        RatingModule.forRoot(),
        SortableModule.forRoot(),
        TabsModule.forRoot(),
        TimepickerModule.forRoot(),
        TypeaheadModule.forRoot()
    ],
    exports: [
        BsDropdownModule,
        TooltipModule, 
        ModalModule,
        AccordionModule, 
        AlertModule,
        ButtonsModule,
        CarouselModule,
        CollapseModule,
        BsDatepickerModule,
        PaginationModule,
        PopoverModule,
        ProgressbarModule,
        RatingModule,
        SortableModule,
        TabsModule,
        TimepickerModule,
        TypeaheadModule
    ]
})
export class AppBootstrapModule {}