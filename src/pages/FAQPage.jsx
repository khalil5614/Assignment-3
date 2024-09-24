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
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
      <p>
        <b>
          9.1 What is React.js and Explain the concept of "components" in React.
        </b>
      </p>
    </div>
  );
};

export default FAQPage;
