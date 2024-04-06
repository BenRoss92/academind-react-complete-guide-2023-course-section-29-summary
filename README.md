# Summary section (Section 29) of Academind React Complete Guide 2023 course

Course: https://www.udemy.com/course/react-the-complete-guide-incl-redux/

## To dos

- Add the ability to navigate to the new post modal when visiting the URL '/create-post'
  - INFO: Will be using React Router to do client-side routing (instead of server-side routing), to not have to do full page reloads when navigating to different parts of the UI. Also allows us to deep-link to a part of the UI when sharing links to our single page application/website.
  - DONE: Install React Router
  - DONE: Display the root path/homepage as it currently looks by using React Router
  - DONE: Try to display the New Post component using React Router for the '/create-post' route - with the following being temporarily broken: cancelling, closing or submitting new post form 
    - DONE: Make every route display the main navigation header at the top of the page - i.e. the MainHeader component - as that header is not being shown on the '/create-post' route by default (that component is currently missing)
    - DONE: Given I'm on the root URL (homepage), When I click the 'New Post' button, Then I should be taken to the '/create-post' URL, And the New Post modal should be displayed
    - DONE: Fix cancelling the New Post form - close the modal by using a React Router Link to go back to the root route ('/').
    - Fix closing the New Post form by clicking outside of the modal
    - DONE: Create a '/routes' folder and add each route component that you're creating into this folder
    - Refactor components - It seemed like the author refactored some of the components to make them easier to swap out/more separate from each other + remove any code we don't need anymore