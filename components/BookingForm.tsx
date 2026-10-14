'use client';

import { useState, type FormEvent } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus('sending');
    setMessage('');

    try {
      const data = Object.fromEntries(new FormData(form));

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send. Please try again.');
      }

      setStatus('success');
      setMessage('Thank you. Your enquiry has been sent.');
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send. Please try again.'
      );
    }
  }

  return (
    <form
      className="booking-form"
      onSubmit={submit}
    >
      <label>
        Name / Brand
        <input
          name="name"
          autoComplete="organization"
          maxLength={150}
          required
        />
      </label>

      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>

      <label>
        Project & dates
        <textarea
          name="project"
          rows={2}
          maxLength={3000}
          required
        />
      </label>

      <label>
        Location
        <input
          name="location"
          autoComplete="address-level2"
          maxLength={150}
          required
        />
      </label>

      <label>
        Budget
        <select
          name="budget"
          defaultValue=""
          required
        >
          <option
            value=""
            disabled
          >
            Select a budget
          </option>
          <option>Under £1,000</option>
          <option>£1,000–£2,500</option>
          <option>£2,500–£5,000</option>
          <option>£5,000+</option>
          <option>To be discussed</option>
        </select>
      </label>

      <label>
        Usage
        <select
          name="usage"
          defaultValue=""
          required
        >
          <option
            value=""
            disabled
          >
            Select intended usage
          </option>
          <option>Editorial</option>
          <option>Digital campaign</option>
          <option>Print & outdoor</option>
          <option>Multi-channel campaign</option>
          <option>Other / to be discussed</option>
        </select>
      </label>

      <div
        className="honeypot"
        aria-hidden="true"
      >
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <button
        className="submit"
        disabled={status === 'sending'}
        type="submit"
      >
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        <span aria-hidden="true">→</span>
      </button>

      <p
        className={`form-message ${status}`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>

      <p className="privacy-note">
        Your details are used only to respond to this enquiry.
      </p>
    </form>
  );
}