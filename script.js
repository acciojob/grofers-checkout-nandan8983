const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) oldTotal.remove();

  const priceCells = document.querySelectorAll(".price");
  let total = 0;

  priceCells.forEach(cell => {
    total += Number(cell.textContent);
  });


  const table = document.querySelector("table");
  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; 

  const totalCellLabel = document.createElement("td");
  totalCellLabel.textContent = "Total";
  totalCellLabel.style.fontWeight = "bold";

  const totalCellValue = document.createElement("td");
  totalCellValue.textContent = total;
  totalCellValue.style.fontWeight = "bold";

  totalRow.appendChild(totalCellLabel);
  totalRow.appendChild(totalCellValue);

  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

