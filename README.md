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