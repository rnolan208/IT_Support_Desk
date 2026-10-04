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
        id: "TKT-1005",
        issue: "Account locked",
        requester: "Lisa K.",
        priority: "High",
        status: "In Progress",
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

        table.append(row);

    });
}

renderTickets(supportTickets);


const cardsOpen = document.getElementById("open-card");
const cardsProgress = document.getElementById("progress-card");
const cardsResolved = document.getElementById("resolved-card");


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

applyFilters();


