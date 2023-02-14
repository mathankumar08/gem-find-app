import { Box } from "@mui/material";
import Slider from "@mui/material/Slider/Slider"
import InfoIcon from '@mui/icons-material/Info';
import './styles.css'
import { useState } from "react";
import { clarityType, colorType, cutType, fluorescenceType, polishType, symmteryType } from "../../interface/filterModel";

type styling = {
    display: string,
    height: string,
    width?: string
}
type tprop = {
    name: string
    data: cutType[] | clarityType[] | colorType[] | fluorescenceType[] | symmteryType[] | polishType[]
}
const MultiRangeSelect: React.FC<tprop> = ({ name, data }) => {
    let sliderstyle: styling = { display: "flex", height: '10px' }
    const customMarks = data.map((data: any, index: number) => {
        return { value: index, label: data[`${name}Name`] }
    })
    const [value, setValue] = useState<number | number[]>([0, 13])
    const changeValue = (evt: any, data: number | number[]) => {
        setValue(data)
    }

    return (<>

        {customMarks &&
            <Box display="grid" gridTemplateColumns={'1fr 5fr'}
                sx={{
                    padding: '10px 50px 20px 0px',
                    bgcolor: '#fafafa'
                }}
            >
                <span className="filterlabel">{name}<InfoIcon style={{ marginLeft: '5px' }} /></span>
                <div>
                    <Slider
                        sx={{
                            color: '#828282',

                            '& .MuiSlider-markActive': {
                                height: 'inherit',
                                width: '3px',
                                color: 'antiquewhite',
                            },
                            '& .MuiSlider-track': {
                                border: 'none !important'
                            },
                            '& .MuiSlider-markLabel': {
                                margin: '0px 5%  !important'
                            },
                        }}
                        style={sliderstyle}
                        min={1}
                        max={customMarks.length}
                        step={1}
                        value={value}
                        marks={customMarks}
                        onChange={changeValue}
                    />
                </div>
            </Box>}
    </>
    )
}
export default MultiRangeSelect