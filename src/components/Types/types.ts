export enum LeadType {
  BUYER = 'buyer',
  SELLER = 'seller',
  TENANT = 'tenant',
}

export enum LeadSource {
  DIRECT = 'Direct',
  ADWORDS = 'Adwords',
  ORGANIC = 'Organic',
}

export interface TableDataItem {
  id: number;
  type: string;
  timestamp: string;
  lead_source: string;
  name: string;
  email: string;
  phone: string;
  property_id: number;
  property_location: string;
  agent_id: number;
}

export enum HouseAvailability {
  READY = 'ready',
  NOT_READY = 'not ready',
}
