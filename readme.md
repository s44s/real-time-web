# Real-time and location-based chat application

This application is a real-time chat room. People are able to communicate with each other when they are on the same URL at the same time. Working with socket.io and create something that uses the realtime function. Refactored the jQuery [chat example](https://socket.io/get-started/chat/) to vanilla JS so that I didn't need to use the jQuery library. Start with the basic chat then add a unqiue feature to understand the workings of socket.io.

![alt text](./screenshots/coverimage.png "Logo Title Text 1")
![](https://raw.githubusercontent.com/s44s/real-time-web/readme-suggestion/preview.png)

## How to install
First of all, download or clone the project, navigate to root folder and install dependencies.

``` npm install```

Run ``` node app.js ```
(Or fix TODO 1, it will change to `npm start`)
to start the server on port 3000.

Run ``` npm start ``` to start the server on port 3000.

## Features and tooling
- [x] Server: express
- [x] Templating: EJS
- [x] Real-time: Socket.io

#### To do
- [ ] Add a unique function to the basic chat assignment.
- [ ] Deploy the app.
- [ ] Add user names to the chat messages
