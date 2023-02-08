import "./style.css"

export const PlayerAvatar = (props:{side: string}) => {
        const avatarStyle = `avatar ${props.side}`
        return (
            <div className={avatarStyle}>
                <div className="avatar circle"/>
                <div className="avatar circle2"/>
                <div className="avatar circle3"/>
            </div>
        )
}

