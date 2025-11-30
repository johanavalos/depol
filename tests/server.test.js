import request from "supertest";
import app from "../src/server.js";

describe("GET /", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from Node.js server!");
  });
});
