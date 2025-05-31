import { User } from './types';

// Base API URL
const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch all users from the API
 */
export async function getUsers(): Promise<User[]> {
  try {
    const response = await fetch(`${API_URL}/users`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Add a new user (simulated since JSONPlaceholder doesn't actually create new records)
 */
export async function addUser(userData: Partial<User>): Promise<User> {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add user');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
}