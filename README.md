# IT Support Desk

A browser-based IT support ticket management application built with HTML, CSS and JavaScript.

🔗 **Live Demo:** https://rnolan208.github.io/IT_Support_Desk/

## Overview

IT Support Desk is a front-end CRUD application designed to simulate a simple support ticket management system.

The project allows support tickets to be displayed, searched and filtered, with functionality being developed for creating, updating and managing tickets.

This project was built to strengthen my practical JavaScript skills, particularly working with arrays, objects, DOM manipulation, event handling, forms and dynamic user interfaces.

> **Project Status:** In Development

## Current Features

- Support ticket dashboard
- Open, In Progress and Resolved ticket counts
- Dynamic ticket rendering from JavaScript data
- Search tickets by ID, issue or requester
- Filter tickets by priority
- Filter tickets by status
- Combine search, priority and status filters
- Create new support tickets through a modal form
- Automatic ticket ID generation
- New tickets automatically assigned an Open status
- Form validation using required fields
- Responsive browser-based interface
- Update, Edit, Resolve, and Manage ticket status

## Planned Features

- Persistent ticket data using browser storage
- Additional validation and usability improvements

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## How It Works

Ticket data is stored as JavaScript objects within an array.

The application dynamically renders these tickets into the interface using DOM manipulation. Search and filter controls operate on the ticket data and re-render the matching results.

New tickets can be created using the **New Ticket** form. Each ticket contains:

- Ticket ID
- Issue
- Requester
- Priority
- Status
- Last updated value

New tickets are automatically assigned an **Open** status and a unique ticket number.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/rnolan208/IT_Support_Desk.git
```

Navigate to the project:

```bash
cd IT_Support_Desk
```

Open `index.html` in your browser.

No dependencies or installation are required.

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

## Development

This project is actively being developed. Additional CRUD functionality and UI improvements will be added as development continues.

Changes pushed to the main branch are automatically deployed to the live application using GitHub Pages.

## Author

**Robert Nolan**

Software Development Graduate  
Ireland