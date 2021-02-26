/*
export interface Empresa  {
    _id?: string;
    nombreEmpresa: string;
    giro: string;
    redsocial: string;
    telefono: string;
    imagePath: string;
    estatus: string;
}*/

export interface Empresa  {
    _id?: string;
    nombreEmpresa: string;
    giro: string;
    paginaWeb: string;
    facebook: string;
    twitter: string;
    telefono: string;
    imagePath: string;
    estatus: string;
    descripcion: string;
    idComerciante: string;
    observaciones: string
}

export interface EmpresaCreate{
    nombreEmpresa: string;
    giro: string;
    paginaWeb: string;
    facebook: string;
    twitter: string;
    telefono: string;
    estatus: string;
    descripcion: string;
    idComerciante: string;
    
}

export const  EmpresaObj = {
    _id: '',
    nombreEmpresa: '',
    giro: '',
    paginaWeb: '',
    facebook: '',
    twitter: '' ,
    telefono: '',
    estatus: '',
    descripcion: '',
    idComerciante: '',
}