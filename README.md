News Dashboard
A modern and responsive news dashboard built using React. It fetches the latest news articles via the News API and displays them in a grid layout. Users can filter news articles by category, and export the summary of news in a downloadable PDF format.

Features
Fetches the latest news articles from an API.
Categorize and filter news articles by topic.
Display news articles in a responsive grid layout.
Export news details (title, description, etc.) as a PDF file.
Dark and light mode support.
Technologies Used
React: Frontend library for building the UI.
Tailwind CSS: Utility-first CSS framework for styling.
News API: To fetch the latest news articles.
jsPDF: For exporting news summaries as a PDF.
React Router: For managing routing between different sections (optional based on your app needs).
Prerequisites
Before getting started, make sure you have the following installed:

Node.js (>=14.x)
npm
You will also need an API key from NewsAPI.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/news-dashboard.git
cd news-dashboard
Install dependencies:
bash
Copy code
npm install
Set up environment variables:
Create a .env file at the root of the project and add your NewsAPI key:

makefile
Copy code
REACT_APP_NEWS_API_KEY=your_api_key_here
Start the development server:
bash
Copy code
npm start
This will start the app on http://localhost:3000.

File Structure
bash
Copy code
/src
  /components
    - Header.jsx          # Header component with site title and introductory text
    - NewsAnalytics.jsx   # Displays the news articles and handles API requests
    - Filter.jsx          # Filter to select categories for news
    - Export.jsx          # Handles exporting the news as a PDF
  App.js                  # Main application file
  index.js                # Entry point of the app
  tailwind.config.js      # Tailwind CSS configuration
  /assets
    - default-news.jpg    # Default image for news articles
  .env                    # Environment variables
  package.json            # Project metadata and dependencies
Components
Header.jsx: Displays the main heading and description of the dashboard.
NewsAnalytics.jsx: Fetches the latest news from the News API and displays the articles in a grid. Includes loading skeletons when news are being fetched.
Filter.jsx: A search and category filter bar that allows users to filter news based on categories.
Export.jsx: Allows the user to export the current news summary as a PDF.
Tailwind CSS Configuration
Tailwind CSS is used for styling the components. You can customize the colors and layouts by modifying the tailwind.config.js file.

How to Use
View Latest News:

The dashboard displays the latest news articles in a grid layout. You can scroll through the articles and view details.
Search for Specific Categories:

You can search for specific news topics by selecting categories from the filter at the top of the page.
Export News Summary:

Click the "Export as PDF" button in the "Export" section to download a PDF summary of the latest news articles.
Dark and Light Mode:

The dashboard supports both light and dark themes. The theme switches automatically based on your system preference.
Screenshots
Desktop View

Mobile View

Contribution
Feel free to fork this project and make contributions. To contribute, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make changes and commit them (git commit -m 'Add feature').
Push to your forked repository (git push origin feature-name).
Create a pull request.
