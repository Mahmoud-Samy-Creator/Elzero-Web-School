#!/usr/bin/python3

class Games:
    # Write Class Content
    def __init__(self, games):
        self.games = games

    def show_games(self):
        if isinstance(self.games, str):
            print(f"I Have one game called {self.games}")

        if isinstance(self.games, list):
            print("I have many games:")
            for game in self.games:
                print(f"-- {game}")

        if isinstance(self.games, int):
            print(f"I Have {self.games} game")

my_game = Games("Shadow Of Mordor")
my_games_names = Games(["Ys II", "Ys Oath In Felghana", "YS Origin"])
my_games_count = Games(80)

my_game.show_games()
# Ouput
# I Have One Game Called "Shadow Of Mordor"

my_games_names.show_games()
# Ouput
# I Have Many Games:
# -- Ys II
# -- Ys Oath In Felghana
# -- YS Origin

my_games_count.show_games()
# Output
# I Have 80 Game.