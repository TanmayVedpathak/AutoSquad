# AutoSquad

##Intro

Introducing AutoSquad, the innovative car rental app meticulously crafted with React JS and polished with the sleek styling of Tailwind CSS. Harnessing the power of a third-party API, Cars by API_Ninjas delivers instant details on fuel efficiency, manufacturing year, make, and model with a simple query.

##Preview

![Test Image 3](/screenshot/Screenshot.png)

##Get Started

After cloning the code

Go to [Rapidapi website](https://rapidapi.com/hub) to get different api's. The api used in this project are [Cars by API-Ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas/) for getting the details about the cars.

Subscribe to the above api and get the api key and other information.

Create a .env file in your root directory of your folder and add the keys generated from the api in the below variables

```sh
    VITE_RAPIDAPI_KEY =  ""
```
##Development

Run the following command to install the app.

```sh
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

or 

```sh
    yarn install
    yarn add -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

Run the following command to run the app

```sh
    npm run dev
```

or

```sh
    yarn dev
```
