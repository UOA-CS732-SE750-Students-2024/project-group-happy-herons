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
<be>
  

  
Welcome to the project! I look forward to seeing your progress and your final results this semester!

Your team members are:
- Xiangnan Lu
- Zheyang Cao
- Jinquan Wen
- Xin Yue
- Ze Yin
- Yan Li

![](./group-image/Happy%20Herons.webp)

## Technologies
### Image Recognition and Information Retrieval

This section of our project describes the integration of TensorFlow.js with React Native for offline image recognition, and the utilization of the ChatGPT API for online information retrieval. The functionality facilitates rubbish classification and provides users with detailed information about identified items.And the modes are controlled by users and internet connections.

### Offline Mode

The TensorFlow.js model is used within the React Native app to classify images of rubbish directly on the user's device, operating fully offline.

- TensorFlow.js is integrated using the @tensorflow/tfjs-react-native adapter, allowing the machine learning model to run directly on mobile devices without needing internet access.

- The model is pre-trained and bundled with the app, enabling instant image processing and classification.

```
import * as tf from "@tensorflow/tfjs";
import { bundleResourceIO } from "@tensorflow/tfjs-react-native";

export const useModel = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        await tf.ready();
        console.log("TF ready");
        const modelJson = require("../assets/model/model.json");
        const modelWeights = [
          require("../assets/model/group1-shard1of11.bin"),
        ];
        const loadedModel = await tf.loadGraphModel(
          bundleResourceIO(modelJson, modelWeights)
        );
        setModel(loadedModel);
        console.log("Model loaded successfully.");
      } catch (error) {
        console.error("Failed to load the model:", error);
      }
    }
    loadModel();
  }, []);
```
## Project Management
  
### Team Collaboration and Meetings

- Regular Meetings: Our team held weekly meetings every Tuesday (adjust depending on individual needs or progress) online or on campus to discuss project progress, address any issues, and plan for the upcoming week. Meeting minutes are available in the Wiki section of our GitHub repository.
  
- Communication Tools: We used WeChat for daily communication and projectManager (as shown in the below image) to track tasks and deadlines and ensure all team members stayed informed and engaged.
![](./group-image/planimg.png)
### Version Control and Workflow

- Git Workflow: We adopted the branch workflow. This approach helped us manage the development of new features without disturbing the main codebase. Each feature was developed in a separate branch and reviewed through pull requests before merging into the main.

- Code Reviews: Pull requests were used to review all code changes. This practice ensured code quality and shared understanding of the codebase among team members.

### Task Management

- Task Assignment: Tasks were assigned during our first couple of weekly meetings based on team members' skills and learning goals. The  details can be found on our projectManager board, which reflects the current status of each task, including 'To Do,' 'Doing,' and 'Done.'
- ![](./group-image/board.png)
- Progress Tracking: Progress was tracked using ProjectManager, where team members regularly updated tasks.

### Quality Assurance

- Code Reviews: All pull requests underwent thorough reviews by at least two other team members before merging to ensure quality and consistency.

### Regular Contributions and Commits

- Commit Logs: Our commit logs reflect regular contributions from all team members. Each commit clearly describes the implemented changes, ensuring traceability and transparency.

- Peer Reviews: Each piece of code was peer-reviewed, fostering knowledge sharing and collective code ownership.
