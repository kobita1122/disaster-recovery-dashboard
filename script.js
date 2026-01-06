const data = [
  { system: "Auth Service", rto: "15 min", status: "OK" },
  { system: "Billing Service", rto: "30 min", status: "OK" },
  { system: "Database", rto: "60 min", status: "OK" }
];

const tbody = document.getElementById("systems");

function render() {
  tbody.innerHTML = "";
  data.forEach(s => {
    tbody.innerHTML += `
      <tr>
        <td>${s.system}</td>
        <td>${s.rto}</td>
        <td class="${s.status === "OK" ? "ok" : "fail"}">
          ${s.status}
        </td>
      </tr>
    `;
  });
}

function simulate() {
  data[2].status = "FAIL";
  render();
  document.getElementById("msg").innerText =
    "Failover initiated for Database system";
}

render();
