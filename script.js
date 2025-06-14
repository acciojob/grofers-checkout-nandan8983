const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  const priceCells = document.querySelectorAll(".price");
  let total = 0;
  priceCells.forEach(cell => {
    const num = Number(cell.textContent.trim()) || 0;
    total += num;
  });
  document.getElementById("ans").textContent = total;
};

getSumBtn.addEventListener("click", getSum);

