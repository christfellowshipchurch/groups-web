# Christ Fellowship Church – Groups Web App

## How to use

```bash
## Clone the project
git clone https://github.com/christfellowshipchurch/groups-web.git

## Install dependencies
yarn

## Start dev server
yarn dev
```

### Built with technology we ❤️

- [The Apollos Project](https://apollos.app)
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Apollo](#Apollo)
- [StyledComponents](#styledcomponents)
- [Storybook](#Storybook)
- [Jest](#Jest)

### Apollo

[Apollo](https://www.apollographql.com/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.

This project integrates Apollo with Next and is SSR ready by allowing us to wrap necessary `/pages` inside a custom [`withApollo`](https://github.com/christfellowshipchurch/groups-web/blob/master/src/lib/apollo.js#L74-L176) higher-order component (HOC). Using the HOC pattern allows us to pass down a central store of query result data created by Apollo into the React component hierarchy for that page while maintaining Next optimizations like [Automatic Static Optimization](https://nextjs.org/docs/advanced-features/automatic-static-optimization).

On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method, getDataFromTree. This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.

<details>
<summary>Query Examples</summary>
<br />

**Client side query (default behavior)**

```javascript
import { useQuery } from '@apollo/react-hooks';

function Boom() {
  const { data } = useQuery(exampleQuery);
  //...
}

export default withApollo()(ClientOnlyPage);
```

**SSR enabled query**

```javascript
import { useQuery } from '@apollo/react-hooks';

function Boom() {
  const { data } = useQuery(exampleQuery);
  //...
}

export default withApollo({ ssr: true })(ClientOnlyPage);
```

</details>

##### Note

Do not be alarmed that you see two renders being executed. Apollo uses [`getDataFromTree`](https://www.apollographql.com/docs/react/api/react-ssr/#getdatafromtree) to recursively traverse the React render tree looking for Apollo query components. When it has done that, it fetches all these queries and then passes the result to a cache. This cache is then used to render the data on the server side (another React render).

### StyledComponents

This project uses [StyledComponents](https://github.com/styled-components/styled-components) and supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client.

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

##### Note

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Workaround example</summary>
<br />

**src/components/StyledLink.js**

```javascript
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
```

**src/pages/index.js**

```javascript
import StyledLink from '../components/StyledLink';

export default () => (
  <StyledLink href="/post/[pid]" forwardedAs="/post/abc">
    First post
  </StyledLink>
);
```

</details>

### Storybook

This project uses [Storybook]("https://storybook.js.org/"). You'll love it!

```bash
## To run storybook. Check the console for the port/address to access it.
yarn storybook

## To build static storybook
yarn build-storybook
```

### Jest

This project uses [Jest]("https://jestjs.io/") for tests and regression testing with snapshots. Tests are also great documentation! We encourage you to check them out.

```bash
## To run tests
yarn test

## To update snapshots
yarn test -u
```

### ESLint + Prettier

We use ESLint in collaboration with Prettier to keep code clean and free of potential errors. Our ESLint configuration is dependent on the [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) package.

ESLint and all required packages are built-in so once you `yarn`, you'll have the linter enabled. However, Prettier will need to be downloaded using your preferred code editor.

#### Install/Configure using Atom

- Prettier is a package you can download by going to Preferences > Install > search "Prettier"
- Download the package, "prettier-atom"
- In the settings menu for the package, make sure `ESLint Integration` is checked.

#### Install/Configure using VS Code

- You actually don't need the Prettier extension on VS code, just the ESLint extension
- Download the ESLint extension by clicking the `Extension` icon and searching for `ESLINT`
- Open up your `USER_SETTINGS` by going to Preferences > Settings
- Make sure your settings have the following:

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "eslint.validate": ["javascript", "javascriptreact"]
}
```

#### Install/Configure using Sublime

- You will need to install the [sublime-prettier](https://github.com/danreeves/sublime-prettier) plugins
- Make sure you go through the above links instructions to correctly install this plugin.
