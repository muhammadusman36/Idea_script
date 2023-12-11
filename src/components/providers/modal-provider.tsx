"use client"

import { useEffect,useState } from "react"

import SettingsModal from "@/components/models/settings-modal" 

import React from 'react'
import { CoverImageModal } from "@/components/models/cover-image-modal"

export default function ModalProvider() {
const [isMounted,setIsMounted] = useState(false)

useEffect(()=>{
    setIsMounted(true)
},[])

if(!isMounted){
    return null
}

  return (
    <>
    <SettingsModal />
    <CoverImageModal />
    </>
  )
}
