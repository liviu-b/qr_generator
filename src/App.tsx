import React, { useState } from 'react';
import { Contact } from './types/Contact';
import { ContactForm } from './components/ContactForm';
import { QRCodeDisplay } from './components/QRCodeDisplay';
import { generateVCardData } from './utils/vCardGenerator';
import { QrCode } from 'lucide-react';

function App() {
  const [contact, setContact] = useState<Contact>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
  });

  const vCardData = generateVCardData(contact);
  const isFormValid = contact.firstName && contact.lastName && contact.email && contact.phone;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <QrCode className="mx-auto h-12 w-12 text-blue-600" />
          <h1 className="mt-3 text-3xl font-bold text-gray-900">Contact QR Code Generator</h1>
          <p className="mt-2 text-gray-600">Generate a QR code with your contact information that others can scan to save your details.</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <ContactForm contact={contact} onChange={setContact} />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center border-t md:border-l md:border-t-0 pt-6 md:pt-0 md:pl-8">
            <QRCodeDisplay value={vCardData} isValid={isFormValid} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;