'use client';

import { createContext, useContext, useState } from 'react';
import { UserFormData } from '@/lib/types';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface UserFormContextType {
  formData: UserFormData;
  updateFormData: (data: Partial<UserFormData>) => void;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
}

const initialFormData: UserFormData = {
  name: '',
  email: '',
  street: '',
  city: '',
  zipcode: '',
  phone: '',
  suite: '',
};

const UserFormContext = createContext<UserFormContextType | undefined>(undefined);

export function UserFormProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useLocalStorage<UserFormData>('user-form-data', initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (data: Partial<UserFormData>) => {
    setFormData({ ...formData, ...data });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  return (
    <UserFormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        nextStep,
        prevStep,
        resetForm,
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
}

export function useUserForm() {
  const context = useContext(UserFormContext);
  if (context === undefined) {
    throw new Error('useUserForm must be used within a UserFormProvider');
  }
  return context;
}