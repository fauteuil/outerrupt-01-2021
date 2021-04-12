import { rest } from "msw";
import { MOCK_ACTIVITIES } from "./data";

export const handlers = [
  // Handles a POST /login request
  rest.post("/login", null),
  // Handles a GET /activity request
  rest.get("/activity-list", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    // const isAuthenticated = sessionStorage.getItem('is-authenticated')
    // if (!isAuthenticated) {
    //   // If not authenticated, respond with a 403 error
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: 'Not authorized',
    //     }),
    //   )
    // }
    // If authenticated, return a list of mocked activity details
    return res(
      ctx.status(200),
      ctx.json({
        result: MOCK_ACTIVITIES
      })
    );
  })
];
