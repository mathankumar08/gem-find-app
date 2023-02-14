import Tab from "../../components/Tab";
import "./styles.css";
import { filterPilot } from "../../services/baseService";
import MultiRangeSelect from "../../components/MultiBreakSlider";
import ShapeContainer from "../../components/ShapeContainer";
import {
  advanceOptionType,
  ICaratData,
  IDepthData,
  IPriceData,
  mappingType,
  shapeOptionType,
} from "../../interface/filterModel";
import { useState, useEffect } from "react";
import {
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  Select,
  OutlinedInput,
  Skeleton,
} from "@mui/material";
import { Box } from "@mui/system";
import UniSlider from "../../components/Slider";

const FilterForm: React.FC = () => {
  const [showAdvance, setShowAdvance] = useState<boolean>(false);
  const [advancedOption, setAdvancedOption] = useState<
    advanceOptionType | any
  >();
  const [mapingData, setMappingData] = useState<mappingType | any>({
    clarity: [],
    color: [],
    cut: [],
  });
  const [depth, setDepth] = useState<IDepthData>()
  const [carat, setCarat] = useState<ICaratData>()
  const [shapeData, setShapeData] = useState<shapeOptionType | any>();
  const [certificateRange, setCertificateRange] = useState<any>([]);
  const [price, setPrice] = useState<IPriceData>()
  const [selectedCertificateRange, setSelectedCertificateRange] = useState<
    any[]
  >([]);

  const getBasicDetails = async (): Promise<void> => {
    const data = await filterPilot();

    if (data[0]["status"] === "1") {
      const {
        clarityRange,
        colorRange,
        cutRange,
        fluorescenceRange,
        polishRange,
        shapes,
        symmetryRange,
        certificateRange,
        caratRange,
        depthRange,
        priceRange
      } = data[1][0];

      setMappingData({
        cut: cutRange,
        clarity: clarityRange,
        color: colorRange,
      });
      setAdvancedOption({
        polish: polishRange,
        fluorescence: fluorescenceRange,
        symmtery: symmetryRange,
      });
      setShapeData({ shape: shapes });
      setCertificateRange(certificateRange)
      setCarat(caratRange[0])
      setDepth(depthRange[0])
      setPrice(priceRange[0])
    }
  };

  const handleChange = (event: any) => {
    setSelectedCertificateRange(event.target.value)
  };

  useEffect(() => {
    getBasicDetails();
  }, []);

  return (
    <div className="container">
      <Tab />
      {shapeData && <ShapeContainer data={shapeData} />}
      {mapingData &&
        Object.keys(mapingData).map((x: any) => (
          <MultiRangeSelect name={x} data={mapingData[x]} />
        ))}
      <div style={{ maxWidth: '50%' }}>{carat ? <UniSlider min={Number(carat.minCarat)} max={Number(carat.maxCarat)} name={"Carat"} /> : <Skeleton animation="wave" />}</div>
      <div className="additional-text"><button className="additional" onClick={() => setShowAdvance(!showAdvance)} type='button'>{showAdvance ? '-':'+'}</button> Advanced Search</div>
      {showAdvance
        ? <>
          <div style={{ display: 'flex' }}>{depth ? <UniSlider min={Number(depth.minDepth)} max={Number(depth.maxDepth)} name={"Depth"} /> : <Skeleton animation="wave" />}{price ? <UniSlider min={Number(price.minPrice)} max={Number(price.maxPrice)} name={"Price"} /> : <Skeleton animation="wave" />}</div>
          {advancedOption &&
            Object.keys(advancedOption).map((x: any) => (
              <MultiRangeSelect name={x} data={advancedOption[x]} />
            ))}</>
        : null}
      {(showAdvance && advancedOption) && <Box display="grid" gridTemplateColumns={'1fr 5fr'}
        sx={{
          padding: '10px 50px 20px 0px',
          bgcolor: '#fafafa'
        }}>
        <span className="filterlabel">Certificates</span>
        <div className="drop-down">
          <FormControl>
            <Select
              id="demo-mutiple-checkbox"
              multiple
              value={selectedCertificateRange}
              name="first"
              placeholder="Select Certificate "
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) =>
                selected?.map((obj: any) => obj).join(", ")
              }
            >
              {certificateRange &&
                certificateRange?.map((name: any) => (
                  <MenuItem key={name.$id} value={name.certificateName}>
                    <Checkbox
                      checked={selectedCertificateRange?.includes(
                        name?.certificateName
                      )}
                    />
                    <ListItemText primary={name.certificateName} />
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </Box>}
    </div>
  );
};

export default FilterForm;
