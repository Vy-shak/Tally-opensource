export enum BlockType {
    ShortQuestion = "shortQuestion",
    LongQuestion = "longQuestion",
    CheckBoxes = "checkBoxes", 
}

interface shortQuestion {
    id:number,
    type:BlockType.ShortQuestion,
    label:string,
    placeholder:string
    required:boolean,
}

interface LongQuestion {
    id:number,
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

export type FormStore = shortQuestion | LongQuestion| CheckBoxes

