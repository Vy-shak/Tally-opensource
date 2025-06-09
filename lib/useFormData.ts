import { create } from 'zustand';
import { FormStore } from '@/types/formTypes';
import { BlockType } from '@/types/formTypes';
import { v4 as uuidv4 } from 'uuid';
import { pol } from '@/types/formTypes';

interface store {
  formData: FormStore[],
  removeFormData: (block: any) => void,
  addFormData: (block: any) => void,
  updateLabel: (id: string, entry: string) => void,
  updatePlaceholder: (id: string, entry: string) => void,
  addCheckbox: (id: string) => void
  updateCheckbox: (id: string, checkId: string, entry: string) => void
  deleteCheckbox: (id: string, checkId: string) => void
  updateYesorNo: (id: string, entry: pol) => void
}

const start:FormStore[] = [{id:"Heading1", type:BlockType.Heading1, label:"Type heading",required:false},{id:"shortquestion", type:BlockType.ShortQuestion, placeholder:"", label:"how is the josh",required:false}]



const useFormStore = create<store>((set) => ({
  formData: start,
  addFormData: (block) => set((state) => ({ formData: [...state.formData, block] })),
  removeFormData: (id: string) => set((state) => ({ formData: state.formData.filter((item) => item.id !== id) })),
  updateLabel: (id: string, entry: string) => set((state) => ({ formData: state.formData.map((item) => item.id === id ? { ...item, label: entry } : item) })),
  updatePlaceholder: (id: string, entry: string) => set((state) => ({ formData: state.formData.map((item) => item.id === id ? { ...item, placeholder: entry } : item) })),
  addCheckbox: (id) =>
    set((state) => ({
      formData: state.formData.map((item) => {
        if (item.id === id && item.type === BlockType.CheckBoxes) {
          const updatedCheckBoxes = [
            ...item.options,
            { checked: false, label: 'option', checkId: uuidv4() },
          ];
          return { ...item, options: updatedCheckBoxes };
        }
        return item;
      }),
    })),

  updateCheckbox: (id, checkId, entry) =>
    set((state) => ({
      formData: state.formData.map((item) => {
        if (item.id === id && item.type === BlockType.CheckBoxes) {
          const updatedOptions = item.options.map((opt) => {
            return opt.checkId === checkId ? { ...opt, label: entry } : opt
          }

          );
          return { ...item, options: updatedOptions };
        }
        return item;
      }),
    })),


  deleteCheckbox: (id, checkId) =>
    set((state) => ({
      formData: state.formData.map((item) => {
        if (item.id === id && item.type === BlockType.CheckBoxes) {
          const updatedOptions = item.options.filter((opt) => {
            return opt.checkId !== checkId
          }
          );
          return { ...item, options: updatedOptions };
        }
        return item;
      }),
    })),


  updateYesorNo: (id, entry) =>
    set((state) => ({
      formData: state.formData.map((item) => {
        if (item.id === id && item.type === BlockType.YesorNo) {
          const updatedState = {...item,selected:entry}
          return updatedState;
        }
        return item;
      }),
    })),
  
  

}));

export { useFormStore };