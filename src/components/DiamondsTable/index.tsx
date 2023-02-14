import { useEffect, useState } from "react";
import { diamondList } from "../../services/baseService";
import "./styles.css";
import VideoCamera from "../../assets/videoCamera.svg";
import Copy from "../../assets/copy.svg";
import viewIcon from "../../assets/viewIcon.svg";
import DropDown from "../DropDown";
import { DIAMOND_TABLE_HEADER, PER_PAGE } from "../../common/constants";
import AppsIcon from "@mui/icons-material/Apps";
import MenuIcon from "@mui/icons-material/Menu";
import {
  TextField,
  Pagination,
  Checkbox,
  FormControlLabel,
  PaginationItem,
  Tooltip
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import DiamondTableHeader from "../DiamondTableHeader";
import {
  Iascending,
  IDiamondListData,
  IDiamontDetails,
  ITableHeader,
} from "../../interface/filterModel";
import VideoPopup from "../VideoPopup";
import DiamondDetailsCard from "../DiamondDetailsCard";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";

const DiamondsTable: React.FC = () => {
  const [diamondListData, setDiamondListData] = useState<IDiamondListData>();
  const [diamondListPerPage, setDiamondListPerPage] = useState<number>(20);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedDiamondList, setSelectedDiamondList] = useState<
    IDiamontDetails[]
  >([]);
  const [ascending, setAscending] = useState<Iascending>({
    field: DIAMOND_TABLE_HEADER[0].label,
    isAscending: false,
  });
  const [isListView, setIsListView] = useState<boolean>(true);
  const [videoPopup, setVideoPopup] = useState<boolean>(false);
  const [selectedVideoURL, setSelectedVideoURL] = useState<string>("");

  const getDiamondList = async (): Promise<void> => {
    try {
      const res: IDiamondListData = await diamondList();
      setDiamondListData(res);
    } catch (error) {
      alert(error);
    }
  };

  const handleCheck = (data: any): void => {
    if (selectedDiamondList.length < 6) {
      if (
        selectedDiamondList.some(
          (value: any) => value?.diamondId === data?.diamondId
        )
      ) {
        setSelectedDiamondList(
          selectedDiamondList.filter(
            (x: any) => x?.diamondId !== data?.diamondId
          )
        );
      } else {
        setSelectedDiamondList([...selectedDiamondList, data]);
      }
    } else {
      alert(
        "You can select a maximum of 6 diamonds to compare! Please check your compare item page you have some items in your compare list."
      );
    }
  };

  const handleAscending = (data: boolean, field: string): void => {
    const ascendData: Iascending = {
      field: field,
      isAscending: data,
    };
    setAscending(ascendData);
  };

  const handleVideo = (data: string): void => {
    setSelectedVideoURL(data);
    setVideoPopup(true);
  };

  useEffect(() => {
    const findData: any = DIAMOND_TABLE_HEADER?.find(
      (data: ITableHeader) =>
        data?.label === ascending?.field || data?.value === ascending?.field
    );
    if (ascending?.isAscending) {
      const data = diamondListData?.diamondList.sort((a: any, b: any) =>
        a[findData.value] > b[findData.value]
          ? 1
          : a[findData.value] < b[findData.value]
            ? -1
            : 0
      );
      let cloneCobject: any = { ...diamondListData };
      cloneCobject["diamondList"] = data;
      setDiamondListData(cloneCobject);
    } else {
      const data = diamondListData?.diamondList.sort((a: any, b: any) =>
        a[findData.value] < b[findData.value]
          ? 1
          : a[findData.value] > b[findData.value]
            ? -1
            : 0
      );
      let cloneCobject: any = { ...diamondListData };
      cloneCobject["diamondList"] = data;
      setDiamondListData(cloneCobject);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ascending]);

  useEffect(() => {
    getDiamondList();
  }, []);

  return (
    <div className="diamondList-table-main">
      <div className="diamondList-header">
        <p className="count-text">
          <span className="count">{diamondListData?.count}</span> Similar
          Diamonds |Compare Items({selectedDiamondList?.length})
        </p>
        <div className="flex-wrap">
          <div className="diamondList-dropdown">
            <span>Per Page</span>
            <DropDown
              options={PER_PAGE}
              value={diamondListPerPage}
              handleChange={(event: any) =>
                setDiamondListPerPage(event.target.value)
              }
            />
          </div>
          {!isListView && (
            <div className="diamondList-dropdown">
              <DropDown
                options={DIAMOND_TABLE_HEADER}
                value={ascending.field}
                handleChange={(event: any) =>
                  setAscending({ ...ascending, field: event.target.value })
                }
              />
              {ascending?.isAscending ? (
                  <Tooltip title="Set Ascending Direction">
                <SouthIcon
                  onClick={() =>
                    setAscending({ ...ascending, isAscending: false })
                  }
                />
                </Tooltip>
              ) : (
                <Tooltip title="Set Descending Direction">
                <NorthIcon
                  onClick={() =>
                    setAscending({ ...ascending, isAscending: true })
                  }
                />
                </Tooltip>
              )}
            </div>
          )}
        </div>
        <div className="search-menu">
        <Tooltip title="Grid View">
          <AppsIcon
            className={!isListView ? "view" : ""}
            onClick={() => setIsListView(false)}
          />
          </Tooltip>
          <Tooltip title="List View">
          <MenuIcon
            className={isListView ? "view" : ""}
            onClick={() => setIsListView(true)}
          />
            </Tooltip>
          <div className="searchField">
            <TextField
              placeholder="Search Diamond Stack #"
              value={searchText}
              onChange={(e: any) => setSearchText(e.target.value)}
              className="textfield"
            />
              <Tooltip title="Search Diamond">
            <SearchIcon />
            </Tooltip>
          </div>
        </div>
      </div>
      {isListView ? (
        <table className="table-styles">
          <thead>
            <tr>
              <th>
                <img src={Copy} alt="Copy" width={30} height={30} />
              </th>
              {DIAMOND_TABLE_HEADER?.map((head: any, index: number) => {
                return (
                  <th key={index}>
                    <DiamondTableHeader
                      handleAscending={handleAscending}
                      ascending={ascending}
                      value={head}
                    />
                  </th>
                );
              })}
              <th>Video</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {diamondListData?.diamondList?.map(
              (data: IDiamontDetails, index: number) => {
                return (
                  <tr key={index}>
                    <td className="checkbox-ui1">
                      <FormControlLabel
                        label=""
                        control={
                          <Checkbox
                            checked={selectedDiamondList?.some(
                              (value: IDiamontDetails) =>
                                value?.diamondId === data?.diamondId
                            )}
                            onChange={() => handleCheck(data)}
                          />
                        }
                      />
                    </td>
                    <td>
                      <div className="align-space">
                        <img
                          src={data?.biggerDiamondimage}
                          alt="Logo"
                          width={30}
                          height={30}
                        />
                        <span>{data?.shape}</span>
                      </div>
                    </td>
                    <td>{data?.carat}</td>
                    <td>{data?.color}</td>
                    <td>{data?.clarity}</td>
                    <td>{data?.cut}</td>
                    <td>{data?.depth}</td>
                    <td>{data?.table}</td>
                    <td>{data?.polish ? data?.polish : "-"}</td>
                    <td>{data?.symmetry ? data?.symmetry : "-"}</td>
                    <td>{data?.measurement ? data?.measurement : "-"}</td>
                    <td>
                      {data?.certificateNo ? data?.certificateNo : "None"}
                    </td>
                    <td>Call</td>
                    <td>
                      {data?.videoFileName ? (
                        <img
                          src={VideoCamera}
                          alt="Video Camera"
                          width={30}
                          height={30}
                          className="cam"
                          onClick={() => handleVideo(data?.videoFileName)}
                        />
                      ) : (
                        ""
                      )}
                    </td>
                    <td>
                      <img
                        src={viewIcon}
                        className="view"
                        alt="View"
                        width={30}
                        height={30}
                      />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      ) : (
        <div className="card-view">
          {diamondListData?.diamondList?.map(
            (data: IDiamontDetails, index: number) => {
              return (
                <DiamondDetailsCard
                  key={index}
                  data={data}
                  selectedDiamondList={selectedDiamondList}
                  handleCheck={(data: IDiamontDetails) => handleCheck(data)}
                  handleVideo={(data: string) => handleVideo(data)}
                />
              );
            }
          )}
        </div>
      )}

      <div className="diamondList-footer">
        <button className="compare-btn" type="button">
          Compare({selectedDiamondList?.length})
        </button>
        <p>Results 1 to 20 of {diamondListData?.count} </p>
        <Pagination
          count={3}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          renderItem={(item: any) => (
            <PaginationItem
              slots={{
                first: KeyboardDoubleArrowLeftIcon,
                last: KeyboardDoubleArrowRightIcon,
              }}
              {...item}
            />
          )}
        />
      </div>
      {videoPopup && (
        <VideoPopup onClose={setVideoPopup} url={selectedVideoURL} />
      )}
    </div>
  );
};

export default DiamondsTable;
