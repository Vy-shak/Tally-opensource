export enum BlockType {
    ShortQuestion = "shortQuestion",
    LongQuestion = "longQuestion",  
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

export type FormStore = (shortQuestion | LongQuestion)[]

