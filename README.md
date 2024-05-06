# COMPSCI 732 / SOFTENG 750 project - Team Happy Herons
<br>
<br>


# Technologies Used

## Backend

**Framework:**

- **Express.js**: A versatile Node.js web application framework used to set up servers, manage routing, and handle middleware, suitable for both web and mobile applications.

**Libraries:**

- **Mongoose**: A MongoDB ODM for Node.js that handles data relationships, schema validation, and data translation between code and MongoDB.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`, essential for secure and scalable configuration management.
- **body-parser**: Parses incoming request bodies, making JSON data available under `req.body`, crucial for handling JSON requests effectively.
- **CORS**: Provides middleware to enable or restrict resource requests based on their origin, crucial for web application security and functionality.

## Database

- MongoDB Atlas:A fully managed NoSQL cloud database service that significantly simplifies database management.



<br>
<br>




# Deployed Solution

## **Mobile Application Deployment**

### Expo EAS

The official documentation ([EXPO EAS Documentation](https://docs.expo.dev/eas/))

### What is Expo EAS

Expo Application Services (EAS) is a deeply integrated service platform provided by the team behind Expo, offering cloud services for building, deploying, and releasing mobile applications built with Expo and React Native.

**Features**:

- **EAS Build**: Supports cloud builds for iOS and Android applications.
- **EAS Submit**: Submits apps to the App Store and Google Play.
- **EAS Update**: Provides instant app updates.
- **EAS Metadata**: Simplifies metadata management.

### Configuring EAS Build

（这段话看看是否需要修改下，说明我们计划在ios运行，但是因为开发者账号限制，只列出步骤？）
For our current React Native project, we're primarily targeting iOS and planning to use Expo EAS for building and packaging. However, due to limitations with our Apple Developer Account, we couldn't finalize the packaging process. Below are the steps we intended to follow for the build:

- **1.Install the latest EAS CLI**

```
npm install -g eas-cli

```

- **2.Log in to your Expo account:**

```
eas login

```

- **3.Initialize the project configuration file:**

```
eas build:configure

```

- **4.Build the application:**

```
eas build --platform ios
eas build --platform android

```

Note: If this is your first time building an iOS application, you may need to set up relevant **Apple developer certificate information**. EAS CLI will guide you through these steps.

### EAS Submit:

- **Submit to the Google Play Store**: [Submit to the Google Play Store](https://docs.expo.dev/submit/android/)
- **Submit to the Apple App Store**: [Submit to the Apple App Store](https://docs.expo.dev/submit/ios/)

## Backend Deployment

Our web application, built with the Express framework, is deployed on AWS EC2 instances. This enhances stability and reliability while optimizing performance and cost through AWS EC2's elastic computing.

**Key Features:**

- **CORS Support**: Integrates CORS middleware to allow the front-end application to securely access backend services from different origins.
- **Data Parsing**: Employs `body-parser` middleware to parse incoming JSON-formatted data, enhancing data processing efficiency.
- **Environment Variable Management**: Utilizes the `dotenv` package to load environment variables from a `.env` file, enhancing the application's configurability and security.

**Database Connection and Server Listening:**

- Asynchronously connects to the MongoDB database using `mongoose`. If the connection fails, error messages are printed.
- The server listens on a port obtained from environment variables, or defaults to 8001, enhancing the server's configurability.

**Conditional Startup Logic:**

- The application connects to the database and starts the server when not running in a test environment (such as during testing with Jest).

### API Design

We have set up specific API endpoints for different types of waste management:

- `/food-scraps-bin/:category`: Queries food scraps by category.
- `/recycling/:category`: Queries recyclable items by category.
- `/rubbish/:category`: Queries other types of waste by category.

## Database Deployment

Our database choice is MongoDB Atlas, a fully managed cloud database service that significantly simplifies database management.

**Key  Features:**

- **No Local Setup Required**: Users can access the database from any device, eliminating the need for local setup and maintenance, thereby reducing costs and risks related to local hardware failures.
- **Cost and Risk Reduction**: Using Atlas reduces the expenses and challenges of maintaining local hardware and mitigates risks related to system failures.








<br>
<br>

























# Project Initialization Description
- `gitignore` file is added
- `Tailwind CSS` is added and configured
- `React Navigation` library is added
<br>

- after `git clone` and `cd releaf`, use `npm install` to install all the dependencies


<br>
<br>


Welcome to the project! I look forward to seeing your progress and your final results this semester!

Your team members are:
- Xiangnan Lu
- Zheyang Cao
- Jinquan Wen
- Xin Yue
- Ze Yin
- Yan Li

![](./group-image/Happy%20Herons.webp)