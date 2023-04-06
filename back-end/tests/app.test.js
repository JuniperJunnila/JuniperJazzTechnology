const request = require("supertest");
const app = require("../src/app");
const knex = require("../src/db/connection");
require("dotenv").config();

describe("path /", () => {
  //runs testing migrations
  beforeAll(() => {
    return knex.migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest());
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("GET method", () => {
    it("returns an array of ", async () => {
      const response = await request(app).get("/");

      expect(response.status).toBe(200);

      expect(response.body.data.length > 0).toBeTruthy();
    });
  });

  describe("POST method", () => {
    test("returns 201 if data is valid", async () => {
      const data = { replace: "REPLACE WITH FORMATTED DATA" };

      const response = await request(app)
        .post("/")
        .set("Accept", "application/json")
        .send({ data });

      expect(response.body.error).toBeUndefined();
      expect(response.status).toBe(201);
      expect(response.body.data).toEqual(
        expect.objectContaining({
          replace: "REPLACE WITH FORMATTED DATA",
        })
      );
    });
  });
});
