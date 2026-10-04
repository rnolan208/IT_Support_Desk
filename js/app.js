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
    }
]

const table = document.getElementById("table-body")

console.log(table);


supportTickets.forEach(function(ticket) {

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

    console.log(row);


});




