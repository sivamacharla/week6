#  Dog Breed Dashboard (Project 5 - Web Development)

**Submitted by:** Siva Macharla  
**Time Spent:** 10 hours

This is a React-based dashboard web application that fetches and displays data about various dog breeds using [TheDogAPI](https://thedogapi.com). Users can search, filter, and explore different breeds, view their characteristics, and see key summary statistics and visualizations.

---

##  Features

###  Required Features

- **Data Dashboard**:  
  - Fetches and displays a list of at least **10 unique dog breeds**
  - Each breed card shows:
    -  **Name**
    -  **Temperament**
    -  **Weight**
    -  **Origin**

- **API Integration**:
  - Uses `useEffect` and `async/await` for fetching breed data from TheDogAPI.

- **Summary Statistics**:
  -  Total breeds displayed
  -  Average breed weight (in kg)
  -  Breed count by group (or country of origin)

- **Search Functionality**:
  - Real-time filtering of breeds by name using a search bar

- **Filter by Temperament**:
  - Dropdown to filter breeds by temperament
  - Dashboard updates accordingly

---

###  Additional Features

-  **Data Visualizations**:
  - Bar chart showing distribution of breeds by breed group
  - Life span chart for visual reference (Recharts)

-  **Component-Based Architecture**:
  - Clean folder structure with reusable components (BreedList, Summary, Charts, Detail View, etc.)

-  **Routing**:
  - `react-router-dom` used to navigate between breed list and individual breed detail pages

-  **CSS Styling**:
  - Modern UI using custom styles for cards, charts, and summaries
  - Subtle hover effects, layout responsiveness, and theming

---

##  Optional Features (Not Implemented)

- Simultaneous multi-filtering (e.g. combining temperament + weight + search)
- Range sliders for weight/life span filtering
- Full mobile responsiveness

---

##  Video Walkthrough

https://submissions.us-east-1.linodeobjects.com/web102/T861Xqqx.gif

---

##  Challenges

- Handling breeds with incomplete or missing data (null weights, no temperament, etc.)
- Building dynamic filters for non-uniform data (e.g., multiple temperaments per breed)
- Managing the shared filter state cleanly between components

---

##  Technologies Used

- React
- React Router
- Recharts (for data visualization)
- TheDogAPI
- Vite
- CSS (custom styling)

---

##  License

This project is licensed for educational use.  
© 2025 Siva Macharla. All rights reserved.
