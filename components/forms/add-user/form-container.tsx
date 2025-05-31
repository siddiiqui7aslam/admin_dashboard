'use client';

import { useUserForm } from '@/providers/user-form-provider';
import { StepOne } from './step-one';
import { StepTwo } from './step-two';
import { StepThree } from './step-three';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatePresence } from 'framer-motion';

export function FormContainer() {
  const { currentStep } = useUserForm();
  
  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="relative mb-6">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-border" />
          <ol className="relative flex justify-between">
            {[1, 2, 3].map((step) => (
              <li key={step} className="relative flex h-8 w-8 items-center justify-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background ${
                    currentStep === step
                      ? 'border-primary text-primary'
                      : currentStep > step
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-muted-foreground text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex justify-between px-2">
          <span className="text-sm font-medium">Basic Info</span>
          <span className="text-sm font-medium">Address</span>
          <span className="text-sm font-medium">Review</span>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}