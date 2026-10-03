export class UserModel {
  public id: string | null = null;
  public name: string | null = null;
  public email: string | null = null;
  public status: string | null = null;
  public role: string | null = null;

  constructor( id: string | null = null, name: string | null, email: string | null, status: string | null, role: string | null ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.status = status;
    this.role = role;
  }
}