#Pull node docker image from server
FROM node:alpine

#Working directory in docker image
WORKDIR '/app'

#Copy package.json and package-lock.json from local directory to docker image
COPY package*.json ./

#Install node modules/dependencies 
RUN npm install

#Copy source files
COPY ./ ./

#Create optimized app build
RUN npm run build

#Pull nginx docker image from server
FROM nginx

#Web port
EXPOSE 80

#Copy build optimized files into default nginx folder
COPY --from=0 /app/build /usr/share/nginx/html