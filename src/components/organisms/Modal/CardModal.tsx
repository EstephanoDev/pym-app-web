'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'

import { useModal, useDataStore } from '@/store'
import { filterByWorkType } from '@/utilities/weeklyData'

export const CardModal = () => {
  const { isOpen, onClose, type, workType } = useModal()
  const { weekly, monthly } = useDataStore()
  
 const WeekWorkData = filterByWorkType(weekly, workType)

  const isModalOpen = isOpen && type === 'cardModal';

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className=' bg-slate-800 p-0 text-white overflow-hidden'>
        <DialogHeader className='pt-8 px-6'>
          <DialogDescription className='text-center text-zinc-400'>
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center justify-center text-center'>
          {workType}
        </div>
      </DialogContent>
    </Dialog>
  )
}
