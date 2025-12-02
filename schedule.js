 document.addEventListener("DOMContentLoaded", () => {
    // Read schedule.txt
    fetch("schedule.txt")
    .then(response => response.text())
    .then(text => {
        const schedule = parseSchedule(text);
        const html = buildScheduleTable(schedule);
        document.getElementById("schedule-table-wrapper").innerHTML = html;
    })
    .catch(err => {
        console.error("Failed to load schedule.txt:", err);
        document.getElementById("schedule-table-wrapper").innerHTML =
        "<p style='color:red'>Aikataulua ei voitu ladata.</p>";
    });
});

// SAME PARSE + TABLE FUNCTIONS AS BEFORE:

const DAY_ORDER = [
    "Maanantai",
    "Tiistai",
    "Keskiviikko",
    "Torstai",
    "Perjantai",
    "Lauantai",
    "Sunnuntai"
];

function parseSchedule(text) {
    const result = {};
    DAY_ORDER.forEach(d => (result[d] = []));

    const lines = text
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l.length > 0);

    let currentDay = null;

    for (const line of lines) {
    const maybeDay = DAY_ORDER.find(d => d.toLowerCase() === line.toLowerCase());
    if (maybeDay) {
        currentDay = maybeDay;
        continue;
    }

    if (!currentDay) continue;

    const match = line.match(
        /^(\d{1,2}[:.]\d{2}(?:\s*[–-]\s*\d{1,2}[:.]\d{2})?)\s+(.+)$/u
    );

    if (match) {
        const time = match[1].trim();
        const title = match[2].trim();
        result[currentDay].push({ time, title });
    } else {
        result[currentDay].push({ time: "", title: line });
    }
    }

    return result;
}

function buildScheduleTable(schedule) {
    const maxRows = DAY_ORDER.reduce(
    (max, day) => Math.max(max, schedule[day]?.length || 0),
    0
    );

    let html = '<table class="schedule-table">';
    html += "<thead><tr>";
    for (const day of DAY_ORDER) html += `<th>${day}</th>`;
    html += "</tr></thead><tbody>";

    for (let row = 0; row < maxRows; row++) {
    html += "<tr>";
    for (const day of DAY_ORDER) {
        const s = schedule[day][row];
        if (s) {
        html += `<td>
            <div class="session">
            ${s.time ? `<div class="session-time">${escapeHtml(s.time)}</div>` : ""}
            <div class="session-title">${escapeHtml(s.title)}</div>
            </div>
        </td>`;
        } else {
        html += "<td></td>";
        }
    }
    html += "</tr>";
    }

    html += "</tbody></table>";
    return html;
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, ch => {
    switch (ch) {
        case "&": return "&amp;";
        case "<": return "&lt;";
        case ">": return "&gt;";
        case '"': return "&quot;";
        case "'": return "&#39;";
        default: return ch;
    }
    });
}