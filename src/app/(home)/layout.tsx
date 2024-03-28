import { ModalProvider } from "@/providers/modal-provider"

function LayoutHome({children}:{children: React.ReactNode}) {
  return (
    <div>
            <ModalProvider />
        {children}
    </div>
    
  )
}

export default LayoutHome