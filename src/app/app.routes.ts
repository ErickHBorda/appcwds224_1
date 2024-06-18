import { Routes } from '@angular/router';
import { InsertDatosComponent } from './insert-datos/insert-datos.component';
import { ListarDatosComponent } from './listar-datos/listar-datos.component';

export const routes: Routes = [
    {path: 'insertData', component:InsertDatosComponent},
    {path: 'listData', component:ListarDatosComponent}
];
