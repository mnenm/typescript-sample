import { User } from "../../../src/domain/entities/user";

describe("User", () => {
  it("should retrun formatted json", (): void => {
    const user = new User(1, "test", "user", 1, "email@test.test", 10);
    const expected = {
      id: 1,
      fullname: "test user",
      email: "email@test.test"
    };
    expect(user.toJson()).toStrictEqual(expected);
  });
});
