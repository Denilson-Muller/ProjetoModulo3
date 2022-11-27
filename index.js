const lista = document.getElementById("lista");
let itens = [];

function inserir() {
  let item = document.getElementById("produto").value;
  const minimumCaracteres = 8;
  const maximumCaracteres = 64;

  if (item.length == 0) {
    alert("O campo não pode ser vazio");
  } else if ( item.length < minimumCaracteres ||
    item.length > maximumCaracteres ) {
    alert(
      `O produto deve ter mais ${minimumCaracteres} caracteres e menos de ${maximumCaracteres}!`
    );
  } else { addItem(item);
  }
}

function createItemRow(item) {
  const tableList = document.getElementById("lista");

  const tableRow = document.createElement("tr");
  tableList.appendChild(tableRow);
  const tableColumnCheck = document.createElement("td");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("class", "entrada");

  tableColumnCheck.appendChild(checkBox);
  tableColumnCheck.setAttribute("width", "5%");
  tableRow.appendChild(tableColumnCheck);

  const tableColumnItem = document.createElement("td");
  tableColumnItem.setAttribute("width", "80%");
  tableColumnItem.setAttribute("class", "productName");
  tableColumnItem.innerHTML = item;
  tableRow.appendChild(tableColumnItem);

  const tableColumnBtn = document.createElement("td");
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn btn-reset");
  tableColumnBtn.setAttribute("width", "5%");
  btn.innerHTML = "Remover";
  btn.addEventListener("click", removeItem);
  tableColumnBtn.appendChild(btn);
  tableRow.appendChild(tableColumnBtn);
}

function removeItem() {
  const item = this.parentNode.parentNode;
  const productName = item.getElementsByClassName("productName")[0].innerHTML;
  removeValue(productName);
  lista.removeChild(item);
}


function addValue(productName) {
  const itemValue = prompt(`Qual é o valor do item "${productName}"?`, "0,00");
  const newItens = itens.map((item) => {
    if (item.name === productName) {
      item.value = itemValue;
    }return item;
  });
  itens = newItens;
  saveLocalStorage();
  recalcula();
}

function checkItem() {
    const item = this.parentNode.parentNode;
    const productName = item.getElementsByClassName("productName")[0].innerHTML;
    if (this.checked) {
      item.style.textDecoration = "line-through";
      addValue(productName);
    } else {
      item.style.textDecoration = "none";
      removeValue(productName);
    }
  }
  
function removeValue(productName) {
  const newItens = itens.map((item) => {
    if (item.name === productName) {
      item.value = 0;
    }
    return item;
  });
  itens = newItens;
  saveLocalStorage();
  recalcula();
}

function reloadItens() {
  const checks = document.querySelectorAll(".entrada");
  checks.forEach((check) => {
    check.addEventListener("click", checkItem);
  });
}

function reloadLocalStorage() {
  itens = JSON.parse(localStorage.getItem("itens"));
  if (itens == null) {
    itens = [];
  }
}

function saveLocalStorage() {
  localStorage.setItem("itens", JSON.stringify(itens));
}

function recalcula() {
  let total = 0;
  itens.forEach((item) => {
    if (item.value) {
      const value = item.value;
      total += parseFloat(value.replace(",", "."));
    }
  });
  document.getElementById("valorRecebido").innerHTML = `${total}`.replace(
    ".",
    ","
  );
}

function addItem(item) {
    createItemRow(item);
    reloadItens();
    alert("Produto cadastrado!"); 
    document.getElementById("produto").value = ""; 
    itens.push({
      name: item,
    });
    saveLocalStorage();
  }

  function addItem(item) {
    createItemRow(item);
    reloadItens();
    alert("Produto cadastrado!"); 
    document.getElementById("produto").value = ""; 
    itens.push({
      name: item,
    });
    saveLocalStorage();
  }

  function addItem(item) {
    createItemRow(item);
    reloadItens();
    alert("Produto cadastrado!"); 
    document.getElementById("produto").value = ""; 
    itens.push({
      name: item,
    });
    saveLocalStorage();
  }
  