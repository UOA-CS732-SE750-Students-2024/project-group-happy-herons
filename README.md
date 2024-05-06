# COMPSCI 732 / SOFTENG 750 project - Team Happy Herons
<br>
<br>

### 04/16/2024 description
- `gitignore` file is added
- `Tailwind CSS` is added and configured

<br>

- use following command to clone the project
```bash
git clone https://github.com/UOA-CS732-SE750-Students-2024/project-group-happy-herons.git
```

- use following command to install all the dependencies
```bash
cd Group-Happy-Herons-Project
npm install
```

<br>
<br>
<br>
<br>
<br>
<br>

# Estore

Estore is a product branch of a project focusing on environmental sustainability. It is built with React Native and Expo, aiming to raise user awareness of sustainable and eco-friendly products by adopting modern frontend technologies to create a seamless user experience.

## Technologies Used

### Frontend
- **React Native**: A core framework for building cross-platform mobile apps using JavaScript and React.
- **Expo**: Provides comprehensive tools and services for developing, building, and deploying React Native apps.
- **@react-navigation/native-stack**: Implements navigation between screens using native stack navigators.
- **nativewind**: Provides utility-first styling for React Native components, similar to Tailwind CSS.

### Components and Styling
- **EcoStoreHeader**: The store header component, featuring a title and an icon to represent the brand and theme.
- **Product**: A product card component that displays the product's name and image and can trigger a detailed view event.
- **ProductDetails**: The product detail screen showcases a specific product's description, image, and a link to view the website.
- **ProductsList**: Displays a list of all products and allows users to select a specific product to view its details.
- Uses a custom API in the `ProductsService` module to fetch all product information and specific product details.

## Testing

### Component Testing
Component testing is performed using `@testing-library/react-native`, simulating user interactions and asserting the expected UI behavior to verify the proper functioning of components.

- **Product Component**:
  - Tests if the product's name and image are displayed correctly.
  - Verifies that the `onPress` callback is triggered when the click event is fired.

- **ProductsList Screen**:
  - Ensures that the product list loads and displays correctly.
  - Confirms that clicking on a product card navigates to the corresponding detail page.

### Configuration
- **Jest**:
  - **Preset**: Uses `jest-expo` to tailor the Jest configuration specifically for Expo projects, ensuring a consistent testing environment.
  - **Transform**: Uses `babel-jest` to transpile JavaScript and TypeScript files with the appropriate Babel configuration file (`babel.config.js`).
  - **Setup Files**: Adds `@testing-library/jest-native/extend-expect` to provide additional matchers for React Native component testing.
  - **Module Name Mapping**: Maps non-JS files (e.g., styles and images) to appropriate mock files.
    - **Style Mocking**:
      - `Group-Happy-Herons-Project/__mocks__/styleMock.js`:
        ```js
        // Mocks all styles as an empty string
        module.exports = "";
        ```
    - **File Mocking**:
      - `Group-Happy-Herons-Project/__mocks__/fileMock.js`:
        ```js
        // Mocks all image files as an empty object
        module.exports = {};
        ```
  - **Ignore Patterns**: Skips directories like `node_modules`, `android`, and `ios` to avoid including irrelevant files in the test suites.

- **Babel Configuration**:
  - The Babel configuration file (`babel.config.js`) ensures compatibility between the development and testing environments. It applies the necessary presets and plugins for the project.
  - Example configuration:
    ```js
    module.exports = function (api) {
      api.cache.using(() => process.env.NODE_ENV);
      const isTest = api.env("test");

      let plugins = [];
      if (!isTest) {
        plugins.push("nativewind/babel");
      }

      plugins.push([
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ]);

      return {
        presets: ["babel-preset-expo"],
        plugins,
      };
    };
    ```

- **Mocking**:
  - Jest's `mock` feature is used extensively to simulate services and API calls, ensuring isolated and predictable testing outcomes.


