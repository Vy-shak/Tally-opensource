import React from 'react'
import { createPortal } from 'react-dom'


interface ModalProps {
    children: React.ReactNode,
}

export default function Popup({ children }: ModalProps) {


    return createPortal(
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}   className='w-full p-20 z-50 absolute top-0  h-screen flex items-start justify-center'>
            {children}
        </div>,
        document.body
    )
}