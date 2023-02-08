import {SeatData} from "Api/types";

interface PreviewTableSeatProps  {
    seat: SeatData;
    number: number;
}


export const PreviewTableSeat = (props: PreviewTableSeatProps) => {
    const {seat, number} = props;
    const msg = seat.user ? seat.user.email : seat.status
    return (
        <div className={seat.user? `seat s${number} not_free`: `seat s${number}`}>
            <p className="msg">{msg}</p>
        </div>
    )
}