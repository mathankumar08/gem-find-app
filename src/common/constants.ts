import { AxiosError } from "axios";
import { ITableHeader } from "../interface/filterModel";

export const NAVIGATION = "https://api.jewelcloud.com/api/RingBuilder/GetNavigation?DealerId=1089";
export const FILTER = "https://api.jewelcloud.com/api/RingBuilder/GetDiamondFilter?DealerId=1089";
export const DIAMOND_LIST = "https://api.jewelcloud.com/api/RingBuilder/GetDiamond?DealerId=1089";
export const DIAMOND_DETAIL = " https://api.jewelcloud.com/api/RingBuilder/GetDiamondDetail?DealerId=1089&DID=281064110";

export const parseAxiosError = (error: AxiosError): any => {
  if (error.isAxiosError && error.response) {
    return { status: 'Failure', message: error.message, error, data: {} };
  }
  return { status: 'Failure', message: error.message, error, data: {} };
};

export const STATUS = {
  SUCCESS: "success",
  FAILURE: "failure",
};

export const tabMenu: any = ['Mined', 'Lab Grown', 'Fancy Color', 'Compare']

export const PER_PAGE: number[] = [20, 50, 100]

export const DIAMOND_TABLE_HEADER: ITableHeader[] = [
  { label: "Shape", value: "shape" },
  { label: "Carat", value: "carat" },
  { label: "Color", value: "color" },
  { label: "Clarity", value: "clarity" },
  { label: "Cut", value: "cut" },
  { label: "Depth", value: "depth" },
  { label: "Table", value: "table" },
  { label: "Polish", value: "polish" },
  { label: "Sym.", value: "symmetry" },
  { label: "Measurement", value: "measurement" },
  { label: "Cert.", value: "certificateNo" },
  { label: "Price", value: "price" },
];