import {Minus,Equal,CircleCheck } from "lucide-react";
import { BlockType } from "@/types/formTypes";
import { FormStore } from "@/types/formTypes";
import { ReactElement } from "react";
import { v4 as uuidv4 } from 'uuid';
import { pol } from "@/types/formTypes";

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
        addItem:{id:"shortquestion", type:BlockType.ShortQuestion, placeholder:"", label:"how is the josh",required:false}
    },
    {
        id:uuidv4(),   
        icon: <Equal />,
        title: "long question",
        addItem:{id:"long question", placeholder:"", type:BlockType.LongQuestion, label:"how is the josh",required:false}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "checkboxes",
        addItem:{id:"checkboxes", type:BlockType.CheckBoxes, label:"how is the josh",required:false,options:[{checked:false,label:"option 1",checkId:uuidv4()}]}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "yes or No",
        addItem:{id:"yesorNo", type:BlockType.YesorNo, label:"how is the josh",required:false,selected:pol.none}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "rating",
        addItem:{id:"rating", type:BlockType.rating, label:"how is the josh",required:false, starsNo:5}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "Heading 1",
        addItem:{id:"Heading1", type:BlockType.Heading1, label:"Type heading",required:false,}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "Heading 2",
        addItem:{id:"Heading1", type:BlockType.Heading2, label:"Type heading",required:false,}
    },
    {
        id:uuidv4(),
        icon: <CircleCheck />,
        title: "Heading 3",
        addItem:{id:"Heading1", type:BlockType.Heading3, label:"Type heading",required:false,}
    }
];

export {blockData}; 