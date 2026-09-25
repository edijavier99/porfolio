'use client';

import { ContactModalProvider } from './ContactModalContext';
import ContactModal from './ContactModal';

export default function Providers({ children }) {
  return (
    <ContactModalProvider>
      {children}
      <ContactModal />
    </ContactModalProvider>
  );
}
