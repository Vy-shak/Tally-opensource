import {create} from 'zustand';
import { FormStore } from '@/types/formTypes';
import { BlockType } from '@/types/formTypes';
import { v4 as uuidv4 } from 'uuid';

interface store {
    formData:FormStore[]|[],
    removeFormData:(block:any)=>void,
    addFormData:(block:any)=>void,
    updateLabel:(id:number,entry:string)=>void,
    updatePlaceholder:(id:number,entry:string)=>void,
    addCheckbox:(id:number)=>void
}



const useFormStore = create<store>((set) => ({
  formData:[],
  addFormData: (block) => set((state) => ({ formData: [...state.formData, block] })),
  removeFormData:(id:number)=> set((state)=>({formData:state.formData.filter((item)=>item.id!==id)})),
  updateLabel:(id:number,entry:string)=>set((state)=>({formData:state.formData.map((item)=>item.id===id?{...item,label:entry}:item)})),
  updatePlaceholder:(id:number,entry:string)=>set((state)=>({formData:state.formData.map((item)=>item.id===id?{...item,placeholder:entry}:item)})),
  addCheckbox:(id:number)=>set((state)=>({formData:state.formData.map((item)=>{
    if (item.id === id&&item.type==BlockType.CheckBoxes) {
      const checkBoxes = item.options;
      const updatedCheckBoxes = [
          ...checkBoxes,
          { checked: false, label: 'option', checkId: uuidv4() },
        ];
      return {...item,options:updatedCheckBoxes}
    }
    return item
  })}))
}));

export { useFormStore};