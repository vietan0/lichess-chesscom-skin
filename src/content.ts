import browser from 'webextension-polyfill';

const style = document.createElement('style');

style.textContent = `
  .is2d .pawn.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/bp.png') !important;
  }

  .is2d .knight.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/bn.png') !important;
  }

  .is2d .bishop.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/bb.png') !important;
  }

  .is2d .rook.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/br.png') !important;
  }

  .is2d .queen.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/bq.png') !important;
  }

  .is2d .king.black {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/bk.png') !important;
  }

  .is2d .pawn.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wp.png') !important;
  }

  .is2d .knight.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wn.png') !important;
  }

  .is2d .bishop.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wb.png') !important;
  }

  .is2d .rook.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wr.png') !important;
  }

  .is2d .queen.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wq.png') !important;
  }

  .is2d .king.white {
    background-image: url('${browser.runtime.getURL('')}assets/pieces/wk.png') !important;
  }

  .is2d square.check {
    background: initial; 
  }

  body[data-board='green'] .is2d cg-board::before {
    background-image: url('${browser.runtime.getURL('')}assets/board.svg');
  }

  body[data-board='green'] .is2d square.last-move {
    background-color: rgb(255, 255, 51);
    opacity: 0.5;
  }
`;

document.head.append(style);
