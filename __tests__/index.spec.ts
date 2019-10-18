import { greet } from "../src/index";

describe("greet", (): void => {
  it("should say hello to Who", (): void => {
    const res: string = greet("Tom");
    expect(res).toBe("Hi, Tom");
  });
});
