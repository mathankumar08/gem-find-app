import { Iascending } from "../../interface/filterModel";
import ArrowUpDown from "../ArrowUpDown";
import "./styles.css";

type TArrow = {
  handleAscending: (value: boolean, a: string) => void,
  ascending: Iascending,
  value: { value: string, label: string }
};

const DiamondTableHeader: React.FC<TArrow> = ({ handleAscending, ascending, value }) => {
  return (
    <div className="text-arrow">
      <span>{value?.label}</span>
      <ArrowUpDown
        label={value?.value}
        value={ascending}
        onChange={(data: boolean) => handleAscending(data, value?.value)}
      />
    </div>
  );
};

export default DiamondTableHeader;