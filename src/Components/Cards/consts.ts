export enum Suits {
    Spade = "♠︎",
    Diamond = "♦",
    Hearts = "♥",
    Clubs = "♣",
}

export enum Color {
    Red = "red",
    Blue = "blue",
    Black = "black",
    Green = "green",
}

export const ColorSuitMapping: ReadonlyMap<Suits, Color> = new Map([
    [Suits.Spade, Color.Black],
    [Suits.Diamond, Color.Blue],
    [Suits.Hearts, Color.Red],
    [Suits.Clubs, Color.Green],
])
