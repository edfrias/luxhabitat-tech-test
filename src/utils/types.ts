export type Lead = {
  id: number;
  type: 'Buyer' | 'Seller' | 'Tenant';
  timestamp: string;
  lead_source: string;
  name: string;
  email: string;
  phone: string;
  property_id: number;
  property_location: string;
  agent_id: number;
};

export type Type = 'Buyer' | 'Seller' | 'Tenant';

export type LeadSource = 'Organic' | 'Direct' | 'Adwords';
