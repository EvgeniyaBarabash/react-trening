import { useState } from 'react';
import  Player  from './Player/Player';
import videos from "../videos.json"
import { VideoList } from './VideoList/VideoList';
import { Link } from 'react-router-dom';

export default function Example(){
        const[selectedVideo, setSelectedVideo]=useState(null);
    return(
        <>
          <Link to={`reader`}>Reader</Link>
        <div style={{ padding: 24 }}>
        <h1>Selected video:{selectedVideo}</h1>
        <VideoList videos={videos} onSelect={setSelectedVideo}/>
        <Player url={selectedVideo}/>
        </div>
        </>
    )
    }




// export class Example extends Component{
//     state={
//         selectedVideo:null,
//     };
//     selectVideo=link=>{
//         this.setState({selectedVideo:link})
//     }
//     render(){
//     return(
//         <>
//           <Link to={`reader`}>Reader</Link>
//         <div style={{ padding: 24 }}>
//         <h1>Selected video:{this.state.selectedVideo}</h1>
//         <VideoList videos={videos} onSelect={this.selectVideo}/>
//         <Player url={this.state.selectedVideo}/>
//         </div>
//         </>
//     )
//     }

// }