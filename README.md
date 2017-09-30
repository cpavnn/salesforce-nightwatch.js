# Nightwatch.js for Salesforce
* Getting started with nightwatch.js for Salesforce


## Always refer <http://nightwatchjs.org/> for up to date reference and documentation

---


## What is this repo
* Installing and getting started with nightwatch.js for salesforce
* Write and run the first script on nightwatch.js following Page Object Model(POM) pattern 
* Few use cases and code samples for using it for salesforce.com classic

---

## What is Nightwatch.js
* Nightwatch.js is an easy to use Node.js based End-to-End (E2E) testing solution for browser based apps and websites. It uses the powerful W3C WebDriver API to perform commands and assertions on DOM elements
* More information at http://nightwatchjs.org/

---

## Few use cases
* Perform automated testing for salesforce, test out in multiple browsers and verify
* Automate Sandbox post refresh activities, such as changing configurations that are not available via Metadata API or exposed through Apex

---

## Installation

* We need few things to be installed prior to writing the first script (<http://nightwatchjs.org/gettingstarted>)

---

### Install nodejs
* Install node: <https://nodejs.org/en/>
* After installation open command prompt and type `node --version`, if installed correctly you should see the version number

---

### Install nightwatch.js

  - Open command prompt 
   - If you are behind a proxy, please set proxy for npm
    - npm config set proxy http://IPADDREES:PORT
   - npm config set https-proxy http://IPADDRESS:PORT
   - Type `npm install -g nightwatch` 
   - After installation, exit and reopen the command prompt and type `nightwatch --version`, you should see the version number

---

### Download Selenium Server Standalone
* To run the scripts locally you need selenium-server, which requires jdk to be present
* If you dont have jdk, please install <http://www.oracle.com/technetwork/java/javase/downloads/index.html>
* Download the latest selenium server jar file from <http://selenium-release.storage.googleapis.com/index.html>
    - This file is already placed in the `bin` folder of the repo

---

### Download chrome driver
* We will be running our scripts on chrome, hence we need `chromedriver`, for other browser please download the respective webdrivers
* Download the chromedriver from <https://sites.google.com/a/chromium.org/chromedriver/>   
   - This file is already placed in the `bin` folder of the repo

---

### Clone the repo
* Open command prompt, `cd` to to folder of your choice
* Type ``` git clone https://github.com/cpavnn/salesforce-nightwatch.js.git ```

---

### File and folder structure

* ` bin ` folder contains the 
    
    - ` selenium-server-standalone.jar `
    - ` chromedriver.exe `
    
    This files are required if the scripts are required to locally


* ` page-objects ` folder contains all the page objects of the scripts, read about page object model
   - We define the UI element selectors and operations on the elements

* ` reports ` folder contains the execution reports, has the details of the script name, date and time when its run, status of the steps etc


* ` tests ` folder has the following sub folders

* ` .env ` has environment specific variables, such as username and password   

* ` nightwatch.json ` 
   - Config file which is used to run the scripts locally
   - We define the file/folder paths of the config, scripts, webdriver etc
   - Open the file `nightwatch.json` and go through, its self explanatory

* ` package.json `
  - Has the metadata details of the project ( Do not confuse with salesforce metadata)

---

### Prepare the scripts to run
* Open command prompt and type `npm install`
* Modify the user name and password in file, `.env`
* The `.env` file is added to `gitignore` so that we wont be exposing the credentials to others and the file stays locally on your machine
* Login to the org and make sure, there is no 2 factor auth for the user, or else the script wont be able to login
   - open up the ip ranges for the user's profile, (So that sf wont ask for a verification code)

---

### What to expect from this script

* The script under `tests` folder `loginToSalesforce.js` will run and perform the following steps, 
   - Open `login.salesforce.com` in chrome 
   - Type in username and password and click login
   - Opens up salesforce home page, Pause for 10 Seconds
   - End the session(Closes the browser)

---

### Running the demo script locally

* Open command prompt
* `cd` to the repo folder
* Type `nightwatch`, the script starts executing

### Further
* Improvise the script for few other demo, such as create account, change config from setup menu etc.
* Example on how to do the same on a CI server