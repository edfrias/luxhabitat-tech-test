import { defineStore } from 'pinia';
import { TableDataItem } from '../components/Types/types';

type State = {
  modalOpen: boolean;
  lead: Partial<TableDataItem> | undefined;
  leads: Partial<TableDataItem>[];
};

export const useStore = defineStore('modal', {
  state: (): State => ({
    modalOpen: false,
    lead: undefined,
    leads: [],
  }),
  actions: {
    setModalOpen(modalOpen: boolean): void {
      this.modalOpen = modalOpen;
    },
    setLeadData(lead: Partial<TableDataItem>): void {
      this.leads = [lead, ...this.leads];
    },
    setLeadsData(leads: TableDataItem[]): void {
      this.leads = [...this.leads, ...leads];
    },
  },
  getters: {
    getModalOpen(state): boolean {
      return state.modalOpen;
    },
    getLeadsData(state): Partial<TableDataItem>[] {
      return state.leads;
    },
  },
});
