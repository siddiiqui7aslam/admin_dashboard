// User data types based on JSONPlaceholder API
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

// Form data types for the multi-step form
export interface UserFormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  
  // Step 2: Address
  street: string;
  city: string;
  zipcode: string;
  
  // Additional fields that might be optional
  phone?: string;
  suite?: string;
}