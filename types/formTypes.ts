export enum BlockType {
    ShortQuestion = "shortQuestion",
    LongQuestion = "longQuestion",
    CheckBoxes = "checkBoxes",
    YesorNo="yesOrno",
    rating = "rating",
    Heading1 = "heading1",
    Heading2 = "heading2",
    Heading3 = "heading3",
}

export enum pol {
  Yes = "yes",
  No = "no",
  none= "none"
}

interface shortQuestion {
    id:string,
    type:BlockType.ShortQuestion,
    label:string,
    placeholder:string
    required:boolean,
}

interface LongQuestion {
    id:string,
    type:BlockType.LongQuestion,
    label:string,
    placeholder:string,
    required:boolean,
}

interface CheckBoxes {
    id:string,
    type:BlockType.CheckBoxes,
    label:string,
    required:boolean,
    options:{checked:boolean,label:string,checkId:string}[]  
}

interface yesOrno {
    id:string,
    type:BlockType.YesorNo,
    label:string,
    required:boolean,
    selected: pol
}

interface rating {
    id:string,
    type:BlockType.rating,
    label:string,
    required:boolean,
    starsNo:number
}

interface Heading {
    id:string,
    type:BlockType.Heading1 | BlockType.Heading2 | BlockType.Heading3,
    label:string,
    required:boolean}

export type FormStore = shortQuestion | LongQuestion| CheckBoxes | yesOrno | rating | Heading

