# Themeal

**themeal** is a web application that empowers users to explore a variety of dishes, access detailed information about each dish, and watch video recipes on YouTube.

## Key Features

- **Dish Search:** Users can enter a query in the search field to receive a list of dishes that match their search criteria.
- **Detailed Information:** Clicking on a dish in the list provides comprehensive details, including the dish's name, category, area, and an image.
- **Watch on YouTube:** If a video recipe is available on YouTube, users can navigate to the YouTube page by clicking the "Watch on YouTube" button.

## Getting Started

1. **Install Dependencies:**
   Ensure that you have Node.js installed. Run the following commands in the project's root directory:

```bash
   npm install
```
2. **Run the Application:**
   After installing dependencies, start the application with the following command:

```bash
  npm start
```

### The application will be accessible at http://localhost:3000/.

## Technologies

- React: Utilized for building the user interface and interacting with the API.
- Redux: Manages global state within the application.
- React Router: Facilitates navigation between pages.
- Axios: Executes HTTP requests to interact with the API.

## Project Structure

- src/components: Houses React components, including dish search, dish list display, etc.
- src/redux: Contains Redux logic, including actions, reducers, and selectors.
- src/utils: Includes helper utilities, such as functions for data processing.

## Additional Information

- API: Dish data is sourced from [TheMealDB API](https://www.themealdb.com/api.php), providing information about recipes.
- YouTube API: To access the YouTube page, [YouTube API]() is utilized for searching video instructions.

## Author

Pranov Adilet

## License

This project is licensed under the MIT License.
