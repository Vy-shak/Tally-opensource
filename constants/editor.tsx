import {Minus,Equal,CircleCheck } from "lucide-react";
import { BlockType } from "@/types/formTypes";
import { FormStore } from "@/types/formTypes";
import { ReactElement } from "react";

interface blockItems {
    id:number,
    icon:ReactElement,
    title:string,
    addItem:FormStore
}

const blockforms:blockItems[] = [
    {   id:1,
        icon: <Minus />,
        title: "short answer",
        addItem:{id:1, type:BlockType.ShortQuestion, label:"how is the josh",required:false}
    },
    {
        id:2,   
        icon: <Equal />,
        title: "short answer",
        addItem:{id:2, type:BlockType.LongQuestion, label:"how is the josh",required:false}
    },
    {
        id:3,
        icon: <CircleCheck />,
        title: "short answer",
        addItem:{id:3, type:BlockType.CheckBoxes, label:"how is the josh",required:false,options:[{checked:false,label:"option 1",id:1},{checked:false,label:"option 2",id:2}]}
    }
];

export {blockforms}; 