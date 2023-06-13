### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
	- React is a Javascript library that allows you to easier create UI and components that you can easily reuse across your app. You should use it when you want to write apps that allow you to easily reuse different components and code snippets. 

- What is Babel?
	- Babel is a  JavaScript compiler. It allows developers to write modern JavaScript code using the latest syntax and features, which may not be fully supported by all web browsers or JavaScript environments. Babel takes this modern JavaScript code and transforms it into equivalent code that can run in older browsers and environments.

- What is JSX?
	- JSX is an extension to the JavaScript language syntax used in React applications. It allows developers to write HTML-like code directly in their JavaScript files, making it easier to describe and render the structure of user interfaces.

- How is a Component created in React?
	- A component is created by defining a JavaScript function or a class. Developers can create components that can be imported and re-used anywhere across the app.

- What are some difference between state and props?
	- While state and props are both used to store data, there are some differences. State is used for data that is internal to a component and may be changed. On the other hand, props are external data that are passed into a component and are immutable (unable to be changed). State can only be accessed from within its component, whereas props can be accessed by the component it is passed by using the `props` object.

- What does "downward data flow" refer to in React?
	- In React, "downward data flow" refers to the pattern of data passing from parent components to child components through props. Data can only be passed to the children components from the parent components and cannot be passed upwards from child to parent.

- What is a controlled component?
	-  A controlled component is a component whose value is controlled by the component's state. In other words, the component itself manages and tracks the value of the input element, and any changes to the value are handled through state updates.

- What is an uncontrolled component?
	- An uncontrolled component is a form input element that manages its own state internally, rather than relying on React's component state. With uncontrolled components, the form input values are handled directly by the DOM, rather than being controlled by React.

- What is the purpose of the `key` prop when rendering a list of components?
	- The key prop is used when rendering a list of components in React to help React identify each individual item in the list. The purpose of the key prop is to help React efficiently update and manage the component hierarchy when the list changes.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
	- Using the array index for key is a poor choice because the index of each item in an array may change if the items are added or removed or if the order of the items in an array are re-ordered, which would cause issues with React identifying which entry it should be working with.

- Describe useEffect.  What use cases is it used for in React components?
	- useEffect is a built-in hook in React that allows you to perform side effects in functional components.It is used to handle various scenarios related to component lifecycle, such as executing code after the component has rendered and performing cleanup tasks when the component is unmounted. It could be used to fetch data, modify the DOM, or run clean up effects. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
	- The useRef hook in React allows you to create a mutable reference to an element or value that persists across component renders. It provides a way to access and modify DOM elements directly, store mutable values, or create references to other components. Changing the ref value does not cause a rerender of a component. 

- When would you use a ref? When wouldn't you use one?
	- You might use a ref to easily access DOM elements or manage uncontrolled components. You would not want to use a ref to manage state or to communicate between components. You should try to avoid using a ref to control the DOM unless there's no other choice.

- What is a custom hook in React? When would you want to write one?
	- A custom hook is a function that allows you to encapsulate and reuse logic in functional components. Custom hooks enable you to extract and share common stateful or effectful behavior across multiple components without the need for duplication. You would want to write one if you plan on using the same logic repeatedly across components, to control side effects, to fetch data, etc.