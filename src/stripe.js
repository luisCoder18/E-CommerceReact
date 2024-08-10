// src/stripe.js
import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');
