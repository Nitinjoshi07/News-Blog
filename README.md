# React Dashboard Application

This is a React-based dashboard application with sidebar navigation, data visualization, and authentication capabilities. The project includes key features like dynamic routing using `react-router-dom` and responsive UI components.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)
- [Routing](#routing)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Dynamic Routing**: Powered by `react-router-dom` for seamless navigation.
- **Responsive Sidebar**: Expandable/collapsible sidebar for better user experience.
- **Interactive Dashboard**: Displays charts and analytics using the `recharts` library.
- **Authentication UI**: Login page with form validation.
- **Custom Components**: Reusable components for easy scalability.

## Technologies Used
- **React**: Frontend framework.
- **react-router-dom**: Routing management.
- **recharts**: Data visualization.
- **Tailwind CSS**: Styling framework for responsive design.
- **React Icons**: Icon library.

## Setup Instructions
### Prerequisites
Make sure you have the following installed:
- Node.js (v14+)
- npm or yarn

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dashboard-app.git
   cd dashboard-app
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

### Build for Production
To create a production-ready build:
```bash
npm run build
# or
yarn build
```
The build files will be located in the `build/` folder.

## Folder Structure
```
src/
├── components/
│   ├── Header.js
│   ├── Sidebar.js
│   └── Login.js
├── pages/
│   ├── Dashboard.js
│   ├── Home.js
│   ├── NewsAnalytics.js
│   ├── Report.js
│   ├── Payout.js
│   └── Export.js
├── App.js
├── index.js
├── Dashboard.css
└── ...
```

## Routing
The application uses `react-router-dom` for routing. Below are the routes configured:
- `/`: Home page with analytics and charts.
- `/news-analytics`: News Analytics page.
- `/report`: Reports section.
- `/payout`: Payout management.
- `/export`: Export data page.
- `/login`: Login page for user authentication.

## Troubleshooting
### Common Issues
#### 1. **Error: `You cannot render a <Router> inside another <Router>.`**
   Ensure that the `Router` component is only rendered at the top level in `index.js`. Do not nest `Router` components.

#### 2. **Warning: `No routes matched location`**
   Update parent `<Route path="/">` to `<Route path="*">` to ensure child routes render correctly.

#### 3. **Styling Issues**
   Ensure Tailwind CSS is configured properly in your project. Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) if needed.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```
4. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

Happy coding!

