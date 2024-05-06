# COMPSCI 732 / SOFTENG 750 project - Team Happy Herons
<br>
<br>

## Technologies Used
### Frontend
- **Lottie**:
  - **'lottie-react-native'**: A library that renders After Effects animations exported as JSON with Lottie. It provides rich animations for enhancing user experience.
  - Lottie JSON files used as sources for animations.
- **State Management**: 
  - **'useState'**: A React Hook used for managing state in function components.
  - **'useEffect'**: A React Hook used for performing side effects in function components.

### Components
- **FetchData.js**: **Fetch API**, Used for making asynchronous HTTP requests to retrieve data from the server.
- 

## Testing

### Testing Express APIs 'Server.test.js'
The code is for testing Express APIs using an in-memory MongoDB database and the **"supertest'** library. Specifically, the tests verify that the API endpoints return data correctly from the in-memory MongoDB.

- **Setup & Teardown**:
  - The tests use an in-memory MongoDB server (**'MongoMemoryServer'**) to simulate database interactions.
  - Models (**'Food_Scraps_Bin'**, **'Recycling'**, **'Rubbish'**) are defined and seeded with initial data.
  - The database is cleared before each test and disconnected after all tests.
    
- **Tests**:
  - **Database Connectivity Test**: Ensures the database is connected properly before running tests.
  - **Endpoint Tests**:
    - **GET /food-scraps-bin/:category**: Validates that the correct items are returned based on the given category.
    - **GET /recycling/:category**: Checks if the correct recycling items are returned based on the category.
    - **GET /rubbish/:category**: Ensures the correct rubbish items are returned by category.

### Testing React-native 'BinScreen.test.js'
The **'BinScreen.test.js'** file primarily tests the **'BinScreen'** component's behavior to ensure it displays the correct waste bin data. 

- **Mocks**: The **'getWasteBinData'** function is mocked to return predictable data for testing purposes.
- **Tests**:
  - **Display Items Test**: Ensures that selecting a bin button displays the appropriate items.
  - **"No, Thanks" Section Test**: Confirms that the "No, Thanks" section shows correct items for the selected bin.
  - **Food Scraps Bin Test**: Checks if the food scraps bin displays the appropriate items when selected.
  - **General Rubbish Bin Test**: Ensures the general rubbish bin displays the correct items when selected.

## Deployed Solution
### Expo EAS
The official documentation ([EXPO EAS Documentation](https://docs.expo.dev/eas/)



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

Welcome to the project! I look forward to seeing your progress and your final results this semester!

Your team members are:
- Xiangnan Lu
- Zheyang Cao
- Jinquan Wen
- Xin Yue
- Ze Yin
- Yan Li

![](./group-image/Happy%20Herons.webp)
