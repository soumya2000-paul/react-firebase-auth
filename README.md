# React Firebse Auth
A react app using hooks integrated with firebase for authenticating users. The app includes following features:

- Full [Firebase](https://firebase.google.com/) Platform Support Including Firestore Database, Authentication, Analytics and Storage
- Uses [react-hooks](https://reactjs.org/docs/hooks-reference.html) only for components
        ✅ Functional components 
        🚫 Class components
- Utilize [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) and [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) react hooks to manage global state of the app and [useState](https://reactjs.org/docs/hooks-reference.html#usestate) for internal component states.
- Various authentication methods to authenticate users:
        
        * SignUp using email and password 
        * Sign In using Facebook and Google
        * Sign In using an email link
- [MaterialUI](https://material-ui.com/) design components
    
## Getting Started
create a folder name .firebase
```
then put the file named hosting.cHVibGlj.cache
```
## Installation

**Step 1:**

Download or clone this repo by using the link below:

```
git clone https://github.com/soumya2000-paul/react-firebase-auth
```

**Step 2:**

Setup a new project in firebase and get the configuration.

**Step 3:**

Go to the folder of the project.
 
Create a new file '.env'
```
touch .env
```
Add these env variables with the config values you recieived from firebase
(No quotes `""`required)
```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```
last option is optional


**Step 5:**

Execute the following command in console to install the required packages: 

``` 
npm install
```
**Step 4:**
Simply run the app using

``` 
./run.sh
```



