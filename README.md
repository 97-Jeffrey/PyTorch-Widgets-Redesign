# Pytorch-Widgets-Redesign

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs node_modules and all related dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Improvements

### The Original widget:

1. has name on first column, and each name has selections on the same row, so the overall structure is a table. which takes longer to figure out how to select widget, and it looks jammed visually.

2. The overall design is older: each widget block is a rectangle and close to each other.

3. `Run this command` share the same background color as the above sections, which is harder for users to distingish at a glance.

### The New widget:

1. has a vertical structure: a name then followed by a row of its selection. visually, it looks tidy, which makes the widget selection easier.

2. The design of the widget block is more up-to-date: each block has curved border at the edge, and widgets are widely-spaced.

3. `Run this command` section has a unique dark background color, which is easier for users to distingish.
