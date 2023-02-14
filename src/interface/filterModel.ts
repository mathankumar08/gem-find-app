
export type filterData = {
  Cut: number[],
  Color: number[],
  Clarity: number[],
  Carat: number[],
  Polish: number[],
  Fluorescence: number[],
  Symmetry: number[]
}

export type cutType = {
  $id: string, cutId: string, cutName: string
}

export type clarityType = {
  $id: string, clarityId: string, clarityName: string
}

export type colorType = {
  $id: string, colorId: string, colorName: string
}

export type fluorescenceType = { $id: string, fluorescenceId: string, fluorescenceName: string }
export type symmteryType = { $id: string, symmetryId: string, symmteryName: string }
export type polishType = { $id: string, polishId: string, polishName: string }

export type mappingType = {
  cut: cutType[] | any[],
  clarity: clarityType[] | any[]
  color: colorType[] | any[]
}
export type advanceOptionType = {
  fluorescence: fluorescenceType[],
  symmtery: symmteryType[],
  polish: polishType[]
}

export type shapeType = {
  $id: string, shapeName: string, shapeImage: string
}

export type shapeOptionType = {
  shape: shapeType[]
}

export type Iascending = {
  field: string,
  isAscending: boolean,
}

export type IDiamontDetails = {
  "$id": string,
  "diamondId": string,
  "diamondImage": string,
  "pairDiamondId": number,
  "sku": string,
  "shape": string,
  "carat": string,
  "fancyColorMainBody": null,
  "fancyColorIntensity": null,
  "fancyColorOvertone": null,
  "color": string,
  "clarity": string,
  "cut": string,
  "inhouse": string,
  "depth": string,
  "table": string,
  "polish": string,
  "measurement": string,
  "cert": string,
  "certificateUrl": string,
  "price": string,
  "gridle": string,
  "culet": string,
  "symmetry": string,
  "fluorescence": string,
  "fltCrown": string,
  "txtPavillion": string,
  "intClarityPriority": string,
  "intColorPriority": string,
  "certlink": string,
  "dealerID": string,
  "realPrice": null,
  "dealerInventoryNo": string,
  "gfLinkID": string,
  "stones": string,
  "comments": string,
  "intOptimize": number,
  "sr_id": number,
  "intTotalRecords": number,
  "detailLinkText": string,
  "detailLinkURL": string,
  "queryStringValues": string,
  "txtCutGrade": string,
  "isCompared": string,
  "certificateNo": string,
  "fltCaratPrice": number,
  "ratio": number,
  "pairID": null,
  "txtInhouse": boolean,
  "origin": string,
  "detailPageURL": string,
  "hasVideo": boolean,
  "displayvendorsku": boolean,
  "videoFileName": string,
  "imageFileName": null,
  "isInternalonly": null,
  "inventoryRegion": string,
  "enhancements": string,
  "price1": string,
  "price2": string,
  "lotNumber": string,
  "additionalImage": null,
  "fltPrice": string,
  "fav_id": null,
  "isFavorite": boolean,
  "biggerDiamondimage": string,
  "colorDiamondImage": null,
  "currencyFrom": string,
  "currencySymbol": string,
  "isLabCreated": boolean,
  "girdleThin": string,
  "girdleThick": null,
  "country": null,
  "diamondListAdditionalInfo": {
    "$id": string,
    "tempVariable1": string
  },
  "showPrice": boolean,
  "cutGradeID": string,
  "dsEcommerce": boolean
}
export type IDiamont = IDiamontDetails[]

export type IDiamondListData = {
  $id: string,
  count: number,
  diamondList: IDiamont

}

export type ITableHeader = { label: string, value: string }


export type ICertificateRange = {
  $id: string,
  certificateName: string,
}

export type ICaratData = {
  $id: string,
  maxCarat: number
  minCarat: number
}
export type IDepthData = {
  $id: string,
  maxDepth: number
  minDepth: number
}
export type IPriceData = {
  $id: string,
  maxPrice: number
  minPrice: number
}