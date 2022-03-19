const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("test endpoints", () => {
    test("It should return a response", async () => {
    const response = await request.get("/users/1");      
      expect(response.body.user_id).toBe(1);
      expect(response.body.last_name).toBe("Charle");
      expect(response.statusCode).toBe(200);
    });
  });