export class Rol {
  name: string;
  permissions: any;
  
  constructor(rol:any) {
      this.name = rol.name;
  }
}