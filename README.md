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
- [Apollo](https://www.apollographql.com/)
- [StyledComponents](#styledcomponents)
- [Storybook](#Storybook)
- [Jest](#Jest)

### StyledComponents

This project uses [StyledComponents](https://github.com/styled-components/styled-components) and supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client.

For this purpose we are extending the `<Document />` and injecting the server side rendered styles into the `<head>`, and also adding the `babel-plugin-styled-components` (which is required for server side rendering). Additionally we set up a global [theme](https://www.styled-components.com/docs/advanced#theming) for styled-components using NextJS custom [`<App>`](https://nextjs.org/docs/advanced-features/custom-app) component.

#### Notes

When wrapping a [Link](https://nextjs.org/docs/api-reference/next/link) from `next/link` within a styled-component, the [as](https://styled-components.com/docs/api#as-polymorphic-prop) prop provided by `styled` will collide with the Link's `as` prop and cause styled-components to throw an `Invalid tag` error. To avoid this, you can either use the recommended [forwardedAs](https://styled-components.com/docs/api#forwardedas-prop) prop from styled-components or use a different named prop to pass to a `styled` Link.

<details>
<summary>Click to expand workaround example</summary>
<br />

**src/components/StyledLink.js**

```javascript
import Link from "next/link";
import styled from "styled-components";

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
import StyledLink from "../components/StyledLink";

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
