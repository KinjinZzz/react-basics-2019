// Import React
import React from "react";
// import Prism from "prismjs";
// import 'prismjs/components/prism-jsx.min';
// import 'prismjs/components/prism-bash.min';;
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Link,
  CodePane,
  Appear
} from "spectacle";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-jsx";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Form from "./code/Form";
import Welcome from "./code/Welcome";
import Counter from "./code/Counter";
import Input from "./code/Input";
import Children from "./code/Children.jsx";

// Require CSS
require("normalize.css");
const theme = createTheme(
  {
    primary: "#ffa7c4",
    secondary: "#282c35",
    tertiary: "#01796F",
    quartenary: "#cecece",
    white: "white"
  },
  {
    primary: "Open Sans",
    secondary: "Open Sans"
  }
);

require("prismjs/themes/prism-coy.css");
require("./style.css");

const Code = props => (
  <CodePane
    theme="light"
    lang={props.lang}
    source={props.code}
    style={{
      marginTop: "1rem",
      height: props.height || "auto",
      padding: "0.5rem",
      lineHeight: 1.2,
      fontSize: "20"
    }}
  />
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <br />
          <Heading
            size={1}
            caps
            lineHeight={"30vh"}
            textColor="secondary"
            style={{ fontSize: 70 }}
          >
            <Image
              display="inline-block"
              src={require("./resources/kottans.png")}
              height="30vh"
              style={{ verticalAlign: "bottom", margin: 0 }}
            />{" "}
            React Basics
          </Heading>
          <Text
            textColor="secondary"
            style={{
              marginTop: "20vh",
              textAlign: "left",
              fontSize: "3.5vh",
              lineHeight: "8vh"
            }}
          >
            <span>By Andrii Voitsekhivskyi</span>
            <br />
            <span>
              <Link href="https://kinjin.me" textColor="tertiary">
                kinjin.me
              </Link>
              {/* React Developer in <i>ASD</i> */}
            </span>
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Image src={require("./resources/facebook.png")} height="30vh" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            JSX
          </Heading>
          <br />
          <Code lang="jsx" code={require("!raw-loader!./code/jsx.example")} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Arrays
          </Heading>
          <br />
          <Code lang="jsx" code={require("!raw-loader!./code/jsx2.example")} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            React.Fragment
          </Heading>
          <br />
          <Code
            lang="jsx"
            code={require("!raw-loader!./code/jsxFragments.example")}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Як працює JSX
          </Heading>
          <br />
          <Code
            lang="jsx"
            code={require("!raw-loader!./code/jsxElement.example")}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            JSX Props
          </Heading>
          <br />
          <Code
            lang="jsx"
            code={require("!raw-loader!./code/jsxProps.example")}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            React Components
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Functional Component
          </Heading>
          <br />
          <Code lang="jsx" code={require("!raw-loader!./code/Welcome.jsx")} />
          <Text textColor="white">
            <Code lang="jsx" code='<Welcome name={"Donald"}/>' />
            <Welcome name={"Donald"} />
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Props.Children
          </Heading>
          <br />
          <Code lang="jsx" code={require("!raw-loader!./code/Children.jsx")} />
          <Text textColor="white">
            <Code lang="jsx" code="<Children><i>Donald</i></Children>" />
            <Children>
              <i>Donald</i>
            </Children>
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Class Component
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Code
            lang="jsx"
            height="60vh"
            code={require("!raw-loader!./code/Counter.jsx")}
          />
        </Slide>

        <Slide bgColor="secondary">
          <Text textColor="white">
            <Code lang="jsx" code="<Counter/>" />
            <Counter />
            <br />
            <Code lang="jsx" code="<Counter startCounter={3}/>" />
            <Counter startCounter={3} />
            <br />
            <Code lang="jsx" code="<Counter startCounter={-2}/>" />
            <Counter startCounter={-2} />
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Робота з полями
          </Heading>
          <br />
          <Code
            lang="jsx"
            height="40vh"
            code={require("!raw-loader!./code/Input.jsx")}
          />
          <input type="text" value={"Default Value"} onChange={() => false} />
          <Input value={"Default Value"} />
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={1} lineHeight={1} textColor="white">
            Форми
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <Code
            lang="jsx"
            height="40vh"
            code={require("!raw-loader!./code/Form.jsx")}
          />
          <Text textColor="white">
            <Form />
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            <Link
              href="https://reactjs.org/docs/react-component.html"
              textColor="tertiary"
            >
              Життєвий цикл компонента
            </Link>
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Монтування
          </Heading>
          <List>
            <ListItem>constructor()</ListItem>
            <ListItem>static getDerivedStateFromProps()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>componentDidMount()</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Оновлення
          </Heading>
          <List>
            <ListItem>static getDerivedStateFromProps()</ListItem>
            <ListItem>shouldComponentUpdate()</ListItem>
            <ListItem>render()</ListItem>
            <ListItem>getSnapshotBeforeUpdate()</ListItem>
            <ListItem>componentDidUpdate()</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            Розмонтування
          </Heading>
          <List>
            <ListItem>componentWillUnmount()</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            Більше про життєвий цикл:
          </Heading>
          <br />
          <Link
            href="https://css-tricks.com/the-circle-of-a-react-lifecycle/"
            textColor="tertiary"
          >
            The circle of a react lifecycle
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Heading
            size={1}
            style={{ fontSize: "3rem" }}
            lineHeight={1}
            textColor="secondary"
          >
            React + Classes + JSX
          </Heading>
          <br />
          <Appear order={1}>
            <Heading
              size={1}
              style={{ fontSize: "3rem" }}
              lineHeight={1}
              textColor="secondary"
            >
              + Babel + Webpack
            </Heading>
          </Appear>

          <br />

          <Appear order={2}>
            <Heading
              size={1}
              style={{ fontSize: "5rem" }}
              lineHeight={1}
              textColor="secondary"
            >
              ={" "}
              <Link
                href="https://github.com/facebookincubator/create-react-app"
                textColor="tertiary"
              >
                Create React App
              </Link>
            </Heading>
          </Appear>
          <br />
          <Appear order={3}>
            <Text>
              <Code lang="bash" code="npm i create-react-app -G" />
              <Code lang="bash" code="create-react-app my-app" />
            </Text>
          </Appear>
        </Slide>

        <Slide bgColor="white">
          <Text textColor="secondary">
            <Heading
              size={1}
              style={{ fontSize: "3rem" }}
              lineHeight={1}
              textColor="secondary"
            >
              Документація та гайди
            </Heading>
            <br />
            <Link href="https://reactjs.org/" textColor="tertiary">
              reactjs.org
            </Link>
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading
            size={1}
            style={{ fontSize: "3rem" }}
            lineHeight={1}
            textColor="secondary"
          >
            <Link
              href="https://github.com/facebook/react-devtools"
              textColor="tertiary"
            >
              React Dev Tools
            </Link>
          </Heading>
          <br />

          <Image src={require("./resources/devtools.jpg")} />
        </Slide>

        <Slide bgColor="white">
          <Image src={require("./resources/dan.png")} height={"50vh"} />
          <Heading
            size={1}
            style={{ fontSize: "5rem" }}
            lineHeight={1}
            textColor="secondary"
          >
            Dan Abramov
          </Heading>
          <br />
          <Link href="https://twitter.com/dan_abramov" textColor="tertiary">
            Twitter: @dan_abramov
          </Link>
          <br />
          <Link href="https://github.com/gaearon" textColor="tertiary">
            Github: @gaearon
          </Link>
          <br />
          <Link href="https://overreacted.io/" textColor="tertiary">
            Overreacted
          </Link>
        </Slide>
        <Slide bgColor="white">
          <Image src={require("./resources/kent.png")} height={"50vh"} />
          <Heading
            size={1}
            style={{ fontSize: "5rem" }}
            lineHeight={1}
            textColor="secondary"
          >
            Kent C. Dodds
          </Heading>
          <br />
          <Link href="https://twitter.com/kentcdodds" textColor="tertiary">
            Twitter: @kentcdodds
          </Link>
          <br />
          <Link
            href="https://egghead.io/courses/the-beginner-s-guide-to-react"
            textColor="tertiary"
          >
            The Beginner's Guide to React
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Link
            href="https://github.com/kottans/chernivtsi-frontend-2019/tree/master/homeworks/react-basics"
            style={{ fontSize: "5rem" }}
            textColor="tertiary"
          >
            Homework
          </Link>
        </Slide>
        <Slide bgColor="primary">
          <Image src={require("./resources/questions.png")} height={"50vh"} />
          <Heading
            size={1}
            style={{ fontSize: "5rem" }}
            lineHeight={1}
            textColor="secondary"
          >
            Questions ?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
