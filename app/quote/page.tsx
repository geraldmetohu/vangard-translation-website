'use client';

import { useState } from 'react';

export default function QuotePage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('/api/send-quote', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      setStatus('Message sent!');
      form.reset();
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-36 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#0D47A1]">
        Request a Quote
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-xl rounded-xl">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-[#0D47A1] text-[#e7d240] px-6 py-2 rounded hover:bg-[#29186b] hover:text-[#ffd738] transition"
        >
          Send
        </button>
        {status && <p className="text-center text-sm text-gray-600 mt-2">{status}</p>}
      </form>
    </div>
  );
}
