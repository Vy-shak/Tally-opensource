import {create} from "zustand"

enum status{
    open="OPEN",
    closed="CLOSED"
}

enum popuptype {
    AddBlocks='ADDBLOCKS',
    signup = 'SIGNUP'
}

interface entryprop {
    type:popuptype,
    status:status
}

type popupstore ={
    popupstatus: null | entryprop;
    updatePopup:(entry:entryprop | null)=>void;
}

const usePopup = create<popupstore>()((set) => ({
  popupstatus: null,
  updatePopup: (entry: entryprop | null) => set((state) => ({
    popupstatus: entry
  })),
}));

export {usePopup,status,popuptype}

