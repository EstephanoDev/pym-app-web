export interface Formulario {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  Fecha: Date;
  Trabajador: string;
  Grupo?: string[];
  TipoTrabajo: string;
  Ubicacion: string;
  Observacion?: string;
  TrabajoRealizado: number;
  NombreUsuario?: string;  // Agrega la propiedad NombreUsuario
}
