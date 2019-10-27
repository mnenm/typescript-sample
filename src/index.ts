import { User } from "./domain/entities/user";

export const greet = (name: string): string => `Hi, ${name}`;
console.log(greet("test"));

const user = new User(1, "test", "user", 1, "test@test.test", 42);
console.log(user.toJson());
