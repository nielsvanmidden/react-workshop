# Creating a Toaster

## Goal
Goal of this exercise is getting to understand the concept of a store (Redux), actions, action creators and reducers.

## Exercise
In the previous exercise we've created a toaster. A small React component tree that we will refactor a bit in order to manage state seperately. Please re-use the given components but move away from managing state internally. Instead replace state with props, propagated throughout connected components. Same story for the toast dismiss event. Which should be an action provided by the store.

Attached you will find a json file that respresents data for three toaster messages.
```
src/js/__data__/index.json
```

Approximate time to finish: 1.5 hours.

## Setup

Clone repo and open navigate to `2-redux`
```
https://github.com/nielsvanmidden/react-workshop.git
```

Install packages
```
npm install
```

Run Storybook
```
npm run storybook
```

Open your browser
```
http://localhost:6006
```

## Guidance
Please use the components provided.
