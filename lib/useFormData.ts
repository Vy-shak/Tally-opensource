import {create} from 'zustand';
import { FormStore } from '@/types/formTypes';
import { BlockType } from '@/types/formTypes';

interface store {
    formData:FormStore[]|[],
    removeFormData:(block:any)=>void,
    addFormData:(block:any)=>void,
    updateLabel:(id:number,entry:string)=>void,
    updatePlaceholder:(id:number,entry:string)=>void
}



const useFormStore = create<store>((set) => ({
  formData:[],
  addFormData: (block) => set((state) => ({ formData: [...state.formData, block] })),
  removeFormData:(id:number)=> set((state)=>({formData:state.formData.filter((item)=>item.id!==id)})),
  updateLabel:(id:number,entry:string)=>set((state)=>({formData:state.formData.map((item)=>item.id===id?{...item,label:entry}:item)})),
  updatePlaceholder:(id:number,entry:string)=>set((state)=>({formData:state.formData.map((item)=>item.id===id?{...item,placeholder:entry}:item)}))
}));

export { useFormStore};