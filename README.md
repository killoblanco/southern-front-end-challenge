# Southern Code Challenge

[![Website]](https://southern-front-end-challenge-killoblanco.vercel.app/)

## Using React, build an app that:

- ✅ Connects to the NASA API (NASA Open APIs):
- ✅ Obtains photos from the 'Mars Rover' endpoint
- ✅ Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit)
- ✅ The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, but not required)
- ✅ Allows the user to filter the rover photos by camera
- ✅ By default it shows the latest photos for current day
- ✅ Allows the user to search for photos based on 'Earth Day' date (2020-09-22)
- ✅ Allows the user to search for photos based on the 'Sol' date (2890)

### Optional:

- ❌ Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted, any serverless way of storing data is also accepted)
- ❌ A lot of extra points if you include a few tests.
- ✅ You can (and will get extra points) use NextJS to develop your app.
- ✅ We do care about the UX design, a nicely styled app would get extra points :D
- ✅ Please use a linter!

## Getting Started

First, install project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

By default, the app uses NASA API's key `DEMO_KEY` but you can set your own key in the `.env.local` file:

```bash
# .env.local
NEXT_PUBLIC_NASA_API_KEY="<your_key>"
```

To get your own key, please visit [NASA API](https://api.nasa.gov/).


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Running Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```

### Linting

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

[website]: https://img.shields.io/badge/-Demo_Page-blue?style=plastic&logo=MicrosoftEdge&color=3277BC
