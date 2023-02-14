import './styles.css'
type tprops = {
    type: string
    name: string
    value: number | string
    min: number
    max: number
    changeValue: (e: any) => void
}
const Input: React.FC<tprops> = ({ type, name, value, min, max, changeValue }) => {
    return (
        <input type={type} name={name} value={value} onChange={(e: any) => changeValue(e)} className='edit' max={max} min={min} />
    )
}
export default Input