import { Routes } from '@angular/router';
import { PersonInsertComponent } from './insert-datos/insert-datos.component';
import { ListarDatosComponent } from './listar-datos/listar-datos.component';
import { InsertDatosOficinaComponent } from './insert-datos-oficina/insert-datos-oficina.component';
import { ListarDatosOficinaComponent } from './listar-datos-oficina/listar-datos-oficina.component';
import { PresentacionComponent } from './presentacion/presentacion.component';



export const routes: Routes = [
    { path: 'person/insert', component: PersonInsertComponent },
    { path: 'person/get-all', component: ListarDatosComponent },
    { path: 'oficina/insert', component: InsertDatosOficinaComponent},
    { path: 'oficina/get-all', component: ListarDatosOficinaComponent},
    { path: 'principal',component: PresentacionComponent}
];