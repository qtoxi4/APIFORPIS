function FillData() {
    let requestURL = 
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
        var currencyRate_json = request.response;
        ShowCurrencyRate(currencyRate_json);
    };
}

function ShowCurrencyRate(jsonObj) {
    let section = document.querySelector("section");

    let table = document.createElement("table");
    table.classList.add("table", "table-bordered");

    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");

    let tr = document.createElement("tr");
    tr.classList.add("text-center");

    let headers = ["Currency", "Buy", "Sell"];
    headers.forEach(text => {
        let th = document.createElement("th");
        th.textContent = text;
        th.scope = "col";
        tr.appendChild(th);
    });

    thead.appendChild(tr);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");

    jsonObj.forEach(rate => {
        let row = document.createElement("tr");
        row.classList.add("text-center");

        let currencyCell = document.createElement("td");
        currencyCell.textContent = `${rate.ccy}/${rate.base_ccy}`;
        row.appendChild(currencyCell);

        let buyCell = document.createElement("td");
        buyCell.textContent = rate.buy;
        row.appendChild(buyCell);

        let sellCell = document.createElement("td");
        sellCell.textContent = rate.sale;
        row.appendChild(sellCell);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    section.appendChild(table);
}

window.onload = FillData;
