export enum BlockType {
    ShortQuestion = "shortQuestion",
    LongQuestion = "longQuestion",
    CheckBoxes = "checkBoxes", 
}

interface shortQuestion {
    id:number,
    type:BlockType.ShortQuestion,
    label:string,
    required:boolean,
}

interface LongQuestion {
    id:number,
    type:BlockType.LongQuestion,
    label:string,
    required:boolean,
}

interface CheckBoxes {
    id:number,
    type:BlockType.CheckBoxes,
    label:string,
    required:boolean,
    options:{checked:boolean,label:string,id:number}[]  
}

export type FormStore = (shortQuestion | LongQuestion| CheckBoxes)[]

