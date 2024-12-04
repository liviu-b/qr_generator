import { Contact } from '../types/Contact';

export const generateVCardData = (contact: Contact): string => {
  const vCard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.firstName} ${contact.lastName}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL:${contact.email}`,
    contact.company ? `ORG:${contact.company}` : '',
    contact.title ? `TITLE:${contact.title}` : '',
    'END:VCARD'
  ].filter(Boolean).join('\n');

  return vCard;
};