[![Build Status](https://travis-ci.org/lohs/demo.svg?branch=master)](https://travis-ci.org/lohs/demo)
<br>
hot reload works w/ dev but not test
# Use Docker Compose
```
docker-compose up
```
### Use this to force when changing docker-compose.yml file
```
docker-compose up --build 
```
### Work on a branch
```
git checkout -b feature
git add .
git commit -m "changed on feature branch"
```
## Run Tests Manually
hot reloading doesn't work on test suite, manually attach to container to run tests
issue with docker 2.1.0.5 but needed for OCH to run properly
```
docker exec -it CONTAINER_ID sh
npm run test
```
## Build optimized app for production
```
docker build .
docker run -p 8080:80 IMAGE_ID 
```
### Attach to running containers
```
docker ps
docker exec -it CONTAINER_ID sh
```
IMAGE_ID from docker build <br>
CONTAINER_ID from docker ps -a

# Manual Docker Commands
## Build development server
```
docker build -f Dockerfile.dev .
docker build -t devserver -f Dockerfile.dev .
```
## Run development server
```
docker run -it -p 3000:3000 IMAGE_ID
docker run -it -p 3000:3000 -v /app/node_modules -v /$(pwd):/app IMAGE_ID
```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
