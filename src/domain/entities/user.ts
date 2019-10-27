export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public gender: number,
    public email: string,
    public country: number
  ) {}

  toJson(): object {
    return {
      id: this.id,
      fullname: `${this.firstname} ${this.lastname}`,
      email: this.email
    };
  }
}
