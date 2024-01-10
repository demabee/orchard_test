# Orchard Test

This is a simple guide to help you set up and run the React.js app bundled with Webpack.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/demabee/orchard_test.git

2. Navigate to the project directory:

  ```bash
  cd your-react-app
  ```

3. Install dependencies:
  ```bash
  yarn install
  ```

4. Run the app
  ```bash
  yarn start
  ```

### Building for Production

1. To build the app for production, run this:
  ```bash
  yarn build
  ```

### Technical Overview

In the development of this React.js application, I've chosen several technologies and tools

Build Tool: Webpack
Webpack was selected as the build tool for its efficiency and lightweight nature. It simplifies the bundling of assets, making it an excellent choice for managing the project's resources, optimizing performance, and facilitating code splitting.

UI Components: Ant Design
Ant Design's image component was integrated into the application since it has a built-in modal preview functionality.

Styling: Styled Components
This library allows for the creation of encapsulated and reusable styled components, enhancing the maintainability and readability of the codebase.

Code Formatting and Linting
To maintain a consistent code style and prevent potential bugs, both Prettier and ESLint were added into the project. Prettier ensures a uniform code format, while ESLint enforces coding standards and identifies potential issues during development.