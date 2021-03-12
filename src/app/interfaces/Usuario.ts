export interface Usuario {
     _id:string;
     nombre:string;
     email:string;
     direccion:string;
     telefono:string;
     password:string;
     tipo:string;
     permisos: {
          sitios:  string,
          eventos:  string,
          empresasValidadas:  string,
          solicitudesEmpresas:  string,
          administradores:  string,
          afiliados:  string,
          carrusel:  string
      }
 }

export const UsuarioObj = {
     _id: '',
     nombre: '',
     email: '',
     direccion: '',
     telefono: '',
     password: '',
     tipo: '',
     permisos: {
          sitios:  'sin acceso',
          eventos:  'sin acceso',
          empresasValidadas:  'sin acceso',
          solicitudesEmpresas:  'sin acceso',
          administradores:  'sin acceso',
          afiliados:  'sin acceso',
          carrusel:  'sin acceso'
      }
}