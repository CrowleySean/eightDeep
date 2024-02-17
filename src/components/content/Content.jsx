import Post from "../post/Post";
import Video from "../video/Video";
import YouTube from "react-youtube";
import "./content.css"

export default function Content() {
  // const opts = {
  //   height: '720',
  //   width: '1080',
  //   playerVars: {
  //     autoplay: 0
  //   }
  // }

  // const videoId = 'kKQIFHn-prQ';

  return (
    <div className="posts">
      <Video videoId="buaxQ6Be8rU"/>
      <Post img="https://static.www.nfl.com/image/upload/t_new_photo_album/f_auto/league/pbupwcbkeifv67sptgid.jpg" />
      <Post img="https://static.www.nfl.com/image/upload/t_new_photo_album/f_auto/league/l5lp991z9oyjl3ogdck2.jpg" />
      <Post img="https://static.www.nfl.com/image/upload/t_new_photo_album/f_auto/league/bledkxe7zfutv38kyqxw.jpg"/>
      <Post img="https://static.www.nfl.com/image/upload/t_new_photo_album/f_auto/league/sywt1h9gvgbxsetotawz.jpg"/>
      <Post img="https://static.www.nfl.com/image/upload/t_new_photo_album/f_auto/league/obmavue9djsx47miabqq.jpg"/>
      <Post img="https://cdn.nba.com/teams/uploads/sites/1610612738/2024/02/20240214_BAB8753.jpg?imwidth=3000&imheight=2000"/>
      <Post img="https://cdn.nba.com/teams/uploads/sites/1610612738/2024/02/20240214_BAB8615.jpg?imwidth=3000&imheight=2000"/>
    </div>
  )
}
