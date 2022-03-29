# Pytorch-Widgets-Redesign

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs node_modules and all related dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Improvements

### The Original Widget:

![the old widget](https://github.com/97-Jeffrey/PyTorch-Widgets-Redesign/blob/master/Doc/Screen%20Shot%202022-03-29%20at%202.29.57%20PM.png?raw=true)

1. has name on first column, and each name has selections on the same row, so the overall structure is a table. which takes longer to figure out how to select widget, and it looks jammed visually.

2. The overall design is older: each widget block is a rectangle and widgets are tightly packed to each other.

3. `Run this command` section share the same background color as the above sections, which is harder for users to distingish at a glance.

### The New Widget:

![the new widget](https://github.com/97-Jeffrey/PyTorch-Widgets-Redesign/blob/master/Doc/Screen%20Shot%202022-03-29%20at%202.29.04%20PM.png?raw=true)

1. has a vertical structure: a name then followed by a row of selections. Visually, it looks tidy, which makes the widget selection easier.

2. The design of the widget block is more up-to-date: each block has curved border at the edge, and widgets are widely-spaced to each other, reducing visual pressure of users.

3. `Run this command` section has a unique dark background color, which makes it easier for users to distingish from result of the section.
