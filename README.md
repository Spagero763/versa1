# VersaGames

![VersaGames](https://img.shields.io/badge/VersaGames-2026-purple?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

Welcome to **VersaGames**, a collection of classic games with a modern, sleek interface. Built with Next.js, React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎮 **6 Classic Games** - Chess, Checkers, Tic-Tac-Toe, Scrabble, Sliding Puzzle, and Memory Match
- 🎯 **Multiple Difficulty Levels** - Easy, Medium, and Hard modes
- 📱 **Responsive Design** - Play on any device
- 🎨 **Modern UI** - Beautiful dark theme with smooth animations
- ⌨️ **Keyboard Shortcuts** - Enhanced accessibility
- 📊 **Statistics Tracking** - Track your wins and progress
- 🔐 **Web3 Integration** - Blockchain-enabled gaming with Privy authentication

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/versagames.git
cd versagames

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start playing!

## 🎮 How to Play the Games

This project includes several classic games. Here's how to play each one:

### 1. Tic-Tac-Toe

-   **Objective:** Be the first player to get three of your marks (X or O) in a row, either horizontally, vertically, or diagonally.
-   **How to Play:**
    1.  The game is for two players, Player 1 (X) and Player 2 (O).
    2.  Players take turns placing their mark in an empty square on the 3x3 grid.
    3.  The game ends when one player achieves three in a row or when all nine squares are filled, resulting in a draw.
    4.  Click the "Reset Game" button to start a new match.

### 2. Scrabble

-   **Objective:** Score the most points by creating words on the game board. Different letters have different point values.
-   **How to Play:**
    1.  This is a two-player game. Each player starts with 7 tiles.
    2.  On your turn, click a tile from your rack to select it.
    3.  Click an empty square on the board to place the selected tile.
    4.  Form words that connect to existing words on the board. The first word must cover the center star.
    5.  Once you've placed your tiles to form a word, click "Submit Word" to score points and end your turn.
    6.  You can use the "Recall" button to return placed tiles to your rack before submitting.
    7.  If you cannot make a move, you can "Pass" your turn.

### 3. Sliding Puzzle

-   **Objective:** Rearrange the shuffled tiles to form the complete reference image.
-   **How to Play:**
    1.  First, choose a puzzle image from the selection page.
    2.  The puzzle is presented as a grid of tiles with one empty space.
    3.  Click on a tile adjacent (horizontally or vertically) to the empty space to slide it into the empty spot.
    4.  Continue sliding tiles until the image is correctly assembled.
    5.  Use the reference image on the side to guide you.
    6.  Click "New Puzzle" to reshuffle and start over.

### 4. Memory Match

-   **Objective:** Find all the matching pairs of cards by flipping them over.
-   **How to Play:**
    1.  Select a difficulty level: Easy, Medium, or Hard.
    2.  Click on a card to flip it over and reveal the icon.
    3.  Click on a second card to flip it.
    4.  If the icons on the two cards match, they will remain face up.
    5.  If they do not match, they will be flipped back over after a short delay.
    6.  The game is won when all matching pairs have been found.

### 5. Checkers

-   **Objective:** Capture all of your opponent's pieces.
-   **How to Play:**
    1.  This is a two-player game (Red vs. Blue). Pieces move diagonally forward on the dark squares.
    2.  To move a piece, click on it. Possible moves will be highlighted.
    3.  Click on a highlighted square to move your piece.
    4.  To capture an opponent's piece, you must "jump" over it diagonally to an empty square on the other side. You can make multiple jumps in a single turn if possible.
    5.  If a piece reaches the opponent's back row, it becomes a "King" and can move both forwards and backward diagonally.
    6.  The game ends when one player has no pieces left, or cannot make a legal move.

### 6. Chess

-   **Objective:** Checkmate your opponent's King, putting it in a position where it cannot escape capture.
-   **How to Play:**
    1.  This is a two-player game (White vs. Black). White moves first.
    2.  Each piece has a unique way of moving. Click on a piece to see its possible moves highlighted on the board.
        -   **Pawn:** Moves one square forward, but two on its first move. Captures diagonally.
        -   **Knight:** Moves in an "L" shape (two squares in one direction, then one square perpendicularly).
        -   **Bishop:** Moves diagonally any number of squares.
        -   **Rook:** Moves horizontally or vertically any number of squares.
        -   **Queen:** Moves any number of squares diagonally, horizontally, or vertically.
        -   **King:** Moves one square in any direction.
    3.  Click a piece and then click a highlighted square to make your move.
    4.  The game ends in checkmate, stalemate (a draw), or if a player resigns.

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `R` | Reset game |
| `Ctrl + Z` | Undo move (where supported) |
| `P` | Pause game |
| `Escape` | Cancel/Close dialogs |

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Authentication:** Privy
- **Blockchain:** Base Sepolia (Ethereum L2)

## 📁 Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── chess/        # Chess game components
│   ├── checkers/     # Checkers game components
│   ├── game/         # Shared game components
│   ├── layout/       # Layout components
│   └── ui/           # UI primitives
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── contracts/        # Smart contract ABIs
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by the VersaGames Team • © 2026
