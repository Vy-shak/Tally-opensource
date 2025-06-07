import { useEffect } from "react";
import { useFormStore } from "@/lib/useFormData";
import { RefObject } from "react";

interface placeholderProps {
    id:string,
    placeholderRef:RefObject<HTMLTextAreaElement | HTMLInputElement | null>
}

function useSetplaceHolder({placeholderRef,id}:placeholderProps) {
    const { updatePlaceholder} = useFormStore();
    useEffect(()=>{
        if (placeholderRef.current?.value) {
            updatePlaceholder(id,placeholderRef.current.value)
        }
    },[placeholderRef.current?.value])
}


export {useSetplaceHolder}