'use client';

import React, { createContext, useContext, useState } from 'react';
import BookingModal from '@/components/BookingModal';

interface BookingModalContextType {
  openBookingModal: (prefillData?: Record<string, string>) => void;
  closeBookingModal: () => void;
  isModalOpen: boolean;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(undefined);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<Record<string, string> | undefined>(undefined);

  const openBookingModal = (prefillData?: Record<string, string>) => {
    setPrefill(prefillData);
    setModalOpen(true);
  };

  const closeBookingModal = () => {
    setModalOpen(false);
    setPrefill(undefined);
  };

  return (
    <BookingModalContext.Provider
      value={{
        openBookingModal,
        closeBookingModal,
        isModalOpen: modalOpen,
      }}
    >
      {children}
      <BookingModal
        isOpen={modalOpen}
        onClose={closeBookingModal}
        prefillData={prefill}
      />
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error('useBookingModal must be used within a BookingModalProvider');
  }
  return context;
}
