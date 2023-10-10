import { defineStore } from 'pinia';
import { TableDataItem } from '../components/Types/types';

type State = {
  modalOpen: boolean;
  lead: Partial<TableDataItem> | undefined;
  leads: Partial<TableDataItem>[];
};

export const useModal = defineStore('modal', {
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
      if (lead) {
        this.lead = lead;
        this.leads.unshift(lead);
      }
    },
    setLeadsData(leads: TableDataItem[]): void {
      this.leads = [...this.leads, ...leads];
    },
  },
  getters: {
    getModalOpen(state): boolean {
      return state.modalOpen;
    },
    getLeadData(state): Partial<TableDataItem> | undefined {
      return state.lead;
    },
    getLeadsData(state): Partial<TableDataItem>[] {
      return state.leads;
    },
  },
});
