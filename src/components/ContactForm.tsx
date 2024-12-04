import React from 'react';
import { Contact } from '../types/Contact';
import { UserCircle, Mail, Phone, Building2, BadgeCheck } from 'lucide-react';

interface ContactFormProps {
  contact: Contact;
  onChange: (contact: Contact) => void;
}

export function ContactForm({ contact, onChange }: ContactFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...contact, [name]: value });
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <UserCircle className="w-4 h-4" />
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex-1">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <UserCircle className="w-4 h-4" />
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Mail className="w-4 h-4" />
          Email
        </label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Phone className="w-4 h-4" />
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <Building2 className="w-4 h-4" />
          Company (optional)
        </label>
        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
          <BadgeCheck className="w-4 h-4" />
          Title (optional)
        </label>
        <input
          type="text"
          name="title"
          value={contact.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}