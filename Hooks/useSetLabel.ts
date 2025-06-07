import { useEffect, useRef } from "react";
import { useFormStore } from "@/lib/useFormData";
import React from 'react'
import { RefObject } from "react";

interface useSetLabelProps {
    id: string,
    labelRef: RefObject<HTMLInputElement | null>
}


function useSetLabel({ labelRef, id }: useSetLabelProps) {
    const { updateLabel} = useFormStore();

    useEffect(() => {
        if (labelRef.current?.value) {
            updateLabel(id, labelRef.current.value);
        }
    }, [labelRef.current?.value])

}


export default useSetLabel
