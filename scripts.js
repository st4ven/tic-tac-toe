const cells = document.querySelectorAll(".cell");
const header = document.querySelector(".change");
const button = document.querySelector("button");

let player = '1';
let target = '';
let slot;
let win = false;
let slot1 = 'A', slot2 = 'B', slot3 = 'C', slot4 = 'D', slot5 = 'E', slot6 = 'F', slot7 = 'G', slot8 = 'H', slot9 = 'I';

/// starts a new game when button is clicked
button.addEventListener("click", () => {
  newGame();
});

/// on click:
///  square is checked if empty and game has not been won yet
///  if above reqs are met, then place the marker according to player turn
///  check if game has been won, if not, repeat
///  check if game has tied, if so, stop
cells.forEach((cell) => {
  // add event listener
  cell.addEventListener("click", () => {
        // get the textContent and ID corresponding to its slot #
        target = cell.textContent;
        slot = cell.id;

        if (target == '' && !win) {
            if (player == '1') {
                cell.textContent = 'X';
            } else if (player == '2') {
                cell.textContent = 'O';
            }

            updateSlot(slot, player);
            updateHeader(player);
            checkWin(player);

            if (player == '1') {
                player = '2';
            } else {
                player = '1';
            }
        }

        if (!win) {
            boardFull();
        }
  });
});

// updates the corresponding variable to a square with X or O
function updateSlot(slot, player) {
    switch (slot) {
        case '1':
            if (player == '1') {
                if (slot1 != 'O') {
                    slot1 = 'X';
                }
            } else if (player == '2') {
                if (slot1 != 'X') {
                    slot1 = 'O';
                }
            }
            break;
        case '2':
            if (player == '1') {
                if (slot2 != 'O') {
                    slot2 = 'X';
                }
            } else if (player == '2') {
                if (slot2 != 'X') {
                    slot2 = 'O';
                }
            }
            break;
        case '3':
            if (player == '1') {
                if (slot3 != 'O') {
                    slot3 = 'X';
                }
            } else if (player == '2') {
                if (slot3 != 'X') {
                    slot3 = 'O';
                }
            }
            break;
        case '4':
            if (player == '1') {
                if (slot4 != 'O') {
                    slot4 = 'X';
                }
            } else if (player == '2') {
                if (slot4 != 'X') {
                    slot4 = 'O';
                }
            }
            break;
        case '5':
            if (player == '1') {
                if (slot5 != 'O') {
                    slot5 = 'X';
                }
            } else if (player == '2') {
                if (slot5 != 'X') {
                    slot5 = 'O';
                }
            }
            break;
        case '6':
            if (player == '1') {
                if (slot6 != 'O') {
                    slot6 = 'X';
                }
            } else if (player == '2') {
                if (slot6 != 'X') {
                    slot6 = 'O';
                }
            }
            break;
        case '7':
            if (player == '1') {
                if (slot7 != 'O') {
                    slot7 = 'X';
                }
            } else if (player == '2') {
                if (slot7 != 'X') {
                    slot7 = 'O';
                }
            }
            break;
        case '8':
            if (player == '1') {
                if (slot8 != 'O') {
                    slot8 = 'X';
                }
            } else if (player == '2') {
                if (slot8 != 'X') {
                    slot8 = 'O';
                }
            }
            break;
        case '9':
            if (player == '1') {
                if (slot9 != 'O') {
                    slot9 = 'X';
                }
            } else if (player == '2') {
                if (slot9 != 'X') {
                    slot9 = 'O';
                }
            }
            break;
    }
}

/// This function checks if a player has won
function checkWin(player) {

    if (slot1 == slot2 && slot1 == slot3) {
        win = true;
    } else if (slot4 == slot5 && slot4 == slot6) {
        win = true;
    } else if (slot7 == slot8 && slot7 == slot9) {
        win = true;
    } else if (slot1 == slot4 && slot1 == slot7) {
        win = true;
    } else if (slot2 == slot5 && slot2 == slot8) {
        win = true;
    } else if (slot3 == slot6 && slot3 == slot9) {
        win = true;
    } else if (slot1 == slot5 && slot1 == slot9) {
        win = true;
    } else if (slot3 == slot5 && slot3 == slot7) {
        win = true;
    }

    if (win) {
        if (player == '1') {
            header.textContent = "Player 1 wins!";
        } else {
            header.textContent = "Player 2 wins!";
        }
    }
}

/// This function updates the header to the player's turn
function updateHeader() {
    if (player == '1') {
        header.textContent = "Player 2's turn";
    } else {
        header.textContent = "Player 1's turn";
    }
}

/// This function starts a new game of Tic Tac Toe
function newGame() {
    player = '1';
    win = false;
    slot1 = 'A', slot2 = 'B', slot3 = 'C', slot4 = 'D', slot5 = 'E', slot6 = 'F', slot7 = 'G', slot8 = 'H', slot9 = 'I';

    cells.forEach((cell) => {
        cell.textContent = '';
    });

    header.textContent = "Player 1's turn";
}

/// This function checks if the entire gameboard has been filled
function boardFull() {
    if ((slot1 == 'X' || slot1 == 'O') && (slot2 == 'X' || slot2 == 'O') && (slot3 == 'X' || slot3 == 'O') && (slot4 == 'X' || slot4 == 'O')
        && (slot5 == 'X' || slot5 == 'O') && (slot6 == 'X' || slot6 == 'O') && (slot7 == 'X' || slot7 == 'O') && (slot8 == 'X' || slot8 == 'O')
        && (slot9 == 'X' || slot9 == 'O')) {

        header.textContent = "It's a tie!";
    }
}