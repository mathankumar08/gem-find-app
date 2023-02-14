import { MenuItem, Select } from "@mui/material";
import { ITableHeader } from "../../interface/filterModel";
import "./styles.css";

type TDropDown = {
  options: number[] | ITableHeader[];
  value: number | string;
  handleChange: (value: Event) => void
};

const DropDown: React.FC<TDropDown> = ({
  options,
  handleChange,
  value,
}) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      onChange={(e: any) => handleChange(e)}
    >
      {options?.map((option: number | ITableHeader) => {
        return (
          <MenuItem className="select-option" value={typeof (option) === "number" ? Number(option) : option.label} key={"nb"}>{typeof (option) === "number" ? Number(option) : option.label}</MenuItem>
        );
      })}
    </Select>
  );
};

export default DropDown;