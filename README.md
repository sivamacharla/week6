# Web Development Project 5 - Dashboard

Submitted by: **Siva Macharla**

This web app: A React dashboard app that fetches and displays data about different dog breeds using TheDogAPI. Users can search and filter through the dog breeds and view key statistics about the breeds shown.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique dog breeds, one per row
  - Each row includes at least two features: breed name and temperament
- [x] **`useEffect` React hook and `async`/`await` are used** to fetch data
- [x] **The app dashboard includes at least three summary statistics about the data**
  - Total number of dog breeds displayed
  - Average weight of the displayed breeds
  - Distribution of breeds by country of origin
- [x] **A search bar allows the user to search for a dog breed by name**
  - The search bar correctly filters breeds, displaying only matching results
  - The results update dynamically as the user types
- [x] **An additional filter allows the user to restrict breeds by temperament**
  - The temperament filter uses a dropdown selection
  - The filter correctly updates the dashboard to only show breeds matching the selected temperament

The following **optional** features are implemented:

- [ ] Multiple filters can be applied simultaneously (search + temperament filter)
- [ ] Filters use different input types (text input for search, dropdown for temperament)
- [ ] The user can enter specific bounds for filter values (not implemented)

The following **additional** features are implemented:

- [ ] Responsive design for mobile and desktop viewing
- [ ] Loading spinner displayed while data is being fetched

## Video Walkthrough

Here's a walkthrough of implemented user stories:

https://submissions.us-east-1.linodeobjects.com/web102/SMdeNpHQ.gif

GIF created with:  
[Kap](https://getkap.co/) for macOS

## Notes

Challenges included understanding how to use TheDogAPI's breed data effectively and managing filtering state between search and dropdown filters. Additionally, ensuring the app was responsive on different screen sizes required custom CSS adjustments.

## License

