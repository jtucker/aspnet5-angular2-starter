ASP.Net 5 and Angular Quick Start Template
==========================================

Just a simple template for getting up and going with ASP.Net 5 and Angular 2 projects using 
C# on the server side and TypeScript on the client side. 

This is also a learning excercise to keep track of two technologies that I find myself the 
most productive. 

Getting Started
---------------
First things first, you will need the following items installed:

 0. [ASP.Net 5](http://docs.asp.net/en/latest/getting-started/index.html) 
 0. [Node/NPM](https://nodejs.org/en/download/) 
 0. A text editor/IDE of your choice. For me I flip between VS Code &amp; 
 	Visual Studio both you can get [from here](https://visualstudio.com)
	
	
We then need to install some helper utilities. 
```
npm install -g tsd jspm gulp
```
Once those are installed you can the execute the dependency installs. 
```
npm run config
```

Starting up the server
----------------------
Simply running `dnx web` will start up a simple web server on port `5000`. 
