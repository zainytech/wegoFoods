# Wego Task Documentation

## Overview

This project involved creating a web application using Next.js, TypeScript, HTML, JSX, and Modular CSS. The application includes features such as a search input, a navigation bar, and food cards. The project has been designed to be responsive and is fully functional. Test cases have been written to ensure the correctness of components and functionality.

## Project Features

- *Homepage*: Displays a list of food items with options to filter by category, search by hotel name, and show more items.
- *Search Input*: Allows users to filter food items based on the search query.
- *Navbar*: Enables users to select different categories to filter food items.
- *Food Cards*: Show food details including the hotel name, image, stars, and time.
- *Spinner*: To show a loading spiner while the data is being fetched.

## Technology Stack

- *Next.js*: React framework for server-side rendering and static site generation.
- *TypeScript*: Provides type safety for better code quality.
- *HTML*: Markup language for structuring content.
- *JSX*: JavaScript syntax extension for writing HTML within JavaScript.
- *Modular CSS*: Modular Stylesheet language for styling the specific component so that class names don’t get messed up.

## Issue

- *API Errors*: The provided APIs returned 404 errors, possibly due to expired links.
  - *Solution*: Mocked the API data using a JSON file to simulate real data and ensure functionality.
- *Updated API Endpoints*: The issue of broken api endpoints and wrong image urls got resolved and now the data is being fetched from live api endpoints.

## Live Demo
[Link to Live Demo](https://wego-two.vercel.app/) – A live version of the application demonstrating its functionality.

## Documentation

### Code Structure

- components/ – Contains reusable components like SearchInput, Navbar, and FoodCard.
- app/ – Contains the main page and other route handlers.
- api/ - Contains the endpoints where the data is being fetched from APIs.
- public/ – Includes static assets like images and JSON data of food items.
- No store like Zustand is being used because, from the details of the task, I guessed you wanted to check my basics that’s why I used props drilling to send props.

### Test Cases

Test cases are written using Jest to ensure the correct rendering and functionality of components.

## Conclusion

The project meets the requirements and functionalities as specified. The issues with API endpoints were resolved and now the data is being fetched from endpoints instead of mocked json file. The application has been manually as well as automatically tested thoroughly to ensure its reliability.

---

*Name:* Zainab Rasheed
