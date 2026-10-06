const supportTickets = [
    {
        id: "TKT-1001",
        issue: "Printer unavailable",
        requester: "Mike H.",
        priority: "Low",
        status: "Open",
        updated: "-"
    },
    {
        id: "TKT-1003",
        issue: "Software installation",
        requester: "Mark S.",
        priority: "Medium",
        status: "Resolved",
        updated: "-"
    },
    {
        id: "TKT-1004",
        issue: "Computer Screen Blue",
        requester: "Sean M.",
        priority: "Critical",
        status: "Open",
        updated: "-"
    },
    {
        id: "TKT-1005",
        issue: "Account locked",
        requester: "Lisa K.",
        priority: "High",
        status: "In Progress",
        updated: "-"
    },
]

const table = document.getElementById("table-body")


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

        const actionCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener( "click", function () {

            ticketBeingEdited = ticket;
            
            editTicketStatus.value = ticket.status;

            editTicketId.textContent = ticket.id;
            editTicketIssue.textContent = ticket.issue;
            
            editTicketDialog.showModal();
        })

        actionCell.append(editButton);
        row.append(actionCell);


        table.append(row);

    });
}

renderTickets(supportTickets);


const cardsOpen = document.getElementById("open-card");
const cardsProgress = document.getElementById("progress-card");
const cardsResolved = document.getElementById("resolved-card");


function updateDashboard() {

    const openTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "Open"
    });

    cardsOpen.textContent = openTickets.length;

    const progressTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "In Progress"
    });

    cardsProgress.textContent = progressTickets.length;

    const resolvedTickets = supportTickets.filter(function (ticket) {
        return ticket.status === "Resolved"
    });

    cardsResolved.textContent = resolvedTickets.length;

}


const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    applyFilters();
});

const statusFilter = document.getElementById("statuses");

statusFilter.addEventListener("change", function () {

    applyFilters();

});

const priorityFilter = document.getElementById("priority");

priorityFilter.addEventListener("change", function () {

    applyFilters();

});


function applyFilters() {
    const selectedStatus = statusFilter.value;
    const selectedPriority = priorityFilter.value;
    const searchTerm = searchInput.value.toLowerCase();


    const filteredTickets = supportTickets.filter(function (ticket) {
        const matchesStatus = selectedStatus === "all-statuses" || ticket.status === selectedStatus;

        const matchesPriority = selectedPriority === "all-priorities" || ticket.priority === selectedPriority;

        const matchesSearch =
            ticket.issue.toLowerCase().includes(searchTerm) ||
            ticket.requester.toLowerCase().includes(searchTerm) ||
            ticket.id.toLowerCase().includes(searchTerm);

        return matchesStatus && matchesPriority && matchesSearch;
    });

    renderTickets(filteredTickets);
}

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

let nextTicketNumber = 1006;
let ticketBeingEdited = null;


createNewTicket.addEventListener("click", function () {

    newTicketDialog.showModal();

});

cancelTicket.addEventListener("click", function () {
    newTicketDialog.close();
}
);

cancelEditTicket.addEventListener("click", function () {
    editTicketDialog.close();
});


newTicketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const newTicket = {
        issue: ticketIssue.value,
        requester: ticketRequester.value,
        priority: ticketPriority.value,
        id: `TKT-${nextTicketNumber}`,
        status: "Open",
        updated: "-"
    };


    supportTickets.push(newTicket)
    nextTicketNumber++;
    applyFilters();
    newTicketForm.reset();
    newTicketDialog.close();
    updateDashboard();
});

editTicketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    ticketBeingEdited.status = editTicketStatus.value;
    ticketBeingEdited.updated = new Date().toLocaleDateString();

    applyFilters();
    editTicketDialog.close();
    updateDashboard();
    
});

applyFilters();

updateDashboard();


