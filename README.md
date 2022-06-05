# Frontend
Technologies used:

*We set ternary operators to based on buttons presses and states to determine when components would either be displayed or hidden.

NewBeach component: Used state to toggle the form in which users could create a brand new beach. The submit button sends an axios call to our backend and creates a brand new object.

showBeach component: We do an axios call to retrieve our updated database on page load and we then map through that data to display all beaches on the page, contained in a parent flex box. Each child div has an edit and remove function. By setting a state for ID, we are able to only toggle 1 form at a time.

showPage component: When the user  clicks on an image the data for that beach is saved as its own state. We then call on the state to render a show page specific to the beach they clicked on. on this page the user can cycle through all images in the image carousel. JavaScript logic allows the carousel to cycle forward and backwards, endlessly. The use can also add an image by inserting a link. This added image will be displayed in the carousel. The user can also click "delete current photo" which will delete the image that is currently displayed. both the add photo and delete photo buttons are using states to be updated. Users can add and delete comments, which functions similar to add/delete photos. The comments are displayed at the bottom of the page using a map. Lastly, the back bottom at the top of the page returns users to the showBeach page.

project links:
https://mysterious-meadow-36213.herokuapp.com/ - backend
https://rocky-cliffs-95431.herokuapp.com/ - frontend
