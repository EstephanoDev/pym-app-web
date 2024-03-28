'use client'

import { Button } from '@/components/ui/button'
import { useModal } from '@/store'
import React from 'react'

function HomePage() {
    const {onOpen} = useModal()
  return (
    <div>
<Button onClick={() => onOpen('cardModal')}>Enviar</Button>
    </div>
  )
}

export default HomePage