import { useState } from 'react';

import type { FormProps } from './types';

const FooterForm = ({ onSubscribe }: FormProps) => {
  const [email, setEmail] = useState('');
  const handleSubscribe = async (value: string) => {
    const trimmedEmail = value.trim();
    if (!trimmedEmail) return;
    await onSubscribe?.(trimmedEmail);
    setEmail('');
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubscribe(email);
      }}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>

      <div className="flex w-full max-w-sm overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10">
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white focus:outline-none"
        />

        <button
          type="submit"
          className="shrink-0 bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
