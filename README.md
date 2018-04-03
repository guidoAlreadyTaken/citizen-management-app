# COMEM+ Citizen Engagement - By Christophe

## Installation

Clone this project, then:

```bash
https://github.com/guidoAlreadyToken/citizen-management-app.git
cd citizen-management-app
npm install
cordova prepare
```

You must also put the configuration file in place the first time:

```bash
cp src/app/config.sample.ts src/app/config.ts
```

Fill in appropriate values in `src/app/config.ts`.



## Usage

Run in development mode in the browser with:

```bash
cd citizen-management-app
ionic serve
```


Run on Iphone phone with Ionic DevApp:

```bash
cd citizen-management-app
ionic serve -c
```

Use the App:

```bash
REGISTER

1) Create an account by using the "SIGN IN" button. Fill the forms as asked.
2) You get redirect to "Log IN" page.
3) Log in to use the app.

SIGNAL AN ISSUE
1) Go to the page "CREATE ISSUE", by default it's the landing page once your logged in.
2) Choose a type of problem that you want to share.
3) Add a small description.
4) Add some tags.
5) Take a picture of your issue.
6) Choose to keep the picture or take a other one.
7) You get redirect to your new issue soon as she is register.

LOOKING FOR ISSUE ON THE MAP
1) Open the "ISSUE MAP" page.
2) The map is automatically centered on your current position.

TAKING A CLOSER LOOK TO ISSUES
1) Open the "ISSUE LIST" page
2) Choose an issue and click on "Go to details" button to show more infos.
3) Add a comment if you want.

LOG OUT
1) Click on the "lock out" icon on the top-right of your screen.
```