# React-Evaluation-June

# Using the following tools and technologies: 
- useState
- useContext 
- useEffect 
- useRef
- Chakra UI
- React Router
- Axios

your task is to build a web application with the following features:

# Task 1

The web application should have multiple pages:
- Login Page
- Home Page
- Product Details Page

# Task 2

  The web application makes use of context API to manage authentication state. The initial/default state should be { isAuthenticated: false, token: null, email: null }.

# Task 3

  The Navbar should be visible on all pages and have the following features:

When the user is authenticated/logged-in:

Display the logged-in user's email on the left side of the navbar.
Display a link to the Home Page on the right side.
Include a LOGOUT button beside the Home Page link that logs out the user and redirects to the login page when clicked.
When the user is not authenticated/logged-out:

Display a link to the Login Page only.

#  Task 4

All pages except the Login Page should be accessible only to logged-in users. If a user is not logged in, they should be redirected to the Login Page. This means that only the Login Page is a public route, while all other pages are private routes.

# Task 5

Login Page: This page should contain the following elements:

An input box for email (focus should be on this input box as soon as the page loads).
An input box for password.
A login button that makes a POST request to the login API endpoint API Docs. If the request is successful, it will redirect to the Home Page. If the request is unsuccessful, it will display an error message. The successful response returns a token, which can be saved in the AuthContext. Maintain a context to keep track of isLoggedIn, token, and email.

# task 6

under Home page work
home page product 

all product showing in the console 


for checking credential
# ID :  eve.holt@reqres.in
# Password : cituslicka


