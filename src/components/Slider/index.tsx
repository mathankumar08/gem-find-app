import { Box, Slider } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";
import Input from "../Input";
import './styles.css'

type tprops = {
    name: string
    max: number
    min: number
}

const UniSlider: React.FC<tprops> = ({ name, max, min }) => {
    const [value, setValue] = useState<number | number[]>([min, max])
    
    const handleChange = (ev: any, data?: any) => {
        let temp: any = JSON.parse(JSON.stringify(value))
        if (ev.target.name === 'min') {

            Array.isArray(temp) ? temp[0] = Number(ev.target.value) : temp = ev.target.value
        }
        else if (ev.target.name === 'max') {

            Array.isArray(temp) ? temp[1] = Number(ev.target.value) : temp = ev.target.value
        }
        else {
            temp = data
        }
        setValue(temp)
    }

    return (
        <Box display="grid" gridTemplateColumns={'1fr 5fr'}
            sx={{
                padding: '10px 50px 20px 0px',
                bgcolor: '#fafafa'
            }}
        >
            <span className="filterlabel">{name}<InfoIcon style={{ marginLeft: '5px' }} /></span>
            <div className="sliderContainer">
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
                    min={min}
                    max={max}
                    step={min > 0 ? min : 1}
                    value={value}
                    onChange={handleChange}
                />
                <div className="inputs">
                    <Input type='number' name='min' value={Array.isArray(value) ? value[0] : value} changeValue={handleChange} min={min} max={max} />
                    <Input type='number' name='max' value={Array.isArray(value) ? value[1] : value} changeValue={handleChange} min={min} max={max} />
                </div>
            </div>

        </Box>
    )
}
export default UniSlider