import React from 'react';
import invoices from './invoiceData';

const InvoiceBox = () => {
  const pendingInvoices = invoices.filter((invoice) => invoice.status === 'Pending');

  return (
    <div className="box">
      <h2>Invoices</h2>
      {invoices.map((invoice) => (
        <div key={invoice.id} className={invoice.status === 'Pending' ? 'pending' : ''}>
          {invoice.Month}: {invoice.status}
        </div>
      ))}
    </div>
  );
};
export default InvoiceBox;