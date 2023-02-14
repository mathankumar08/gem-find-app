import "./styles.css";

type TVideoPopup = {
  onClose: (value: boolean) => void;
  url: string;
};
const VideoPopup: React.FC<TVideoPopup> = ({ url, onClose }) => {
  return (
    <div className="video-popup">
      <div className="box">
        <span className="close-icon" onClick={() => onClose(false)}>x</span>
        <div className="video-icon">
          <iframe src={url} title="video" width={400}
            height={400}></iframe>
        </div>
      </div>
    </div>
  );
};
export default VideoPopup;
