import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {ProduitListComponent} from './produit-list/produit-list.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {ReferencesListComponent} from './references-list/references-list.component';
import {CreateReferencesComponent} from './create-references/create-references.component';
import {UpdateReferencesComponent} from './update-references/update-references.component';
import {ContactusListComponent} from './contactus-list/contactus-list.component';
import {CreateContactusComponent} from './create-contactus/create-contactus.component';
import {UpdateContactusComponent} from './update-contactus/update-contactus.component';
import {ContactinfoListComponent} from './contactinfo-list/contactinfo-list.component';
import {CreateContactinfoComponent} from './create-contactinfo/create-contactinfo.component';
import {UpdateContactinfoComponent} from './update-contactinfo/update-contactinfo.component';
import {AboutusListComponent} from './aboutus-list/aboutus-list.component';
import {CreateAboutusComponent} from './create-aboutus/create-aboutus.component';
import {UpdateAboutusComponent} from './update-aboutus/update-aboutus.component';
import {ActivitiesListComponent} from './activities-list/activities-list.component';
import {CreateActivitiesComponent} from './create-activities/create-activities.component';
import {UpdateActivitiesComponent} from './update-activities/update-activities.component';
import {AcceuilListComponent} from './acceuil-list/acceuil-list.component';
import {CreateAcceuilComponent} from './create-acceuil/create-acceuil.component';
import {UpdateAcceuilComponent} from './update-acceuil/update-acceuil.component';
import {ExpertiseListComponent} from "./expertise-list/expertise-list.component";
import {CreateExpertiseComponent} from "./create-expertise/create-expertise.component";
import {UpdateExpertiseComponent} from "./update-expertise/update-expertise.component";
import {DiagnosticListComponent} from "./diagnostic-list/diagnostic-list.component";
import {CreateDiagnosticComponent} from "./create-diagnostic/create-diagnostic.component";
import {UpdateDiagnosticComponent} from "./update-diagnostic/update-diagnostic.component";
import {StatistiqueListComponent} from "./statistique-list/statistique-list.component";
import {CreateStatistiqueComponent} from "./create-statistique/create-statistique.component";
import {UpdateStatistiqueComponent} from "./update-statistique/update-statistique.component";


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: 'home', component: HomeComponent},
  {path: 'produitList', component: ProduitListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'addProduct', component: CreateProductComponent},
  {path: 'updateProduct/:id', component:  UpdateProductComponent},
  {path: 'referencesList', component:  ReferencesListComponent},
  {path: 'addreferences', component:   CreateReferencesComponent},
  {path: 'updatereferences/:id', component:   UpdateReferencesComponent},
  {path: 'contactusList', component:   ContactusListComponent},
  {path: 'addcontactus', component:   CreateContactusComponent},
  {path: 'updateContactus/:id', component:   UpdateContactusComponent},
  {path: 'contactinfoList', component:   ContactinfoListComponent},
  {path: 'addcontactinfo', component:   CreateContactinfoComponent},
  {path: 'updateContactinfo/:id', component:   UpdateContactinfoComponent},
  {path: 'aboutusList', component:   AboutusListComponent},
  {path: 'addaboutus', component:   CreateAboutusComponent},
  {path: 'updateAboutUs/:id', component: UpdateAboutusComponent},
  {path: 'activityList', component:   ActivitiesListComponent},
  {path: 'addActivity', component:   CreateActivitiesComponent},
  {path: 'updateActivities/:id', component: UpdateActivitiesComponent},
  {path: 'acceuilList', component:  AcceuilListComponent},
  {path: 'addAcceuil', component:   CreateAcceuilComponent},
  {path: 'updateAcceuil/:id', component:  UpdateAcceuilComponent},
  {path: 'expertiseList', component:  ExpertiseListComponent},
  {path: 'addExpertise', component:  CreateExpertiseComponent},
  {path: 'updateExpertise/:id', component:  UpdateExpertiseComponent},
  {path: 'diagnosticList', component:  DiagnosticListComponent},
  {path: 'addDiagnostic', component:  CreateDiagnosticComponent},
  {path: 'updateDiagnostic/:id', component:  UpdateDiagnosticComponent},
  {path: 'statistiqueList', component:  StatistiqueListComponent},
  {path: 'addStatistique', component:  CreateStatistiqueComponent},
  {path: 'updateStatistique/:id', component:  UpdateStatistiqueComponent},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
