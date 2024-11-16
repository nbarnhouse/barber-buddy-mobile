import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the context
export const AuthContext = createContext();

// AuthProvider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // User state
  const [loading, setLoading] = useState(true); // Loading state for initialization

  // Simulate login
  const login = async (email, password) => {
    try {
      // Simulate API call for login
      const fakeUser = { id: 1, name: 'John Doe', email }; // Replace with API response
      setUser(fakeUser);
      await AsyncStorage.setItem('user', JSON.stringify(fakeUser)); // Persist user
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Simulate logout
  const logout = async () => {
    try {
      setUser(null);
      await AsyncStorage.removeItem('user'); // Clear stored user data
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Restore user session on app load
  useEffect(() => {
    const restoreUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser)); // Restore user
        }
      } catch (error) {
        console.error('Restore session error:', error);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, []);

  // Provide context values
  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
