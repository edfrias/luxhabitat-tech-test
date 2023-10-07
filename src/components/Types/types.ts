enum LeadType {
  BUYER = 'buyer',
  SELLER = 'seller',
  TENANT = 'tenant',
}
export interface TableDataItem {
  id: number;
  type: LeadType;
  timestamp: string;
  lead_source: string;
  name: string;
  email: string;
  phone: string;
  property_id: number;
  agent_id: number;
}

export enum HouseAvailability {
  READY = 'ready',
  NOT_READY = 'not ready',
}
