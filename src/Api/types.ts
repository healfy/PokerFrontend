import {CommandTypes, GameCommand, SeatStatus, TableCommand, TablePositions} from "./const";

export interface Wallet {
    amount: number,
    currency: string
}

export interface User {
    id: number
    email: string
    wallet: Wallet| null
}


export interface SeatData{
    id: number;
    status: SeatStatus
    position: TablePositions
    user: User| null;
}

export interface TableData {
  id: number;
  name: string;
  seats: Array<SeatData>;
  user_here: boolean;
  available: boolean;
}


export interface PayLoad {
    command: GameCommand | TableCommand
    data: object
}

export interface GameMessage  {
    message_type: CommandTypes,
    payload: PayLoad
}


export interface TableInfoCommandData {
    message_type: CommandTypes.TABLE,
    payload: {
        command: TableCommand.INFO,
        data: {
            table: {
                id: number,
                name: string,
                seats: Array<SeatData>
            }
        }
    }
}