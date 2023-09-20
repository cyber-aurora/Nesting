import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyFormComponent } from './views/property-form/property-form.component';
import { PrevisualizationComponent } from './views/previsualization/previsualization.component';
import { FilterboxComponent } from './components/filterbox/filterbox.component';
import { BuycardsComponent } from './components/buycards/buycards.component';
import { HomecardsComponent } from './components/homecards/homecards.component';
import { RentcardsComponent } from './components/rentcards/rentcards.component';
import { BuyComponent } from './views/buy/buy.component';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { RentComponent } from './views/rent/rent.component';
import { ModalcontactComponent } from './components/modalcontact/modalcontact.component';
import { ContactBtnComponent } from './components/contactbtn/contactbtn.component';
import { ImghomeComponent } from './components/imghome/imghome.component';
import { HorizontalcardsComponent } from './components/horizontalcards/horizontalcards.component';
import { FormsModule } from '@angular/forms';
import { PreviewbtnComponent } from './components/previewbtn/previewbtn.component';
import { SaleRentformComponent } from './views/sale-rentform/sale-rentform.component';
import { SaleRentComponent } from './components/sale-rent/sale-rent.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ReservebtnComponent } from './components/reservebtn/reservebtn.component';
import { ReservemodalComponent } from './components/reservemodal/reservemodal.component';


@NgModule({
  declarations: [
    PropertyFormComponent,
    PrevisualizationComponent,
    BuyComponent,
    DetailsComponent,
    HomeComponent,
    RentComponent,
    FilterboxComponent,
    BuycardsComponent,
    HomecardsComponent,
    RentcardsComponent,
    ModalcontactComponent,
    ContactBtnComponent,
    ImghomeComponent,
    HorizontalcardsComponent,
    PreviewbtnComponent,
    SaleRentformComponent,
    SaleRentComponent,
    FileUploadComponent,
    ReservebtnComponent,
    ReservemodalComponent
  ],
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    FormsModule,
    NgbModule,
    NgbModalModule
  ]
})
export class PropertiesModule { }
