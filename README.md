# project-01-skin-cancer-detection-team1
![image](https://github.com/ec500-software-engineering/project-01-skin-cancer-detection-team1/blob/master/webpage.png)

## Brief Intro
This repo is an application using ML function to do classification on images and detect whether it'll have features of skin cancer or not. Since we'd focus mainly on ML part last time, we may contribute more to application development this time. JS web page may included, the web page will be able to creat account and save patient's data to the data base. 

You can see the final version of the diagram here:

![image](https://github.com/ec500-software-engineering/project-01-skin-cancer-detection-team1/blob/master/diagram.png)

## Installiation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Before running this project on your computer, install the requirments for this project first
You need to download [Node.js](https://nodejs.org/en/download/) to run following commands.

### Backend
The root directory is WebApp, please run:
```
cd WebApp
npm i express mongoose passport passport-jet jsonwebtoken body-parser bcryptjs validator
npm i concurrently
npm i react-router-dom
npm i axios
npm i atob
```
The above commands will let you meet the backend requirement.
### Frontend
Then run the following commands to install the frontend:
```
cd client
rm -rf node_modules
npm install -l
```
- Atob: Transfer data from base64 to binary, which will be used latter for reconstruction of the image.

- Axios: Communication between backend and frontend

- Concurrently: For concurrently running your server and client concurrently
### Run the app

### `npm run dev`

To use this app, you need to use this, which will run server and client concurrently on your working environment

In the [project directory](https://github.com/ec500-software-engineering/project-01-skin-cancer-detection-team1/tree/master/WebApp), you can run:

Right now, the webpage is in the `http://localhost:3000`

## Project Intro
Build an application that uses deep learning to detect skin cancer and based on probablitiy will connect or recommend a doctor to see.  For example, if it is high priority, recommend nearby dermotolgist.  if not, a general practicioner.  Also, the app should include videos based on the resutls to educate the user.
For AI models, please research few models already implemented by researchers and are open sourced and use them.

## User Story
- As a doctor, I want an application help me check my patient's skin condition.
- As a researcher, I need an application help me store my patient's data.
- As a patient, I want an application to monitor my treatment progress.

## Teches may Cover
- Interface should be brief, clean and easy to use
- There may be a button for sending results directly to user or wait until results show up on webpage
- Map API may be added after diagnoized to show hospitals around.
- The web page will using JS, React and Redux.
- The web page will connect to the MongoDB database to save patient's data.

## Modules May Include
![image](https://github.com/ec500-software-engineering/project-skin-cancer-detection-team1/blob/master/Flowchart.png)

## Datasets
Kaggle: https://www.kaggle.com/kmader/skin-cancer-mnist-ham10000

ISIC: https://www.isic-archive.com/#!/topWithHeader/onlyHeaderTop/gallery

## Model
Use pre-trained model from kaggle kernel. Kaggle location can be found at https://www.kaggle.com/sid321axn/step-wise-approach-cnn-model-77-0344-accuracy

## References & Third-party Libraries
Pandas: Dealing with .csv file

Scikit-Image: Basic Image Processing

Keras: ML Structures

## Challenges
ML Part:
- Body fur may cover and interfere with features on skin
- Pics with low resolution

Web Construction:
- Deploy the webpage
- Multiple requests from different client
- Using cloud or database to save  the data
