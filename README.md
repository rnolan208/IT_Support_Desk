# IT Support Desk

A browser-based IT support ticket management application built with HTML, CSS and JavaScript.

🔗 **Live Demo:** https://rnolan208.github.io/IT_Support_Desk/

## Overview

IT Support Desk is a completed front-end CRUD portfolio project that simulates a simple support ticket management workflow. It was built to strengthen practical JavaScript arrays, objects, DOM manipulation, event handling, form validation, and browser storage without frameworks or a backend.

> **Project Status:** In Development

## Current Features

- **Dashboard:** live counts for Open, In Progress and Resolved tickets.
- **Create:** add a support ticket with an automatically generated ID, Open status and creation date.
- **Read:** dynamically render tickets in a table.
- **Update:** change a ticket's status and automatically update its last-modified date.
- **Delete:** remove tickets using a confirmation dialog.
- **Search:** find tickets by ID, issue or requester.
- **Filters:** filter by priority and status, individually or alongside search.
- **Persistence:** save ticket changes in the visitor's browser using `localStorage`.

## Technologies Used

HTML5, CSS3, JavaScript, Git, GitHub and GitHub Pages.

## How It Works

The app starts with sample ticket objects. If tickets are already saved in the visitor's browser, those saved tickets are loaded instead. JavaScript renders the table, calculates dashboard totals and applies search and filter criteria. Creating, editing or deleting a ticket updates the array, saves it to `localStorage`, and refreshes the relevant interface elements.

**Storage note:** Data is local to each visitor's browser and site origin. Tickets are not shared between users or stored on a server. Clearing the site's browser storage resets the demo to its initial sample tickets. Ticket numbers are generated from the highest currently stored ticket ID, so a deleted highest ID can be reused after a refresh.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/rnolan208/IT_Support_Desk.git
```

Navigate to the project:

```bash
cd IT_Support_Desk
```

Open `index.html` in a browser. No installation or build step is required. For consistent browser-storage behaviour, you can also serve the folder using a simple local development server.

## Project Structure

```text
IT_Support_Desk/
│
├── css/
│   └── styles.css
│
├── js/
│   └── app.js
│
├── index.html
└── README.md
```

## Skills Demonstrated

- JavaScript fundamentals
- Working with arrays and objects
- DOM manipulation
- Event handling
- Form handling and validation
- Dynamic UI rendering
- Search and filtering logic
- CRUD application development
- HTML semantic structure
- CSS layout and styling
- Git and GitHub version control
- GitHub Pages deployment
- Debugging and problem solving

## Author

**Robert Nolan**

Software Development Graduate  
Ireland