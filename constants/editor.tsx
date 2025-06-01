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
        title: "short question",
        addItem:{id:1, type:BlockType.ShortQuestion, placeholder:"", label:"how is the josh",required:false}
    },
    {
        id:2,   
        icon: <Equal />,
        title: "long question",
        addItem:{id:2, placeholder:"", type:BlockType.LongQuestion, label:"how is the josh",required:false}
    },
    {
        id:3,
        icon: <CircleCheck />,
        title: "checkboxes",
        addItem:{id:3, type:BlockType.CheckBoxes, label:"how is the josh",required:false,options:[{checked:false,label:"option 1",id:1},{checked:false,label:"option 2",id:2}]}
    }
];

export {blockforms}; 