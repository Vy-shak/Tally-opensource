import {Minus,Equal,CircleCheck } from "lucide-react";
import { BlockType } from "@/types/formTypes";
import { FormStore } from "@/types/formTypes";
import { ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';

interface blockItems {
    id: string,
    icon:ReactElement,
    title:string,
    addItem:FormStore
}

const blockData:blockItems[] = [
    {   id:uuidv4(),
        icon: <Minus />,
        title: "short question",
        addItem:{id:1, type:BlockType.ShortQuestion, placeholder:"", label:"how is the josh",required:false}
    },
    {
        id:uuidv4(),   
        icon: <Equal />,
        title: "long question",
        addItem:{id:2, placeholder:"", type:BlockType.LongQuestion, label:"how is the josh",required:false}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "checkboxes",
        addItem:{id:3, type:BlockType.CheckBoxes, label:"how is the josh",required:false,options:[{checked:false,label:"option 1",checkId:uuidv4()}]}
    }
];

export {blockData}; 