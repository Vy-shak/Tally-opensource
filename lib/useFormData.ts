import {create} from 'zustand';
import { FormStore } from '@/types/formTypes';
import { BlockType } from '@/types/formTypes';

interface store {
    formData:FormStore|[],
    removeFormData:(block:any)=>void,
    addFormData:(block:any)=>void,
    updateLabel:(id:number,entry:string)=>void,
    removecheckBox:(checkBoxid)=>void
}



const useFormStore = create<store>((set) => ({
  formData:[{id:1, type:BlockType.ShortQuestion, label:"how is the josh",required:false},{id:2, type:BlockType.LongQuestion, label:"how is the josh",required:false}
    ,{id:3, type:BlockType.CheckBoxes, label:"how is the josh",required:false,options:[{checked:false,label:"option 1",id:1},{checked:false,label:"option 2",id:2}]}
  ],
  addFormData: (block) => set((state) => ({ formData: [...state.formData, block] })),
  removeFormData:(id:number)=> set((state)=>({formData:state.formData.filter((item)=>item.id!==id)})),
  updateLabel:(id:number,entry:string)=>set((state)=>({formData:state.formData.map((item)=>item.id===id?{...item,label:entry}:item)})),
  removecheckBox:
}));

export { useFormStore};