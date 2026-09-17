import { useState } from 'react';

import { footerFormClassName } from './constant';
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
      className={footerFormClassName?.form}
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubscribe(email);
      }}
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>

      <div className={footerFormClassName?.wrapper}>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className={footerFormClassName?.input}
        />

        <button type="submit" className={footerFormClassName?.button}>
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
