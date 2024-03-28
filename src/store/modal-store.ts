import { ModalType, User } from "@/models";
import { Formulario } from "@/models/Formulario"
import { create } from 'zustand'


interface ModalData {
  user?: User
  form?: Formulario
}

interface ModalStore {
  data: ModalData
  type: ModalType | null;
  isOpen: boolean;
  onOpen: (type: ModalType, workType?: string) => void;
  workType: string;
  setWorkType: (workType:string) => void;
  onClose: () => void;
}
export const useModal = create<ModalStore>((set) => ({
  data: {},
  type: null,
  isOpen: false,
  onOpen: (type) => set({ isOpen: true, type }),
  onClose: () => set({ type: null, isOpen: false }),
  workType: '',
  setWorkType: (workType) => set({ workType })
}));
