import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'mis-datos', type: 'link', name: 'Mis Datos', icon: 'badge' },
  { state: 'mis-atenciones', type: 'link', name: 'Mis Atenciones', icon: 'vaccines' },
  { state: 'mis-imagenes', type: 'link', name: 'Mis Imagenes', icon: 'perm_media' },
  { state: 'mis-interconsultas', type: 'link', name: 'Mis Interconsultas', icon: 'task_alt' },
  { state: 'mis-solicitudes', type: 'link', name: 'Mis Solicitudes', icon: 'question_answer' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
