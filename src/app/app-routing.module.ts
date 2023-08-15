import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {ActualitesListComponent} from "./actualites-list/actualites-list.component";
import {CreateActualitesComponent} from "./create-actualites/create-actualites.component";
import {UpdateActualitesComponent} from "./update-actualites/update-actualites.component";
import {DetailsReferenceComponent} from "./details-reference/details-reference.component";
import {DetailAboutusComponent} from "./detail-aboutus/detail-aboutus.component";
import {DetailAcceuilComponent} from "./detail-acceuil/detail-acceuil.component";
import {DetailActiviteComponent} from "./detail-activite/detail-activite.component";
import {DetailActualiteComponent} from "./detail-actualite/detail-actualite.component";
import {DetailContactinfoComponent} from "./detail-contactinfo/detail-contactinfo.component";
import {DetailContactusComponent} from "./detail-contactus/detail-contactus.component";
import {DetailDiagnosticComponent} from "./detail-diagnostic/detail-diagnostic.component";
import {DetailExpertiseComponent} from "./detail-expertise/detail-expertise.component";
import {DetailStatistiqueComponent} from "./detail-statistique/detail-statistique.component";
import {DetailProductComponent} from "./detail-product/detail-product.component";


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: 'home', component: HomeComponent},
  {path: 'produitList', component: ProduitListComponent},
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
  {path: 'actualitesList', component:  ActualitesListComponent},
  {path: 'addActualites', component:   CreateActualitesComponent},
  {path: 'updateActualites/:id', component:   UpdateActualitesComponent},
  {path: 'detailsReference/:id', component:   DetailsReferenceComponent},
  {path: 'detailsAboutUs/:id', component:   DetailAboutusComponent},
  {path: 'detailsAcceuil/:id', component:   DetailAcceuilComponent},
  {path: 'detailsActivite/:id', component:   DetailActiviteComponent},
  {path: 'detailsActualite/:id', component:   DetailActualiteComponent},
  {path: 'detailsContactus/:id', component:   DetailContactusComponent},
  {path: 'detailsDiagnostic/:id', component:   DetailDiagnosticComponent},
  {path: 'detailsExpertise/:id', component:   DetailExpertiseComponent},
  {path: 'detailsStatistique/:id', component:   DetailStatistiqueComponent},
  {path: 'detailsProduct/:id', component:   DetailProductComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
