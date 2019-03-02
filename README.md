# Skin Cancer Detection

## Brief Intro
This repo is an application using ML function to do classification on images and detect whether it'll have features of skin cancer or not. Since we'd focus mainly on ML part last time, we may contribute more to application development this time. JS web page may included, the web page will be able to creat account and save patient's data to the data base. 

## Project Intro
Build an application that uses deep learning to detect skin cancer and based on probablitiy will connect or recommend a doctor to see.  For example, if it is high priority, recommend nearby dermotolgist.  if not, a general practicioner.  Also, the app should include videos based on the resutls to educate the user.
For AI models, please research few models already implemented by researchers and are open sourced and use them.

## User Story & Teches may Cover
- As a doctor, I want an application help me check my patient's skin condition.
- As a researcher, I need an application help me store my patient's data.
- As a patient, I want an application to monitor my treatment progress.

- Interface should be brief, clean and easy to use
- There may be a button for sending results directly to user or wait until results show up on webpage
- Map API may be added after diagnoized to show hospitals around.
- The web page will using JS, React and Redux.
- The web page will connect to the MongoDB database to save patient's data.

## Modules May Include


## Datasets
Kaggle: https://www.kaggle.com/kmader/skin-cancer-mnist-ham10000

ISIC: https://www.isic-archive.com/#!/topWithHeader/onlyHeaderTop/gallery


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
