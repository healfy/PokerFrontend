import "./style.css"
import {ColorSuitMapping, Suits} from "./consts";

interface IPropsCard {
    value: string,
    position: number,
    suit: Suits
}

interface IPropsShowedCard {
    value: string,
    seat: number,
    number: number,
    suit: Suits
}

interface IPropsHiddenCard {
    seat: number
}

export const Card = (props: IPropsCard) => {
    const {value, position, suit} = props;
    const style = `poker-card ${ColorSuitMapping.get(suit)} v${position}`
    return (
            <div className={style}>
                <div className="poker-card-topleft">
                    <div className="poker-card-corner-rank">{value}</div>
                    <div className="poker-card-corner-suit">{suit}</div>
                </div>
            </div>
    )
}

export const HiddenCard = (props: IPropsHiddenCard) => {
    return (
        <>
            <div className={`player-hand hidden seat${props.seat} v1`}/>
            <div className={`player-hand hidden seat${props.seat} v2`}/>
        </>
    )
}

export const ShowedCard = (props: IPropsShowedCard) => {
    const {value, seat, number, suit} = props;
    return (
        <>
            <div className={`player-hand showed seat${seat} v${number} ${ColorSuitMapping.get(suit)}`}>
                <div className="player-hand-rank">{value}</div>
                <div className="player-hand-suit">{suit}</div>
            </div>
        </>
    )
}
