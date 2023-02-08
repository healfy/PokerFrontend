

export const PlayerInfo = ({username= 'werded', bank='12'}) => (
    <>
        <div className="player-card info">
            <span className="text1">{username}</span>
        </div>
        <div className="player-card bank">
            <div className="text1 value">{bank}$</div>
        </div>
    </>
)