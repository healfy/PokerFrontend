import "./style.css"
import {PlayerAvatar} from "./PlayerAvatar";
import {PlayerInfo} from "./PlayerInfo";

interface IProps {
        player: number,
        side: string,
}

export const PlayerCard = (props: IProps) => {
        const {player, side} = props;
        const cls = `player-card v${player}`
        return (
            <div className={cls}>
                <PlayerAvatar side={side}/>
                <PlayerInfo/>
            </div>
        )
}

