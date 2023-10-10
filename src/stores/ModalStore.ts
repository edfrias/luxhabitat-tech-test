import { defineStore } from 'pinia';
import { TableDataItem } from '../components/Types/types';

type Lead = TableDataItem | undefined;

type State = {
  modalOpen: boolean;
  lead: Lead;
  leads: TableDataItem[];
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
    setLeadData(lead: Lead): void {
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
    getLeadData(state): Lead {
      return state.lead;
    },
    getLeadsData(state): TableDataItem[] {
      return state.leads;
    },
  },
});
