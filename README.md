# Tic-Tac-Toe with AI

This project is a web-based Tic-Tac-Toe game that allows users to play against an AI or another human player. The AI uses the Minimax algorithm to make optimal moves, and users can select the difficulty level of the AI. The game is built using Python (Flask) for the backend and JavaScript for the frontend.

## Features

- **Single Player (Human vs AI):** Play against an AI opponent with different difficulty levels (Easy, Medium, Hard).
- **Difficulty Levels:** Adjust the AI difficulty via a dropdown menu.
- **Responsive Design:** The game board adjusts to different screen sizes.
- **Restart Game:** Option to restart the game at any time.

## How It Works

### AI Implementation

The AI uses the Minimax algorithm to determine the best move. The algorithm evaluates all possible moves by simulating future game states and selecting the move that maximizes the AI's chances of winning while minimizing the opponent's chances.

### Difficulty Levels

- **Easy:** The AI makes random moves without using the Minimax algorithm.
- **Medium:** The AI uses a limited-depth Minimax algorithm, making it more challenging.
- **Hard:** The AI uses the full-depth Minimax algorithm, making optimal moves every time.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/tictactoe-ai.git
   cd tictactoe-ai
   ```

2. **Set up a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask app:**
   ```bash
   flask run
   ```

5. **Access the game:**
   Open your browser and go to `http://127.0.0.1:5000/` to play the game.

## Project Structure

- **`app.py`**: The main Flask application file.
- **`templates/index.html`**: The HTML file for the game interface.
- **`static/styles.css`**: The CSS file for styling the game.
- **`static/script.js`**: The JavaScript file that handles the game logic on the client side.

## Usage

- Select the difficulty level from the dropdown menu.
- Click on a cell to make your move.
- The AI will respond based on the selected difficulty level.
- The game will declare a winner or a tie once the game ends.
- Use the "Restart Game" button to start a new game.

## Customization

You can customize the game by modifying the following:

- **AI Behavior:** Tweak the Minimax algorithm in `app.py` to adjust AI strategies.
- **UI Design:** Modify `styles.css` to change the look and feel of the game.
- **Game Rules:** Adjust the game logic in `script.js` to implement new features or variations of Tic-Tac-Toe.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- Thanks to the developers and the open-source community for providing the tools and resources to make this project possible.


---

Enjoy playing Tic-Tac-Toe with AI! 🎮

---

**Note:** Replace the placeholder information such as the repository URL, your username, and contact details with your actual information before publishing.
