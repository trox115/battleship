import { createDiv, createElem, tabElem, tabContent } from './elmcreator';

function createButtons() {
  const container = document.querySelector('.container');
  const row = createDiv(['row']);
  const col = createDiv(['col-md-3']);
  const startBtn = createElem('button', '', ['btn', 'btn-primary']);
  const resetGame = createElem('button', '', ['btn', 'btn-danger']);

  col.appendChild(startBtn);
  col.appendChild(resetGame);
  row.appendChild(col);
  container.appendChild(row);
}

function createGrid() {
  const container = document.querySelector('.container');
  const row = createDiv(['row']);
  const col = createDiv(['col-md-6']);

  let rows = 0;
  let x = 10;

  for (rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      col.insertAdjacentHTML('beforeend', "<div class='grid'></div>");
    }
  }
  row.appendChild(col);
  container.appendChild(row);
}

export { createButtons, createGrid };