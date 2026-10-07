// ========================================
// Starting Ticket Data
// ========================================

// Default tickets shown when no saved ticket data exists in localStorage.
let supportTickets = [
    {
        id: "TKT-1001",
        issue: "Printer unavailable",
        requester: "Mike H.",
        priority: "Low",
        status: "Open",
        updated: "01/10/2026"
    },
    {
        id: "TKT-1002",
        issue: "Password Reset",
        requester: "Frank McP.",
        priority: "Medium",
        status: "In Progress",
        updated: "02/10/2026"
    },
    {
        id: "TKT-1003",
        issue: "Software installation",
        requester: "Mark S.",
        priority: "Medium",
        status: "Resolved",
        updated: "03/10/2026"
    },
    {
        id: "TKT-1004",
        issue: "Computer Screen Blue",
        requester: "Sean M.",
        priority: "Critical",
        status: "Open",
        updated: "05/10/2026"
    },
    {
        id: "TKT-1005",
        issue: "Account locked",
        requester: "Lisa K.",
        priority: "High",
        status: "In Progress",
        updated: "06/10/2026"
    }
];


// ========================================
// Local Storage
// ========================================

// Check whether this browser already has saved ticket data.
// If it does, replace the default tickets with the saved tickets.
const savedTickets = localStorage.getItem("supportTickets");

if (savedTickets !== null) {
    supportTickets = JSON.parse(savedTickets);
}

// Convert the ticket array to a JSON string and save it in localStorage.
function saveTickets() {
    localStorage.setItem(
        "supportTickets",
        JSON.stringify(supportTickets)
    );
}


// ========================================
// Ticket Table
// ========================================

const table = document.getElementById("table-body");

// Clear the current table and render the tickets passed into the function.
function renderTickets(filteredTickets) {

    table.innerHTML = "";

    filteredTickets.forEach(function (ticket) {

        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = ticket.id;
        row.appendChild(idCell);

        const issueCell = document.createElement("td");
        issueCell.textContent = ticket.issue;
        row.append(issueCell);

        const requesterCell = document.createElement("td");
        requesterCell.textContent = ticket.requester;
        row.append(requesterCell);

        const priorityCell = document.createElement("td");
        priorityCell.textContent = ticket.priority;
        row.append(priorityCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = ticket.status;
        row.append(statusCell);

        const updatedCell = document.createElement("td");
        updatedCell.textContent = ticket.updated;
        row.append(updatedCell);

        // Create the Edit and Delete buttons for this ticket.
        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        actionCell.classList.add("action-buttons");
        editButton.classList.add("edit-button");
        deleteButton.classList.add("delete-button");

        // Store the selected ticket and open the Edit dialog.
        editButton.addEventListener("click", function () {

            ticketBeingEdited = ticket;

            editTicketStatus.value = ticket.status;
            editTicketId.textContent = ticket.id;
            editTicketIssue.textContent = ticket.issue;

            editTicketDialog.showModal();
        });

        // Store the selected ticket and open the Delete confirmation dialog.
        deleteButton.addEventListener("click", function () {

            ticketBeingDeleted = ticket;

            deleteTicketId.textContent = ticket.id;
            deleteTicketDialog.showModal();
        });

        actionCell.append(editButton);
        actionCell.append(deleteButton);
        row.append(actionCell);

        table.append(row);
    });
}


// ========================================
// Dashboard
// ========================================

const cardsOpen = document.getElementById("open-card");
const cardsProgress = document.getElementById("progress-card");
const cardsResolved = document.getElementById("resolved-card");

// Count tickets by status and display the totals in the dashboard cards.
function updateDashboard() {

    const openTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "Open";
    });

    cardsOpen.textContent = openTickets.length;

    const progressTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "In Progress";
    });

    cardsProgress.textContent = progressTickets.length;

    const resolvedTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "Resolved";
    });

    cardsResolved.textContent = resolvedTickets.length;
}


// ========================================
// Search and Filters
// ========================================

const searchInput = document.getElementById("search");
const statusFilter = document.getElementById("statuses");
const priorityFilter = document.getElementById("priority");

// Reapply all filters whenever the search text changes.
searchInput.addEventListener("input", function () {
    applyFilters();
});

// Reapply all filters whenever the selected status changes.
statusFilter.addEventListener("change", function () {
    applyFilters();
});

// Reapply all filters whenever the selected priority changes.
priorityFilter.addEventListener("change", function () {
    applyFilters();
});

// Apply search, status and priority filters together before rendering the table.
function applyFilters() {

    const selectedStatus = statusFilter.value;
    const selectedPriority = priorityFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredTickets = supportTickets.filter(function (ticket) {

        const matchesStatus =
            selectedStatus === "all-statuses" ||
            ticket.status === selectedStatus;

        const matchesPriority =
            selectedPriority === "all-priorities" ||
            ticket.priority === selectedPriority;

        const matchesSearch =
            ticket.issue.toLowerCase().includes(searchTerm) ||
            ticket.requester.toLowerCase().includes(searchTerm) ||
            ticket.id.toLowerCase().includes(searchTerm);

        return matchesStatus && matchesPriority && matchesSearch;
    });

    renderTickets(filteredTickets);
}


// ========================================
// Dialog and Form Elements
// ========================================

const createNewTicket = document.getElementById("new-ticket");

const newTicketDialog = document.getElementById("new-ticket-dialog");
const cancelTicket = document.getElementById("cancel-ticket");
const newTicketForm = document.getElementById("new-ticket-form");
const ticketIssue = document.getElementById("ticket-issue");
const ticketRequester = document.getElementById("ticket-requester");
const ticketPriority = document.getElementById("ticket-priority");

const editTicketDialog = document.getElementById("edit-ticket-dialog");
const editTicketStatus = document.getElementById("edit-ticket-status");
const cancelEditTicket = document.getElementById("cancel-edit-ticket");
const editTicketForm = document.getElementById("edit-ticket-form");
const editTicketId = document.getElementById("ticket-id");
const editTicketIssue = document.getElementById("ticket-issue-edit");

const deleteTicketId = document.getElementById("delete-ticket-id");
const deleteTicketDialog = document.getElementById("delete-ticket-dialog");
const cancelDeleteTicket = document.getElementById("cancel-delete-ticket");
const confirmDeleteTicket = document.getElementById("confirm-delete-ticket");


// ========================================
// Ticket Number Generation
// ========================================

// Extract the numeric part of each ticket ID.
// Example: "TKT-1005" becomes 1005.
const ticketNumbers = supportTickets.map(function (ticket) {
    return Number(ticket.id.replace("TKT-", ""));
});

const highestTicketNumber = Math.max(...ticketNumbers);

let nextTicketNumber;

// Continue numbering after the highest existing ticket.
// If there are no tickets, begin at TKT-1001.
if (ticketNumbers.length > 0) {
    nextTicketNumber = highestTicketNumber + 1;
} else {
    nextTicketNumber = 1001;
}


// ========================================
// Selected Tickets
// ========================================

// Keep track of which ticket is currently being edited or deleted.
let ticketBeingEdited = null;
let ticketBeingDeleted = null;


// ========================================
// Create Ticket
// ========================================

// Open the New Ticket dialog.
createNewTicket.addEventListener("click", function () {
    newTicketDialog.showModal();
});

// Close the New Ticket dialog without creating a ticket.
cancelTicket.addEventListener("click", function () {
    newTicketDialog.close();
});

// Create a new ticket from the form values.
newTicketForm.addEventListener("submit", function (event) {

    // Prevent the form from refreshing the page.
    event.preventDefault();

    const newTicket = {
        issue: ticketIssue.value,
        requester: ticketRequester.value,
        priority: ticketPriority.value,
        id: `TKT-${nextTicketNumber}`,
        status: "Open",
        updated: new Date().toLocaleDateString()
    };

    // Add and save the ticket before updating the interface.
    supportTickets.push(newTicket);
    saveTickets();

    nextTicketNumber++;

    applyFilters();
    newTicketForm.reset();
    newTicketDialog.close();
    updateDashboard();
});


// ========================================
// Edit Ticket
// ========================================

// Close the Edit dialog without making changes.
cancelEditTicket.addEventListener("click", function () {
    editTicketDialog.close();
});

// Save the selected ticket's new status and update date.
editTicketForm.addEventListener("submit", function (event) {

    event.preventDefault();

    ticketBeingEdited.status = editTicketStatus.value;
    ticketBeingEdited.updated = new Date().toLocaleDateString();

    saveTickets();

    applyFilters();
    editTicketDialog.close();
    updateDashboard();
});


// ========================================
// Delete Ticket
// ========================================

// Close the Delete confirmation dialog without deleting the ticket.
cancelDeleteTicket.addEventListener("click", function () {
    deleteTicketDialog.close();
});

// Remove the selected ticket from the array and save the updated data.
confirmDeleteTicket.addEventListener("click", function () {

    const ticketIndex = supportTickets.indexOf(ticketBeingDeleted);

    // Only delete the ticket if it was found in the array.
    if (ticketIndex !== -1) {
        supportTickets.splice(ticketIndex, 1);
        saveTickets();
    }

    applyFilters();
    updateDashboard();
    deleteTicketDialog.close();
});


// ========================================
// Initial Page Load
// ========================================

// Render the tickets and calculate the dashboard totals when the page loads.
applyFilters();
updateDashboard();