# Alert Component

A customizable React Alert component built with TypeScript. This component allows you to display various types of alerts, such as danger, success, info, warning, and primary, with custom icons, titles, and descriptions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Contribution Guidelines](#contribution-guidelines)
- [License](#license)
- [Contact](#contact)

## Features

- **Multiple Alert Types:** Supports `danger`, `success`, `info`, `warning`, and `primary` alert types.
- **Customizable:** Easily customize the icon, title, and description of the alert.
- **Dismissible:** Includes a close button to dismiss the alert.
- **Responsive:** The component is designed to be responsive and fit well in different screen sizes.
- **TypeScript:** Built with TypeScript for type safety and better developer experience.
- **SCSS:** Styled with SCSS for more maintainable and organized styles.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Alert-Component.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Alert-Component
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Usage

To use the `Alert` component, import it into your component and pass the required props.

```tsx
import Alert from "./component/Alert/Alert";
import { AlertTriangle } from "lucide-react";

function App() {
  return (
    <Alert
      type="danger"
      icon={<AlertTriangle />}
      title="Error Occurred"
      description={
        <>
          An error occurred while processing your request.{" "}
          <a href="#">Please try again</a> later.
        </>
      }
    />
  );
}

export default App;
```

### Props

| Prop          | Type      | Description                                         |
| ------------- | --------- | --------------------------------------------------- |
| `type`        | `string`  | The type of the alert (`danger`, `success`, `info`, `warning`, `primary`). |
| `icon`        | `ReactNode` | The icon to be displayed in the alert.              |
| `title`       | `string`  | The title of the alert.                             |
| `description` | `ReactNode` | The description or message of the alert.            |

## Technology Stack

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **Sass:** A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
- **Vite:** A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **ESLint:** A static code analysis tool for identifying problematic patterns found in JavaScript code.
- **Lucide React:** A library of simply designed, beautiful icons.

## Contribution Guidelines

Contributions are welcome! If you have any suggestions, bug reports, or want to contribute to the codebase, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is not licensed.

## Contact

Mohamed Elsheshtawey - [LinkedIn](https://www.linkedin.com/in/mohamed-elsheshtawey/)