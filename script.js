/* Inside script.js */

// 1. Add 'email' to your data
const debtors = [
    {
        name: "Maruch Mešter",
        email: "mestemar@fel.cvut.cz",
        amount: "276,-",
        excuse: "Doesn't know about it...",
        status: "GHOSTING"
    },
    {
        name: "Karel Zimmermann",
        email: "zimmerk@fel.cvut.cz",
        amount: "276,-",
        excuse: "To much work, maybe??",
        status: "PENDING"
    },
    {
        name: "Tomáš Petříček",
        email: "tpetricek@gmail.com",
        amount: "276,-",
        excuse: "Probably doesn't know about it...",
        status: "GHOSTING"
    },
    {
        name: "Valentín Číhala",
        email: "cihalval@fel.cvut.cz",
        amount: "276,-",
        excuse: "I have a dog and 3D printer, probably.",
        status: "NOT WORKING"
    }
];

function renderList(data) {
    const tbody = document.getElementById('shameList');
    tbody.innerHTML = '';

    data.forEach(person => {
        const row = document.createElement('tr');
        
        // 2. We construct a dynamic email subject and body here
        // encodeURIComponent ensures spaces and special characters work in the URL
        const subject = encodeURIComponent(`The ${person.amount} you owe Aleš`);
        const body = encodeURIComponent(
            `Hey ${person.name},\n\n` + 
            `Is this a bad time to remind you about the ${person.amount}?\n` +
            `Current Status: ${person.status}\n\n` +
            `Please fix this so I he can remove you from the Wall of Shame.\n`
        );

        // 3. Create the mailto link
        const mailLink = `mailto:${person.email}?subject=${subject}&body=${body}`;

        row.innerHTML = `
            <td><strong>${person.name}</strong></td>
            <td style="font-family: monospace;">${person.amount}</td>
            <td><em>"${person.excuse}"</em></td>
            <td><span class="status-badge">${person.status}</span></td>
            <td>
                <!-- This anchor tag opens the email client -->
                <a href="${mailLink}" class="btn-shame">
                    Spam Debtor 📧
                </a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

function filterList() {
    const searchInput = document.getElementById('searchBox').value.toLowerCase();
    const filtered = debtors.filter(person => 
        person.name.toLowerCase().includes(searchInput) || 
        person.excuse.toLowerCase().includes(searchInput)
    );
    renderList(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderList(debtors);
});
