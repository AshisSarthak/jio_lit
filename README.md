# Coding Challenge: Creating a LitElement Component with Tokens Studio's Graph Engine and Optimal Styling

## Objective

Your task is to create a LitElement component that renders a graph using the Tokens Studio’s Graph Engine. Additionally, you will optimize the styling mechanism, avoiding inline styles.

**Provided:** `inputGraph` as Button.json in the graphs folder, possible input values
{
appearance: primary | secondary | sparkle,
size: s | m | l,
emphasis: primary | secondary | ghost
}

Please refer the documentation for how to use the graph engine : https://tokens-studio.github.io/graph-engine/

## Requirements

### Initial Setup (5 minutes)

- Fork the provided Codepen starter template, which should already include the Graph Engine and Lit libraries.

### Styling (15 minutes)

- A function will be provided that returns a `styleSheet` object.
- Your task is to apply these styles to your LitElement components. Inline styles should be avoided.
- Consider a generalized approach to applying these styles across components, akin to React’s Higher Order Components. **(+10 minutes)**

### Test-Driven Development (TDD) (10 minutes)

- Write at least two unit tests for your component:
  1. Test if the graph renders correctly using Graph Engine.
  2. Test if the styles have been applied correctly.

### Optimization and Cleanup (5 minutes)

- Refactor your code for better performance or readability.

### Documentation (5 minutes)

- Write a brief README in your Codepen to explain the decisions you made, specifically how you implemented Graph Engine and applied styles.

## Evaluation Criteria

- **Functionality:** Does the code fulfill the given requirements?
- **Code Quality:** Is the code clean, maintainable, and following best practices?
- **Integration:** How well did you integrate Tokens Studio’s Graph Engine?
- **Styling Strategy:** How optimally did you apply the stylesheet?
- **Testing:** Did you write meaningful unit tests?

### Submission

Submit your solution by sharing the forked Codepen link.

**Good luck!**
