import { rest } from 'msw';

export const handlers = [
  rest.get('/login', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?',
    async (req, res, ctx) => {
      // const id = req.url.searchParams.get('id'); // data url에 있는 쿼리 값을 가져옴

      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();

      return res(
        // ctx.status(403),
        // // And a response body, if necessary
        // ctx.json({
        //   errorMessage: `Data not found`,
        // })

        ctx.json({
          data: {
            people: [
              ...originalResponseData.data.people,
              {
                name: 'wang',
                // name: id,
                age: 135,
              },
              // {
              //   name: 'timmy',
              //   age: 13,
              // },
              // {
              //   name: 'cindy',
              //   age: 15,
              // },
              // {
              //   name: 'judy',
              //   age: 25,
              // },
              // {
              //   name: 'marry',
              //   age: 64,
              // },
              // {
              //   name: 'tommy',
              //   age: 109,
              // },
            ],
          },
        })
      );
    }
  ),
];
