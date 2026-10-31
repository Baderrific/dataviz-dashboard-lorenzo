// /* =========================================================
// APP.JS — reads the data, crunches it, draws the charts
// ---------------------------------------------------------
// STARTER VERSION. The function NAMES and DESCRIPTIONS are
// already written. In Step 4, Gemini fills in the bodies.

// The descriptions are a "contract": they tell the AI exactly
// what each function receives and returns, so everyone in
// class gets code that works the same way.

// RULE: do not rename functions or change their inputs.
// ========================================================= */


// // Keeps track of the charts on screen so we can replace them on switch.
// let categoryChart = null;
// let trendChart = null;


// /**
// * parseCsv(csvText)
// * Turns raw CSV text into an array of row objects.
// * Uses the PapaParse library (loaded in index.html).
// * Example: "Genre,Global_Sales\nSports,82.74" -> [{ Genre: "Sports", Global_Sales: "82.74" }]
// * @param {string} csvText - the full CSV text, header row first
// * @returns {Object[]} one object per data row
// */
// function parseCsv(csvText) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * cleanRows(rows, settings)
// * Keeps only rows we can trust and counts the ones we threw away.
// * A row is SKIPPED when:
// *   - its category column is empty, or
// *   - its value column is not a number, or
// *   - its trend column is empty or "N/A".
// * @param {Object[]} rows - output of parseCsv
// * @param {Object} settings - one entry of DATASETS in config.js
// * @returns {{ clean: Object[], skipped: number }}
// */
// function cleanRows(rows, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * toTrendKey(rawValue, grouping)
// * Converts a value from the trend column into the label used on the x-axis.
// *   "none"  -> unchanged             ("2006"      -> "2006")
// *   "hour"  -> hour from HH:MM       ("13:08"     -> "13:00")
// *   "month" -> YYYY-MM from M/D/YYYY ("1/5/2019"  -> "2019-01")
// *   "year"  -> YYYY from M/D/YYYY    ("1/5/2019"  -> "2019")
// * @param {string} rawValue
// * @param {string} grouping - "none" | "hour" | "month" | "year"
// * @returns {string}
// */
// function toTrendKey(rawValue, grouping) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping)
// * Groups rows by one column and combines the numbers in each group.
// * Example: sum of "Total" per "Product line".
// * @param {Object[]} rows - cleaned rows
// * @param {string} groupColumn - column to group by
// * @param {string} valueColumn - column with the numbers
// * @param {string} aggregation - "sum" | "count" | "average"
// * @param {string} grouping - passed to toTrendKey ("none" for categories)
// * @returns {{ labels: string[], values: number[] }} in the order first seen
// */
// function groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * sortGroups(groups, sortBy, limit)
// * Sorts grouped data and optionally keeps only the first few.
// * @param {{ labels: string[], values: number[] }} groups
// * @param {string} sortBy - "valueDesc" (biggest first) | "labelAsc" (A–Z / oldest first)
// * @param {number} [limit] - how many to keep (leave empty to keep all)
// * @returns {{ labels: string[], values: number[] }}
// */
// function sortGroups(groups, sortBy, limit) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * formatNumber(value)
// * Formats a number with commas and CHART_SETTINGS.numberDecimals decimals.
// * Example: 322966.749 -> "322,966.75"
// */
// function formatNumber(value) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderSummary(settings, cleanCount, skipped, total, topCategory)
// * Writes the dataset title, description and the 4 summary cards.
// * Required element IDs: dataset-title, dataset-description, dataset-source,
// * kpi-records, kpi-total, kpi-total-label, kpi-top, kpi-skipped
// */
// function renderSummary(settings, cleanCount, skipped, total, topCategory) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderCategoryChart(groups, settings)
// * Draws Chart 1 (bar chart) on <canvas id="chart-category">.
// * Destroys the previous chart first so switching datasets works.
// * Required element IDs: chart-category, chart-category-title
// */
// function renderCategoryChart(groups, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * renderTrendChart(groups, settings)
// * Draws Chart 2 (line chart) on <canvas id="chart-trend">.
// * Destroys the previous chart first so switching datasets works.
// * Required element IDs: chart-trend, chart-trend-title
// */
// function renderTrendChart(groups, settings) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * loadDashboard(datasetKey)
// * The main function. Runs every step in order for one dataset:
// * parse -> clean -> group -> sort -> render summary -> render 2 charts.
// * @param {string} datasetKey - a key of DATASETS, e.g. "supermarket"
// */
// function loadDashboard(datasetKey) {
// // TODO (Step 4): Gemini writes this part.
// }


// /**
// * setupDatasetPicker()
// * Fills <select id="dataset-select"> with every dataset in DATASETS,
// * selects ACTIVE_DATASET, and reloads the dashboard when it changes.
// */
// function setupDatasetPicker() {
// // TODO (Step 4): Gemini writes this part.
// }


// // Start everything once the page has loaded.
// document.addEventListener("DOMContentLoaded", function () {
// setupDatasetPicker();
// loadDashboard(ACTIVE_DATASET);
// });


/* =========================================================
APP.JS — reads the data, crunches it, draws the charts
---------------------------------------------------------
STARTER VERSION. The function NAMES and DESCRIPTIONS are
already written. In Step 4, Gemini fills in the bodies.

The descriptions are a "contract": they tell the AI exactly
what each function receives and returns, so everyone in
class gets code that works the same way.

RULE: do not rename functions or change their inputs.
========================================================= */


// Keeps track of the charts on screen so we can replace them on switch.
let categoryChart = null;
let trendChart = null;


/**
* parseCsv(csvText)
* Turns raw CSV text into an array of row objects.
* Uses the PapaParse library (loaded in index.html).
* Example: "Genre,Global_Sales\nSports,82.74" -> [{ Genre: "Sports", Global_Sales: "82.74" }]
* @param {string} csvText - the full CSV text, header row first
* @returns {Object[]} one object per data row
*/
function parseCsv(csvText) {
    const result = Papa.parse(csvText.trim(), {
        header: true,
        skipEmptyLines: true
    });
    return result.data;
}


/**
* cleanRows(rows, settings)
* Keeps only rows we can trust and counts the ones we threw away.
* A row is SKIPPED when:
*   - its category column is empty, or
*   - its value column is not a number, or
*   - its trend column is empty or "N/A".
* @param {Object[]} rows - output of parseCsv
* @param {Object} settings - one entry of DATASETS in config.js
* @returns {{ clean: Object[], skipped: number }}
*/
function cleanRows(rows, settings) {
    let clean = [];
    let skipped = 0;
    const catCol = settings.categoryColumn;
    const valCol = settings.valueColumn;
    const trendCol = settings.trendColumn;

    for (let row of rows) {
        const cat = row[catCol];
        const val = row[valCol];
        const trend = row[trendCol];

        if (cat === undefined || cat === null || String(cat).trim() === "") {
            skipped++;
            continue;
        }
        const numVal = parseFloat(val);
        if (isNaN(numVal)) {
            skipped++;
            continue;
        }
        if (trend === undefined || trend === null || String(trend).trim() === "" || String(trend).trim() === "N/A") {
            skipped++;
            continue;
        }
        clean.push(row);
    }
    return { clean, skipped };
}


/**
* toTrendKey(rawValue, grouping)
* Converts a value from the trend column into the label used on the x-axis.
*   "none"  -> unchanged             ("2006"      -> "2006")
*   "hour"  -> hour from HH:MM       ("13:08"     -> "13:00")
*   "month" -> YYYY-MM from M/D/YYYY ("1/5/2019"  -> "2019-01")
*   "year"  -> YYYY from M/D/YYYY    ("1/5/2019"  -> "2019")
* @param {string} rawValue
* @param {string} grouping - "none" | "hour" | "month" | "year"
* @returns {string}
*/
function toTrendKey(rawValue, grouping) {
    if (!rawValue) return "";
    const str = String(rawValue).trim();
    if (grouping === "none") {
        return str;
    }
    if (grouping === "hour") {
        const parts = str.split(":");
        if (parts.length > 0) {
            return parts[0].padStart(2, "0") + ":00";
        }
        return str;
    }
    if (grouping === "month" || grouping === "year") {
        let date = new Date(str);
        if (isNaN(date.getTime())) {
            const slashParts = str.split("/");
            if (slashParts.length === 3) {
                let m = slashParts[0], d = slashParts[1], y = slashParts[2];
                if (y.length !== 4 && slashParts[0].length === 4) { y = slashParts[0]; m = slashParts[1]; d = slashParts[2]; }
                date = new Date(`${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`);
            }
        }
        if (!isNaN(date.getTime())) {
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            if (grouping === "year") {
                return String(yyyy);
            } else {
                return `${yyyy}-${mm}`;
            }
        }
        return str;
    }
    return str;
}


/**
* groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping)
* Groups rows by one column and combines the numbers in each group.
* Example: sum of "Total" per "Product line".
* @param {Object[]} rows - cleaned rows
* @param {string} groupColumn - column to group by
* @param {string} valueColumn - column with the numbers
* @param {string} aggregation - "sum" | "count" | "average"
* @param {string} grouping - passed to toTrendKey ("none" for categories)
* @returns {{ labels: string[], values: number[] }} in the order first seen
*/
function groupAndAggregate(rows, groupColumn, valueColumn, aggregation, grouping) {
    const map = {};
    const counts = {};

    for (let row of rows) {
        const rawGroupVal = row[groupColumn];
        const key = grouping !== "none" ? toTrendKey(rawGroupVal, grouping) : String(rawGroupVal).trim();
        const val = parseFloat(row[valueColumn]) || 0;

        if (!map[key]) {
            map[key] = 0;
            counts[key] = 0;
        }
        map[key] += val;
        counts[key] += 1;
    }

    let labels = Object.keys(map);
    let values = [];

    if (aggregation === "count") {
        values = labels.map(l => counts[l]);
    } else if (aggregation === "average") {
        values = labels.map(l => counts[l] > 0 ? map[l] / counts[l] : 0);
    } else {
        values = labels.map(l => map[l]);
    }

    return { labels, values };
}


/**
* sortGroups(groups, sortBy, limit)
* Sorts grouped data and optionally keeps only the first few.
* @param {{ labels: string[], values: number[] }} groups
* @param {string} sortBy - "valueDesc" (biggest first) | "labelAsc" (A–Z / oldest first)
* @param {number} [limit] - how many to keep (leave empty to keep all)
* @returns {{ labels: string[], values: number[] }}
*/
function sortGroups(groups, sortBy, limit) {
    let combined = groups.labels.map((label, i) => ({
        label: label,
        value: groups.values[i]
    }));

    if (sortBy === "valueDesc") {
        combined.sort((a, b) => b.value - a.value);
    } else if (sortBy === "labelAsc") {
        combined.sort((a, b) => {
            if (a.label < b.label) return -1;
            if (a.label > b.label) return 1;
            return 0;
        });
    }

    if (limit !== undefined && limit > 0) {
        combined = combined.slice(0, limit);
    }

    return {
        labels: combined.map(item => item.label),
        values: combined.map(item => item.value)
    };
}


/**
* formatNumber(value)
* Formats a number with commas and CHART_SETTINGS.numberDecimals decimals.
* Example: 322966.749 -> "322,966.75"
*/
function formatNumber(value) {
    const num = parseFloat(value) || 0;
    const decimals = CHART_SETTINGS.numberDecimals !== undefined ? CHART_SETTINGS.numberDecimals : 2;
    return num.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}


/**
* renderSummary(settings, cleanCount, skipped, total, topCategory)
* Writes the dataset title, description and the 4 summary cards.
* Required element IDs: dataset-title, dataset-description, dataset-source,
* kpi-records, kpi-total, kpi-total-label, kpi-top, kpi-skipped
*/
function renderSummary(settings, cleanCount, skipped, total, topCategory) {
    document.getElementById("dataset-title").textContent = settings.title;
    document.getElementById("dataset-description").textContent = settings.description;
    
    const sourceLink = document.getElementById("dataset-source");
    sourceLink.href = settings.source;
    
    document.getElementById("kpi-records").textContent = cleanCount.toLocaleString();
    document.getElementById("kpi-total-label").textContent = settings.valueLabel;
    document.getElementById("kpi-total").textContent = (settings.valueColumn.toLowerCase().includes("sales") || settings.valueColumn.toLowerCase().includes("total") || settings.valueColumn.toLowerCase().includes("price") ? "$" : "") + formatNumber(total);
    document.getElementById("kpi-top").textContent = topCategory || "N/A";
    document.getElementById("kpi-skipped").textContent = skipped.toLocaleString();
}


/**
* renderCategoryChart(groups, settings)
* Draws Chart 1 (bar chart) on <canvas id="chart-category">.
* Destroys the previous chart first so switching datasets works.
* Required element IDs: chart-category, chart-category-title
*/
function renderCategoryChart(groups, settings) {
    const titleEl = document.getElementById("chart-category-title");
    if (titleEl) {
        titleEl.textContent = `${settings.valueLabel} by ${settings.categoryColumn}`;
    }
    if (categoryChart) {
        categoryChart.destroy();
    }
    const ctx = document.getElementById("chart-category").getContext("2d");
    categoryChart = new Chart(ctx, {
        type: CHART_SETTINGS.categoryChartType || "bar",
        data: {
            labels: groups.labels,
            datasets: [{
                label: settings.valueLabel,
                data: groups.values,
                backgroundColor: CHART_SETTINGS.primaryColor || "#0F766E",
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            plugins: {
                legend: { display: false }
            }
        }
    });
}


/**
* renderTrendChart(groups, settings)
* Draws Chart 2 (line chart) on <canvas id="chart-trend">.
* Destroys the previous chart first so switching datasets works.
* Required element IDs: chart-trend, chart-trend-title
*/
function renderTrendChart(groups, settings) {
    const titleEl = document.getElementById("chart-trend-title");
    if (titleEl) {
        titleEl.textContent = `${settings.valueLabel} over ${settings.trendLabel}`;
    }
    if (trendChart) {
        trendChart.destroy();
    }
    const ctx = document.getElementById("chart-trend").getContext("2d");
    trendChart = new Chart(ctx, {
        type: CHART_SETTINGS.trendChartType || "line",
        data: {
            labels: groups.labels,
            datasets: [{
                label: settings.valueLabel,
                data: groups.values,
                borderColor: CHART_SETTINGS.primaryColor || "#0F766E",
                backgroundColor: CHART_SETTINGS.secondaryColor || "#99F6E4",
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            }
        }
    });
}


/**
* loadDashboard(datasetKey)
* The main function. Runs every step in order for one dataset:
* parse -> clean -> group -> sort -> render summary -> render 2 charts.
* @param {string} datasetKey - a key of DATASETS, e.g. "supermarket"
*/
function loadDashboard(datasetKey) {
    const settings = DATASETS[datasetKey];
    if (!settings) return;

    const rawRows = parseCsv(settings.csv);
    const { clean, skipped } = cleanRows(rawRows, settings);

    let total = 0;
    for (let row of clean) {
        total += parseFloat(row[settings.valueColumn]) || 0;
    }

    const catGroupsRaw = groupAndAggregate(clean, settings.categoryColumn, settings.valueColumn, settings.aggregation, "none");
    const catGroupsSorted = sortGroups(catGroupsRaw, "valueDesc", CHART_SETTINGS.maxCategories);

    const topCategory = catGroupsSorted.labels.length > 0 ? catGroupsSorted.labels[0] : "N/A";

    const trendGroupsRaw = groupAndAggregate(clean, settings.trendColumn, settings.valueColumn, "sum", settings.trendGrouping);
    const trendGroupsSorted = sortGroups(trendGroupsRaw, "labelAsc");

    renderSummary(settings, clean.length, skipped, total, topCategory);
    renderCategoryChart(catGroupsSorted, settings);
    renderTrendChart(trendGroupsSorted, settings);
}


/**
* setupDatasetPicker()
* Fills <select id="dataset-select"> with every dataset in DATASETS,
* selects ACTIVE_DATASET, and reloads the dashboard when it changes.
*/
function setupDatasetPicker() {
    const select = document.getElementById("dataset-select");
    if (!select) return;
    select.innerHTML = "";
    for (let key in DATASETS) {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = DATASETS[key].title;
        if (key === ACTIVE_DATASET) {
            opt.selected = true;
        }
        select.appendChild(opt);
    }
    select.addEventListener("change", (e) => {
        loadDashboard(e.target.value);
    });
}


// Start everything once the page has loaded.
document.addEventListener("DOMContentLoaded", function () {
setupDatasetPicker();
loadDashboard(ACTIVE_DATASET);
});