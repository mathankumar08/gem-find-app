import "./styles.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCamera from "../../assets/videoCamera.svg";
import { IDiamontDetails } from "../../interface/filterModel";
import { Checkbox, FormControlLabel,Tooltip } from "@mui/material";
import { useState } from "react";

type TDiamondCard = {
  data: IDiamontDetails;
  selectedDiamondList: IDiamontDetails[];
  handleCheck: (value: IDiamontDetails) => void;
  handleVideo: (value: string) => void;
};
const DiamondDetailsCard: React.FC<TDiamondCard> = ({
  data,
  selectedDiamondList,
  handleCheck,
  handleVideo
}) => {
  const [isProductSlide, setIsProductSlide] = useState<boolean>(false)

  return (
    <div className="diamond-card">
      <div className="diamond-view">
        {data?.videoFileName ? (
          <img
            src={VideoCamera}
            alt="Video Camera"
            width={20}
            height={20}
            className="cam"
            onClick={() => handleVideo(data?.videoFileName)}
          />
        ) : (
          <p></p>
        )}
          <Tooltip title="More Details">
        <MoreHorizIcon className="dot-icon" onClick={() => setIsProductSlide(!isProductSlide)} />
        </Tooltip>
      </div>
      {isProductSlide && <div className="diamond-product-slide">
        <p className="text">Diamond ID<span>{data?.diamondId}</span></p>
        <p className="text">Shape<span>{data?.shape}</span></p>
        <p className="text">Carat<span>{data?.carat}</span></p>
        <p className="text">Color<span>{data?.color}</span></p>
        <p className="text">Intensity<span>-</span></p>
        <p className="text">Clarity<span>{data?.clarity}</span></p>
        <p className="text">Cut<span>{data?.cut}</span></p>
        <p className="text">Depth<span>{data?.depth}</span></p>
        <p className="text">Table<span>{data?.table}</span></p>
        <p className="text">Polish<span>{data?.polish}</span></p>
        <p className="text">Symmetry<span>{data?.symmetry}</span></p>
        <p className="text">Measurement<span>{data?.measurement}</span></p>
        <p className="text">Certificate<a className="link" href={data?.certificateUrl}>{data?.certificateNo}</a></p>
        <p className="text">Price<span>Call</span></p>
      </div>}

      <img src={data?.biggerDiamondimage}
        alt="Video Camera"
        width={210} height={210}
      />
      <div className="diamond-body">
      <Tooltip title="View Diamond">
        <p className="cart-text">
          {data?.shape} {data?.carat} CARAT
        </p>
        </Tooltip>
        <Tooltip title="View Diamond">
        <p className="cart-text">
          {`${data?.color ?? ""}${data?.color ? "," : ""} ${data?.clarity ?? ""}${data?.cut ? "," : ""} ${data?.cut ?? ""}`}
        </p>
        </Tooltip>
        <Tooltip title="View Diamond">
        <p className="call-text">Call</p>
        </Tooltip>
        <div className="checkbox-ui" onClick={() => handleCheck(data)}>
          <FormControlLabel
            label=""
            control={
              <Checkbox
                checked={selectedDiamondList?.some(
                  (value: IDiamontDetails) =>
                    value?.diamondId === data?.diamondId
                )}
              />
            }
          />
          <span>ADD TO COMPARE</span>
        </div>
      </div>
    </div>
  );
};
export default DiamondDetailsCard;
