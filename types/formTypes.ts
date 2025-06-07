export enum BlockType {
    ShortQuestion = "shortQuestion",
    LongQuestion = "longQuestion",
    CheckBoxes = "checkBoxes",
    YesorNo="yesOrno"
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

export type FormStore = shortQuestion | LongQuestion| CheckBoxes | yesOrno

