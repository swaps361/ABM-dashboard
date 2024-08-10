document.addEventListener("DOMContentLoaded", () => {
    const accounts = [
        { name: "Company A", industry: "Tech", status: "Active", logo: "assets/company-a-logo.png" },
        { name: "Company B", industry: "Finance", status: "Prospect", logo: "assets/company-b-logo.png" },
    ];

    const accountList = document.getElementById("account-list");

    accounts.forEach(account => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = account.logo;
        img.alt = `${account.name} Logo`;
        img.className = "company-logo";

        const text = document.createElement("span");
        text.textContent = `${account.name} (${account.industry}) - ${account.status}`;

        li.appendChild(img);
        li.appendChild(text);
        accountList.appendChild(li);
    });
});
