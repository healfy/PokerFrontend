import "./style.css"
import {TableData} from "Api/types"

import React from "react";
import {PreviewTableSeat} from "./Seat";

export const TablePreview = (props: {tableData: TableData}) => {
    const tableData = props.tableData
    return (
        <div className="container ">
            <div className="table_preview">
                    {
                        tableData.seats.map((seat, index) => (
                            <div key={index}>
                                <PreviewTableSeat seat={seat} number={index+1}/>
                            </div>
                        ))
                    }
            </div>
        </div>
    )
}