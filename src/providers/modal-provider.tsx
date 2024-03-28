'use client'

import { CardModal } from "@/components/organisms/Modal/CardModal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CardModal />
    </>
  )
}