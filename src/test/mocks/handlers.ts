import { rest } from "msw";

// Define your API mocks here
export const handlers = [
  // Example GET request handler
  rest.get("*/api/users", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
        },
        {
          id: "2",
          name: "Jane Smith",
          email: "jane@example.com",
        },
      ])
    );
  }),

  // Example POST request handler
  rest.post("*/api/users", async (req, res, ctx) => {
    const { name, email } = await req.json();

    return res(
      ctx.status(201),
      ctx.json({
        id: "3",
        name,
        email,
        createdAt: new Date().toISOString(),
      })
    );
  }),

  // Example PUT request handler
  rest.put("*/api/users/:id", async (req, res, ctx) => {
    const { id } = req.params;
    const updates = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        id,
        ...updates,
        updatedAt: new Date().toISOString(),
      })
    );
  }),

  // Example DELETE request handler
  rest.delete("*/api/users/:id", (req, res, ctx) => {
    const { id } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id,
        deleted: true,
      })
    );
  }),

  // Add more handlers as needed
];
