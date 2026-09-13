DevStack:

DevStack is a simple web application where users can explore different technologies and create their own technology stack. Users can add the technologies they like to their stack.

Technologies Used:

1. React
2. TypeScript
3. Tailwind CSS
4. DaisyUI
5. React Toastify
6. Vite

Features:

1. Users can see different technologies with their name, icon, and category.
2. Users can add their favorite technology to the **Your Stack** section.
3. Toast notifications are shown when a technology is added or removed.

React Questions & Answers

1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React code easier to write.

2. What is the difference between props and state?

Props are used to send data from a parent to a child. State is used to store data that can change.

3. What does the useState hook do, and where did you use it in this project?

useState stores data and updates the UI when the data changes. I used it to manage the selected technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs some code after the component renders. It can be used to load JSON data when the page starts.

5. Why does every item in a .map() list need a unique key prop?

The key helps React identify each item in the list. It helps React update the list correctly.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition.

I used it to show a message when the stack is empty.

{selectedTechnology.length === 0 ? (

  <p>Your stack is empty.</p>
) : (
  // show stack items
)}
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using props. A child can send data back by using a function passed through props.
