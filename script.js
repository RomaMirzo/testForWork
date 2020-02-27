// получил поле
let area = document.getElementById("area");
let areaCells = 6;
area.style.width = areaCells * 100 + "px";
area.style.height = areaCells * 100 + "px";
// сгенерировал ячейки
let leftOffset = 0;
let topOffset = 0;

var cellArr = [];
let id = 0;
for(let i = 0; i < areaCells; i++) {
  for(let j = 0; j < areaCells; j++) {
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.id = id;
    area.appendChild(cell);
    cell.style.left = i * 100 + 'px';
    cell.style.top = j * 100 + 'px';
    cellArr.push(cell);
    id++;
  }
}
// создал рандомный массив с цветами
let areaArray = [];
for(let i = 0; i < areaCells ** 2; i++) {
  let randomColorNum = Math.round(Math.random());
  areaArray[i] = randomColorNum;
}
// задал похожие ячейки
let cell = document.getElementsByClassName('cell');
for(let i = 0; i < areaArray.length; i++) {
  if(areaArray[i] == 0) {
    cell[i].style.backgroundColor = "blue";
  } else {
    cell[i].style.backgroundColor = "red";
  }
}

// проверка на совпадение
function checkCell(id, color) {
  //id нажатой ячейки   
  let elemId = +cell[id].id;
  //условие краёв
  let condition = areaCells * 100 - 100 + "px";
  //делаем нажатую ячейку чёрной
  cell[id].style.backgroundColor = "white";
  //смотрим вниз         
  if(cell[id].style.top != condition && color == cell[elemId + 1].style.backgroundColor) {
      checkCell(elemId + 1, color);
    };
  //смотрим вверх
  if(cell[id].style.top != "0px" && color == cell[elemId - 1].style.backgroundColor) {
      checkCell(elemId - 1, color);
    };
  //смотрим вправо
  if(cell[id].style.left != condition && color == cell[elemId + areaCells].style.backgroundColor) {
      checkCell(elemId + areaCells, color);
    console.log(cell[id].style.left);
    };
  //смотрим влево
  if(cellArr.length > 0 && cell[id].style.left != "0px" && color == cellArr[elemId - areaCells].style.backgroundColor) {
      checkCell(elemId - areaCells, color);
    };
};

// запускаем проверку
function checkColor(event) {
  if(event.target && event.target.className == "cell") {
    let targId = +event.target.id;
    let targColor = event.target.style.backgroundColor;
    checkCell(targId, targColor); 
  };
};

area.addEventListener('click', checkColor);