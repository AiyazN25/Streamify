Start the json server: json-server --watch db.json

Start the React dev server to launch the app: npm start

This app uses the CoreUI React Admin Dashboard Template to build out the app
https://coreui.io/themes-templates/admin-dashboard/react/

A single API call to a single metrics endpoint is made to retrieve all metrics because
-the data is small everywhere (static numbers, or constant-size arrays, or array of size 10-30) so can just quickly load all up front in one network request w/o worrying about having to load parts of the app at a time in smaller multiple network calls
-there’s not much isolated refreshes required, if it needs to be updated in one place (eg: the artist with most streams in past 30 days) it means other parts most likely also need a refresh (eg: top 5 streamed songs over past 30 days )
-data needed for components to be rendered simultaneously, like the bar chart data because it needs to be clicked on to filter the data table
-Added benefit: the FE becomes easier to write: no redundant network requests or checks to see if data got cached already
