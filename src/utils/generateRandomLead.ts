import { faker } from '@faker-js/faker';
import { Lead, Type, LeadSource } from './types';

function generateRandomType() {
  const types = ['Buyer', 'Seller', 'Tenant'];
  return types[Math.floor(Math.random() * types.length)] as Type;
}

function generateRandomLeadSource() {
  const leadSources = ['Organic', 'Direct', 'Adwords'];
  return leadSources[
    Math.floor(Math.random() * leadSources.length)
  ] as LeadSource;
}

function generateRandomDate() {
  const date = faker.date.past();

  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}

function generateRandomName() {
  const names = [
    'Alex Johnson',
    'Sarah Williams',
    'Michael Davis',
    'Emma Brown',
    'Daniel Clark',
    'Olivia Smith',
    'William Johnson',
    'Sophia Taylor',
    'David Anderson',
    'Nora Davis',
    'Jason Miller',
    'Grace Robinson',
  ];

  return names[Math.floor(Math.random() * names.length)];
}

function generateRandomEmail() {
  const emails = [
    'alex.johnson@example.com',
    'sarah.williams@example.com',
    'michael.davis@example.com',
    'emma.brown@example.com',
    'daniel.clark@example.com',
    'olivia.smith@example.com',
    'william.johnson@example.com',
    'sophia.taylor@example.com',
    'david.anderson@example.com',
    'nora.davis@example.com',
    'jason.miller@example.com',
    'grace.robinson@example.com',
  ];

  return emails[Math.floor(Math.random() * emails.length)];
}

function generateRandomLead(): Lead {
  return {
    id: faker.number.int(),
    type: generateRandomType(),
    timestamp: generateRandomDate(),
    lead_source: generateRandomLeadSource(),
    name: generateRandomName(),
    email: generateRandomEmail(),
    phone: faker.phone.number(),
    property_id: faker.number.int(),
    property_location: 'DIFC Central Park',
    agent_id: faker.number.int(),
  };
}

export default generateRandomLead;
