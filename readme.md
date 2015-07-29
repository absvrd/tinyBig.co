#Angular Front-End Boilerplate

##This is a basic front end boilerplate for rapidly prototyping angular applications. Provided here
is a set of linked files, no styling, that allow you to have a modular directory structure during the development
process, while having consolidation during production. The seperation of concerns is helpful in while building, but
needs to be reconfigured for production. The build tools automatically take care of this, when run, they will consolidate the JS, ngJS, and all of the SASS files into singular scripts/files which are linked to the main index. You should never edit the build directory, this is automatically generated by the gulp build cycle.

##Getting Started
This assumes that you have node, installed and are familiar with how a package.json file works. You will need these to execute the build system with gulp. Also you will need nodemon to run the server. You couls simply run it with node, but that would be unwise. During development you have to repeatedly restart the server, and nodemon will abstract that away so the build cycle is fully automated.

  $ npm install

This will pull in all of the dependencies for the project.

  $ nodemon server.js

This will run the server, it will restart when something is added to relevant files, so that the user does not need to manually restart it.

##This is EXTREMELY bare-bones
Time was spent setting up and thinking about structure and the build cycle. Obviously, no time was spent on styling. That is your job. When you fire up the project, you will simply see an unordered list of links, that link 3 sections together. It is a blank canvas. Rename the controllers and the sections to your liking and add bootstrap or other libraries to suit your development cycle.


Enjoy.
SKG
