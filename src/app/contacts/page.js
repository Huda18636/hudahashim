"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Link from "next/link";
import { Header } from '../components/Header';

// Validation schema
const schema = yup.object().shape({
  fullName: yup.string().min(2, 'Full name must be at least 2 characters').required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().min(2, 'Subject must be at least 2 characters').required('Subject is required'),
  message: yup.string().min(5, 'Message must be at least 5 characters').required('Message is required'),
});

// type FormData = {
//   fullName: string;
//   email: string;
//   subject: string;
//   message: string;
// };

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset(); // Reset form
    setIsSubmitting(false);
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        {/* Shadowed container with padding and rounded corners */}
        <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                {...register('fullName')}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                {...register('email')}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <label className="block font-medium mb-1">Subject</label>
              <input
                type="text"
                {...register('subject')}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={4}
                {...register('message')}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
