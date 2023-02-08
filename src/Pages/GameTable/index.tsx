import "./style.css"
import React, {useEffect} from "react";
import {PlayerCard} from "Components/PlayerCard";
import {Card, HiddenCard, ShowedCard} from "Components/Cards";
import {Suits} from "Components/Cards/consts";
import {useParams} from 'react-router-dom';
import {GameHandler} from "Api/game";
import {CommandTypes, TableCommand} from "Api/const";

export const GameTable = () => {
    let data = useParams()
    useEffect(()=> {
        const client = new GameHandler(parseInt(data.id as string))
        return () => {
            client.socket.close()
        }
    }, [])
    const client = new GameHandler(parseInt(data.id as string))
    client.sendMessage({
        message_type: CommandTypes.TABLE,
        payload: {
            command: TableCommand.INFO,
            data: {
                table_id: parseInt(data.id as string),
            }
        }
    })


    return (
        <div className="container">
            <>
                <PlayerCard player={1} side='right'/>
                <HiddenCard seat={1}/>
            </>
            <>
                <PlayerCard player={2} side='right'/>
                <HiddenCard seat={2}/>
            </>
            <>
                <PlayerCard player={3} side='right'/>
                <ShowedCard seat={3} suit={Suits.Clubs} value={"3"} number={1}/>
                <ShowedCard seat={3} suit={Suits.Diamond} value={"3"} number={2}/>
            </>
            <>
                <PlayerCard player={5} side={"left"}/>
                <HiddenCard seat={5}/>
            </>
            <>
                <PlayerCard player={6} side={"left"}/>
                <HiddenCard seat={6}/>
            </>

            <div className="tableContainer">
                <div className="tableGame"/>
                <div className="tableCenter"/>
                <Card position={1} suit={Suits.Spade} value={"3"}/>
                <Card position={2} suit={Suits.Clubs} value={"4"}/>
                <Card position={3} suit={Suits.Diamond} value={"A"}/>
                <Card position={4} suit={Suits.Hearts} value={"Q"}/>
                <Card position={5} suit={Suits.Spade} value={"T"}/>
            </div>
        </div>
    )
}
