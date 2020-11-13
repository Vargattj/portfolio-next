import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import {
  Provider,
  Link,
  withNavigationContext,
  withNavigationHandlers,
} from "react-awesome-slider/dist/navigation";
import Nav from "../nav";
import Home from "../../pages";
import Portfolio from "../../pages/portfolio";

// Wrapp the AwesomeSlider component with the navigationHandlers
const NavigationSlider = withNavigationHandlers(AwesomeSlider);

export const Slider = () => {
  return (
    <NavigationSlider
      className="awesome-slider"
      media={[
        {
          slug: "page-one",
          className: "page-one",
          children: () => <p>Page One</p>,
        },
        {
          slug: "page-two",
          className: "page-two",
          children: () => <p>Page Twosa</p>,
        },
        {
          slug: "portfolio",
          className: "portfolio",
          children: <Portfolio />,
        },
      ]}
    />
  );
};

// Page header navigation
const Header = () => {
  return (
    <Header>
      <nav>
        <Link href="/">Page One</Link>
        <Link href="portfolio">Page Two</Link>
        <Link href="portfolio">Page Two</Link>
      </nav>
    </Header>
  );
};

// Wrapp the aplication with the navigation Provider passing down the current page slug.
export const App = () => {
  const slug = "[THE INITIAL RENDERED SLUG]";

  return (
    <Provider slug={slug}>
      <Header />
      <NavigationSlider />
    </Provider>
  );
};
