# BlogFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project setup

Clone the repository:

```bash
git clone https://github.com/akashelhance/angular-blog.git
cd angular-blog
```

```bash
$ npm install

```

### Flow:

*   **User Action:** The user navigates to the login page and clicks on the "Sign in with Google" button.
    
*   **Redirection:** The user is redirected to the Google login page.
    
*   **Credentials Entry:** The user enters their Google credentials (email and password) and grants the application permission to access their Google account.
    
*   **Redirection Back to Application:** After successful authentication, the user is redirected back to the application.
    
*   **Login Success:** The user is now logged into the application, and their session is initialized.
    

### Components:

*   **LoginPageComponent:** This component handles the rendering of the login page, including the "Sign in with Google" button.
    
*   **AuthService:** This service manages the authentication process with Google using OAuth2.0 or Firebase Authentication (depending on your setup).
    
*   **GoogleLoginService:** This service interacts with Google's authentication API to handle user sign-in.
    

### Key Angular Features:

*   **Angular Router:** Used for navigating between pages, such as from the login page to the dashboard.
    
*   **Google OAuth2.0 Integration:** Implemented either via Firebase Authentication or a custom OAuth2.0 service to facilitate user sign-in.
    

2\. **Navigating to Create Post Page**
--------------------------------------

### Flow:

*   **User Action:** After successfully logging in, the user clicks the "Create Post" button in the dashboard.
    
*   **Navigation:** The user is redirected to the "Create Post" page.
    

### Components:

*   **DashboardComponent:** Displays the list of posts and includes the "Create Post" button, which triggers navigation to the create post page.
    
*   **CreatePostComponent:** This component contains a form for entering the title and body of the post.
    

### Key Angular Features:

*   **Angular Router:** Used for navigating between the dashboard and the create post pages.
    

3\. **Creating a Post**
-----------------------

### Flow:

*   **User Action:** The user enters the title and body of the post in the form fields.
    
*   **Post Creation:** The user clicks the "Create" button.
    
*   **Backend Communication:** The post details are sent to the backend API using HttpClient.
    
*   **Post Added:** Once the post is successfully created on the server, the post is added to the list of posts displayed in the dashboard.
    

### Components:

*   **CreatePostComponent:** Contains form fields for the title and body, along with a submit button.
    
*   **PostService:** Handles sending the post data to the backend API and updates the UI accordingly.
    
*   **Backend API:** A RESTful API that handles creating new posts.
    

### Key Angular Features:

*   **Angular Forms:** Used to handle form fields for the title and body of the post.
    
*   **HttpClient:** Used for making HTTP POST requests to create a new post in the backend.
    

4\. **Navigating to Post Detail Page**
--------------------------------------

### Flow:

*   **User Action:** The user clicks on a post in the dashboard to view its details.
    
*   **Navigation:** The user is redirected to the post detail page.
    

### Components:

*   **DashboardComponent:** Displays the list of posts and handles navigation to individual post details.
    
*   **PostDetailComponent:** Displays the title and body of the selected post.
    

### Key Angular Features:

*   **Angular Router:** Used for navigating to the post detail page.
    

5\. **Viewing Post Details**
----------------------------

### Flow:

*   **User Action:** The user is now on the post detail page, where the title and body of the post are displayed.
    
*   **Post Display:** The post's title and body are rendered in the PostDetailComponent.
    

### Components:

*   **PostDetailComponent:** Displays the title and body of the selected post.
    

### Key Angular Features:

*   **Angular Router:** Used to dynamically load the selected post based on the URL parameters (e.g., post ID).
    
*   **ActivatedRoute:** Used to extract the post ID from the URL and fetch the corresponding post from the backend API.
    

### API Communication:

*   For both creating and fetching posts, communication with the backend API is required. The PostService should handle all interactions with the backend using HttpClient.