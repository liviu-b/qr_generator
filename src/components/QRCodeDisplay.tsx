import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download } from 'lucide-react';

interface QRCodeDisplayProps {
  value: string;
  isValid: boolean;
}

export function QRCodeDisplay({ value, isValid }: QRCodeDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const downloadQR = (format: 'svg' | 'png') => {
    if (!containerRef.current) return;
    
    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;

    if (format === 'svg') {
      // Download as SVG
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(svgBlob);
      link.download = 'contact-qr.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } else {
      // Download as PNG
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'contact-qr.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Your QR Code</h2>
      {isValid ? (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div ref={containerRef}>
            <QRCodeSVG
              value={value}
              size={256}
              level="H"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-gray-500 text-center mt-4 mb-4">
            Scan this QR code to save the contact information
          </p>
          <div className="flex gap-2 justify-center">
            <button
              onClick={() => downloadQR('svg')}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Download SVG
            </button>
            <button
              onClick={() => downloadQR('png')}
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PNG
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Fill in the required fields to generate your QR code</p>
        </div>
      )}
    </div>
  );
}