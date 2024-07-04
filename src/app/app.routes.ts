import { Routes } from '@angular/router';
import { PersonInsertComponent } from './insert-datos/insert-datos.component';
import { ListarDatosComponent } from './listar-datos/listar-datos.component';


export const routes: Routes = [
    { path: 'person/insert', component: PersonInsertComponent },
    { path: 'person/get-all', component: ListarDatosComponent }
];