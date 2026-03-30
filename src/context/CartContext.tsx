'use client';

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { MenuItem } from '@/data/menu';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem; quantity?: number }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state, items: action.payload };
      
    case 'ADD_ITEM': {
      const q = action.quantity || 1;
      const existingIndex = state.items.findIndex(
        (ci) => ci.item.id === action.payload.id
      );
      if (existingIndex >= 0) {
        const newItems = [...state.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + q,
        };
        return { ...state, items: newItems, isOpen: true }; // Auto-open cart on add
      }
      return {
        ...state,
        items: [...state.items, { item: action.payload, quantity: q }],
        isOpen: true,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((ci) => ci.item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((ci) => ci.item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((ci) =>
          ci.item.id === action.payload.id
            ? { ...ci, quantity: action.payload.quantity }
            : ci
        ),
      };
    }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    case 'OPEN_CART':
      return { ...state, isOpen: true };
    case 'CLEAR_CART':
      return { ...state, items: [], isOpen: false };
    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  subTotal: number;
  itemCount: number;
  shipping: number;
  total: number;
  generateWhatsAppOrder: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('godhavari_cart');
      if (saved) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) });
      }
    } catch (e) {
      console.error('Failed to load cart', e);
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('godhavari_cart', JSON.stringify(state.items));
  }, [state.items]);

  const subTotal = state.items.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const shipping = subTotal > 500 || subTotal === 0 ? 0 : 40;
  const total = subTotal + shipping;
  const itemCount = state.items.reduce((sum, ci) => sum + ci.quantity, 0);

  const generateWhatsAppOrder = () => {
    let message = `*🌺 Order Inquiry from Godhavarolla Ruchulu 🌺*\n\n`;
    message += `*Items:*\n`;
    
    state.items.forEach(ci => {
      message += `- ${ci.item.name} x${ci.quantity} (₹${ci.item.price * ci.quantity})\n`;
    });
    
    message += `\n*Subtotal:* ₹${subTotal}`;
    if (shipping > 0) message += `\n*Delivery:* ₹${shipping}`;
    message += `\n*Total:* ₹${total}\n\n`;
    message += `Please confirm my order.`;
    
    return encodeURIComponent(message);
  };

  return (
    <CartContext.Provider value={{ state, dispatch, subTotal, itemCount, shipping, total, generateWhatsAppOrder }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
