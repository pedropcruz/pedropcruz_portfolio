import React, {Component} from 'react';
import PlayerCSS from "./Player.css";
import ReactPlayer from 'react-player';

export class Player extends Component{
    render(){
        return(
            <section className="relative max-width-4 mx-auto my4">
                <PlayerCSS className="center">
                    <ReactPlayer
                        className="react-player"
                        url="https://www.twitch.tv/pedropcruz"
                        config={{
                            twitch:{
                                options:{
                                    'font-size':'small',
                                    channel: 'pedropcruz',
                                    chat: 'default',
                                    //layout: 'video-and-chat',
                                    theme: 'dark'
                                }
                            }
                        }}
                    />
                </PlayerCSS>
            </section>
        );
    }
}