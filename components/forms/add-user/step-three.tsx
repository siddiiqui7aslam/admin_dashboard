'use client';

import { useUserForm } from '@/providers/user-form-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { addUser } from '@/lib/api';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export function StepThree() {
  const { formData, prevStep, resetForm } = useUserForm();
  const router = useRouter();
  
  const handleSubmit = async () => {
    try {
      // Format the data for API submission
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'N/A',
        address: {
          street: formData.street,
          suite: formData.suite || '',
          city: formData.city,
          zipcode: formData.zipcode,
          geo: {
            lat: '0',
            lng: '0',
          },
        },
      };
      
      // Submit to API
      await addUser(userData);
      
      // Log the data to console (as requested in requirements)
      console.log('Submitted user data:', userData);
      
      // Show success toast
      toast.success('User added successfully!');
      
      // Reset form and redirect to dashboard
      resetForm();
      router.push('/dashboard');
    } catch (error) {
      toast.error('Failed to add user. Please try again.');
      console.error('Error adding user:', error);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold">Review & Confirm</h2>
        <p className="text-muted-foreground">
          Please review the information before submitting.
        </p>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Basic Information</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Name</dt>
                  <dd className="text-sm font-medium">{formData.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Email</dt>
                  <dd className="text-sm font-medium">{formData.email}</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h3 className="text-lg font-medium">Address Information</h3>
              <Separator className="my-2" />
              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">Street</dt>
                  <dd className="text-sm font-medium">{formData.street}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">City</dt>
                  <dd className="text-sm font-medium">{formData.city}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Zip Code</dt>
                  <dd className="text-sm font-medium">{formData.zipcode}</dd>
                </div>
              </dl>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </motion.div>
  );
}