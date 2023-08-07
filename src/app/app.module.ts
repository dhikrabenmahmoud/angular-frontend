import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ReferencesListComponent } from './references-list/references-list.component';
import { CreateReferencesComponent } from './create-references/create-references.component';
import { UpdateReferencesComponent } from './update-references/update-references.component';
import { ContactusListComponent } from './contactus-list/contactus-list.component';
import { CreateContactusComponent } from './create-contactus/create-contactus.component';
import { UpdateContactusComponent } from './update-contactus/update-contactus.component';
import { ContactinfoListComponent } from './contactinfo-list/contactinfo-list.component';
import { CreateContactinfoComponent } from './create-contactinfo/create-contactinfo.component';
import { UpdateContactinfoComponent } from './update-contactinfo/update-contactinfo.component';
import { AboutusListComponent } from './aboutus-list/aboutus-list.component';
import { CreateAboutusComponent } from './create-aboutus/create-aboutus.component';
import { UpdateAboutusComponent } from './update-aboutus/update-aboutus.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { CreateActivitiesComponent } from './create-activities/create-activities.component';
import { UpdateActivitiesComponent } from './update-activities/update-activities.component';
import { AcceuilListComponent } from './acceuil-list/acceuil-list.component';
import { CreateAcceuilComponent } from './create-acceuil/create-acceuil.component';
import { UpdateAcceuilComponent } from './update-acceuil/update-acceuil.component';
import { ExpertiseListComponent } from './expertise-list/expertise-list.component';
import { CreateExpertiseComponent } from './create-expertise/create-expertise.component';
import { UpdateExpertiseComponent } from './update-expertise/update-expertise.component';
import { DiagnosticListComponent } from './diagnostic-list/diagnostic-list.component';
import { CreateDiagnosticComponent } from './create-diagnostic/create-diagnostic.component';
import { UpdateDiagnosticComponent } from './update-diagnostic/update-diagnostic.component';
import { StatistiqueListComponent } from './statistique-list/statistique-list.component';
import { CreateStatistiqueComponent } from './create-statistique/create-statistique.component';
import { UpdateStatistiqueComponent } from './update-statistique/update-statistique.component';



@NgModule({
  declarations: [
    AppComponent,
    ProduitListComponent,
    CreateProductComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    UpdateProductComponent,
    ReferencesListComponent,
    CreateReferencesComponent,
    UpdateReferencesComponent,
    ContactusListComponent,
    CreateContactusComponent,
    UpdateContactusComponent,
    ContactinfoListComponent,
    CreateContactinfoComponent,
    UpdateContactinfoComponent,
    AboutusListComponent,
    CreateAboutusComponent,
    UpdateAboutusComponent,
    ActivitiesListComponent,
    CreateActivitiesComponent,
    UpdateActivitiesComponent,
    AcceuilListComponent,
    CreateAcceuilComponent,
    UpdateAcceuilComponent,
    ExpertiseListComponent,
    CreateExpertiseComponent,
    UpdateExpertiseComponent,
    DiagnosticListComponent,
    CreateDiagnosticComponent,
    UpdateDiagnosticComponent,
    StatistiqueListComponent,
    CreateStatistiqueComponent,
    UpdateStatistiqueComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
