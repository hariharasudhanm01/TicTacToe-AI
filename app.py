from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)


def create_board():
    return [' ' for _ in range(9)]


def check_winner(board, player):
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], # Columns
        [0, 4, 8], [2, 4, 6]  # Diagonals
    ]
    for combo in winning_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False


def check_tie(board):
    return ' ' not in board


def best_move(board):
    # Try to win
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'O'
            if check_winner(board, 'O'):
                return i
            board[i] = ' '

    
    for i in range(9):
        if board[i] == ' ':
            board[i] = 'X'
            if check_winner(board, 'X'):
                board[i] = 'O'
                return i
            board[i] = ' '

    
    empty_cells = [i for i, cell in enumerate(board) if cell == ' ']
    return random.choice(empty_cells)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/move', methods=['POST'])
def move():
    board = request.json['board']
    ai_move = best_move(board)
    board[ai_move] = 'O'

    if check_winner(board, 'O'):
        return jsonify({'board': board, 'winner': 'O'})
    elif check_tie(board):
        return jsonify({'board': board, 'winner': 'Tie'})
    else:
        return jsonify({'board': board, 'winner': None})

if __name__ == '__main__':
    app.run(debug=True)
