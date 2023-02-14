import Info from "@mui/icons-material/Info"
import { shapeOptionType, shapeType } from "../../interface/filterModel"
import './styles.css'
type tprops = {
    data: shapeOptionType
}
const ShapeContainer: React.FC<tprops> = ({ data }) => {

    return (
        <div className="shapeContainer">
            <span className="title">Shape <Info /></span>
            {
                data.shape.map((x: shapeType) =>
                    <span className="imgcontainer" key={x.$id} style={{ backgroundImage: `url(${x.shapeImage})` }}><p>{x.shapeName}</p></span>
                )
            }
        </div>
    )
}
export default ShapeContainer