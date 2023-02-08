import {GameActionTypes} from "Store/game/types";


export enum BackendActionTypes {
    FOLD = "fold",
    BET = "bet",
    CHECK = "check",
}

export const BackendActionMapping = {
    [GameActionTypes.FOLD]: BackendActionTypes.FOLD,
    [GameActionTypes.BET]: BackendActionTypes.BET,
    [GameActionTypes.CHECK]: BackendActionTypes.CHECK,
}


export enum SeatStatus{
    FREE = 'free',
    RESERVED = 'reserved',
    IN_GAME = 'in_game',
    PLAYED = "played",
    WAITING = "waiting",
}

export enum TablePositions {
    UNKNOWN = 'unknown',
    SMALL_BLIND = 'small_blind',
    BIG_BLIND = 'big_blind',
}


export enum CommandTypes {
    GAME = "game",
    SEAT = "seat",
    TABLE = "table",
}

export enum TableCommand {
    INFO = "INFO"
}

export enum GameCommand {
    BET = "bet",
    FOLD = "fold",
    RAISE = "raise",
    CHECK = "check",
}