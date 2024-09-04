# To-Do List Application with Local Storage

A simple and responsive to-do list application built using HTML, CSS, and JavaScript. This application uses the browser's local storage to save tasks, ensuring that the to-do list remains persistent even after the page is refreshed.

## Features

- Add new tasks
- Delete tasks
- Mark tasks as complete or incomplete
- Tasks persist across page reloads using local storage
- Responsive design for both desktop and mobile screens

## Technologies Used

- **HTML**: Structure of the application
- **CSS**: For styling the to-do list and making it responsive
- **JavaScript**: Application logic for managing tasks and storing data in local storage

## How to Run

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/To-Do-list-Offline-.git
    ```

2. Navigate into the project directory:

    ```bash
    cd To-Do-list-Offline-
    ```

3. Open the `todo.html` file in your web browser:

    - You can double-click the `todo.html` file in your project directory.
    - Alternatively, you can run a local server by using tools like `Live Server` in Visual Studio Code or other methods.

## Usage

- Type a task into the input field and click the "Add Task" button (or press Enter) to add it to the list.
- To mark a task as complete, click the "Complete" button. This will strike through the task and change its background color.
- To revert a completed task back to incomplete, click the "Undo" button.
- To delete a task, click the "Delete" button.
- All tasks are saved in the browser's local storage, so they will be available even if the page is refreshed or the browser is closed.

## File Structure

```plaintext
To-Do-list-Offline-/
│
├── todo.html        # The main HTML file that contains the structure of the application
├── styles.css        # The CSS file for styling the application
└── script.js         # The JavaScript file containing logic for adding, deleting, and completing tasks
