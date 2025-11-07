"use client";
import React, { useState } from "react";

const FullForm = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);

        const recipient = "crobb7743@gmail.com";
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

        setForm({ name: "", email: "", message: "" });
        setSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-500 tracking-wider uppercase">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border border-stone-200 bg-white px-4 py-2 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-500 tracking-wider uppercase">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border border-stone-200 bg-white px-4 py-2 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-500 tracking-wider uppercase">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border border-stone-200 bg-white px-4 py-3 text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-300 resize-none"
                />
            </div>

            <div>
                <button
                    disabled={submitting}
                    className="inline-flex items-center justify-center w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white hover:bg-stone-700 disabled:opacity-60 transition"
                >
                    {submitting ? "Sending..." : "Send Message"}
                </button>
            </div>
        </form>
    );
};

export default FullForm;



