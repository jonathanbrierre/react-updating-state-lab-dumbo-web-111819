// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = (e) => {
        this.setState(prevState => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        })
    }
    changeResolution = (e) => {
        this.setState(prevState =>{
            return {
                ...prevState,
                settings:{
                    ...prevState.settings,
                    video: {
                        ...prevState.settings.video,
                        resolution: '720p'
                    }
                }
            }
        })
        // this.setState({settings:{video:{resolution: '720p'}}})
    }

    render() {
        return (
            <div>
                <button className = 'bitrate' onClick ={this.changeBitrate}>{this.state.settings.bitrate}</button>
                <button className = 'resolution' onClick ={this.changeResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
