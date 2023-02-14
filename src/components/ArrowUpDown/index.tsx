import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Iascending } from "../../interface/filterModel";
import "./styles.css";

type TArrow = {
  onChange: (value: boolean) => void
  value: Iascending
  label: string
};

const ArrowUpDown: React.FC<TArrow> = ({ value, onChange, label }) => {

  return (
    <div className="arrow-up-down">
      {(label === value?.field && value !== undefined) ?
        <>
          {!value?.isAscending && <div className="logo-wrap" onClick={() => onChange(!value?.isAscending)}>
            <ArrowDropUpIcon />
          </div>
          }
          {value?.isAscending && <div className="logo-wrap" onClick={() => onChange(!value?.isAscending)}>
            <ArrowDropDownIcon />
          </div>}
        </> :
        <>
          <div className="logo-wrap" onClick={() => onChange(value?.isAscending ? !value?.isAscending : false)}>
            <ArrowDropUpIcon />
          </div>
          <div className="logo-wrap" onClick={() => onChange(value?.isAscending ? !value?.isAscending : true)}>
            <ArrowDropDownIcon />
          </div>
        </>
      }
    </div>
  );
};
export default ArrowUpDown;
