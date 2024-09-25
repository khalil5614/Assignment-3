import React from "react";

const FAQPage = () => {
  return (
    <div>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        React.js is a popular JavaScript library for building user interfaces,
        particularly single-page applications (SPAs), which dynamically update
        the content without reloading the entire page. Developed by Facebook,
        React allows developers to create reusable, interactive, and fast UIs
        using a component-based architecture. Key Features of React:
        Declarative: React allows developers to describe how the UI should look
        for different states, and it handles the updates efficiently.
        Component-Based: React encourages building UIs with encapsulated
        components, which manage their own state and logic. Virtual DOM: React
        uses an in-memory representation of the real DOM (called the Virtual
        DOM) that enables faster updates by only changing parts of the UI that
        need to be re-rendered. Components in React At the core of React are
        components. A component is essentially a JavaScript function or class
        that optionally accepts inputs (called "props") and returns React
        elements describing how a section of the UI should appear. 1. Types of
        Components: Functional Components: These are JavaScript functions that
        take props as input and return React elements. They're simple and often
        used for UI presentation. Class Components: These are ES6 classes that
        extend React.Component. They are more feature-rich than functional
        components (before the advent of hooks) and can maintain their own
        internal state. 2. Props (Properties): Props are arguments passed to
        components to configure them or supply data. They are immutable and
        allow a parent component to pass data to child components. 3. State:
        State is an object that holds data or variables local to a component.
        Unlike props, state is mutable and can be changed using setState (for
        class components) or the useState hook (for functional components). 4.
        Component Lifecycle: React class components have several lifecycle
        methods (e.g., componentDidMount, componentDidUpdate,
        componentWillUnmount) to hook into various stages of a component's
        lifecycle, such as when it is mounted, updated, or removed. With
        functional components and hooks, lifecycle logic is managed using the
        useEffect hook. 5. Composition: React components can be composed to
        build complex UIs. You can think of them as small building blocks that,
        when combined, create a full-fledged application. In summary, React
        components encapsulate UI logic and can be composed, reused, and passed
        data through props, making them a powerful way to structure complex
        applications efficiently and maintainably.
      </p>
      <p>
        <b>9.2 What is JSX in React, and how does it work?</b>
      </p>
      <p>
        JSX (JavaScript XML) is a syntax extension for JavaScript that allows
        you to write HTML-like code directly within your JavaScript files. It's
        a key feature of React because it makes creating UI components easier
        and more intuitive. While JSX looks like HTML, it is actually syntactic
        sugar for JavaScript, which React transforms into plain JavaScript
        function calls that describe the structure of the UI. How JSX Works JSX
        is not valid JavaScript, so it needs to be compiled by a tool like Babel
        into regular JavaScript that browsers can interpret. Behind the scenes,
        JSX is transformed into React function calls (React.createElement),
        which generate the virtual DOM elements.
        <br />
        JSX Syntax Example:
        <br />
        const element = <h1>Hello, world!</h1>;
        <br />
      </p>
      <p>
        <b>
          9.3 What is the Virtual DOM, and how does React use it to optimize
          performance?
        </b>
      </p>
      <p>
        The Virtual DOM (VDOM) is a lightweight in-memory representation of the
        actual DOM (Document Object Model) that React uses to optimize
        performance when updating web pages. Instead of directly manipulating
        the real DOM every time a change occurs, React creates and updates a
        virtual version of the DOM in memory. This allows React to minimize
        expensive real DOM operations, which can be slow, by performing
        efficient calculations and batching updates. Key Concepts of Virtual DOM
        DOM (Document Object Model): The DOM is a tree structure that represents
        the HTML of a web page. Any changes to the DOM, such as adding or
        removing elements, can be computationally expensive and slow because the
        browser has to re-render the entire page or significant parts of it.
        Virtual DOM (VDOM): The Virtual DOM is a virtual (in-memory) copy of the
        real DOM that allows React to optimize updates. It is a JavaScript
        object that mirrors the structure of the real DOM elements. When a
        component’s state or props change, React creates a new Virtual DOM tree.
        It then compares this new Virtual DOM with the previous one in a process
        called "diffing."
        <br />
        How React Uses the Virtual DOM to Optimize Performance Rendering Virtual
        DOM: When a React component's state changes (e.g., due to user input),
        instead of immediately updating the real DOM, React updates the Virtual
        DOM first. React then computes the difference (or diff) between the
        previous Virtual DOM and the updated Virtual DOM (this process is called
        reconciliation). Diffing Algorithm: React uses an efficient diffing
        algorithm to determine what parts of the Virtual DOM have changed. It
        doesn't re-render the entire Virtual DOM or real DOM but only looks at
        the parts of the UI where changes have occurred. By comparing the old
        Virtual DOM and the new one, React identifies the minimum set of changes
        needed. Batching Updates: React batches multiple state or prop changes
        together in the Virtual DOM to reduce the number of real DOM updates.
        Instead of updating the real DOM after every single state change, it
        groups changes together to apply them all at once. This minimizes the
        number of real DOM manipulations, which are the most time-consuming part
        of UI updates. Updating the Real DOM: After calculating the minimal set
        of changes, React updates the real DOM accordingly, but only in the
        areas where differences have been detected. This results in fewer direct
        manipulations of the real DOM, leading to better performance. These
        updates are applied in an efficient manner to avoid unnecessary reflows
        and repaints in the browser.
      </p>
      <p>
        <b>
          9.4 Explain the concept of "props" in React and how they are used.
        </b>
      </p>
      <p>
        In React, "props" (short for properties) are a core concept used to pass
        data from one component to another, typically from a parent component to
        a child component. Props allow components to be reusable, customizable,
        and dynamic, as they make it possible to pass information into
        components and control how they behave or display content. Key Concepts
        of Props in React Props are Read-Only: Props are immutable, meaning that
        once a component receives props, it cannot change them. They are used
        for passing data down to child components, not for managing state or
        making modifications. Any changes to the props should come from the
        parent component. Props are Passed from Parent to Child: Props are
        passed down the component tree from parent components to child
        components, allowing the parent to customize the child component's
        behavior or display based on the passed values.3. Props Are Data Passed
        to Components as Attributes: Props are passed to components similarly to
        how HTML attributes work.
      </p>
      <p>
        <b>9.5 What is "state" in React, and how does it differ from props?</b>
      </p>
      <p>
        In React, state and props are two fundamental concepts used to manage
        and pass data within components. However, they serve different purposes
        and have distinct characteristics. State in React State is a built-in
        React object that stores data or information about the component. It is
        local to the component, meaning each component can have its own state.
        State is mutable, meaning it can change over time, and React will
        automatically re-render the component when the state changes. This
        allows you to build interactive and dynamic components. Key
        Characteristics of State: Mutable: State can be changed using the
        setState method in class components or the useState hook in functional
        components. When the state changes, React triggers a re-render to
        reflect the updated UI. Local to the Component: State is only accessible
        and managed within the component in which it is defined. Other
        components cannot directly access a component's state, although they can
        pass information to update it through props or callbacks. Controls
        Component Behavior: State typically holds data that affects how a
        component behaves or what it renders. For example, it can control form
        input values, the visibility of elements, and more. Initialized in the
        Component: State is initialized inside the component, either through the
        constructor (in class components) or with the useState hook (in
        functional components).
      </p>
      <p>
        <b>
          9.6 Explain the useState hook and provide an example of how it is
          used.
        </b>
      </p>
      <p>
        <b>
          9.7 What is the purpose of the useEffect hook in React, and when would
          you use it?
        </b>
      </p>
    </div>
  );
};

export default FAQPage;
