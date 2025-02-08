'use client'
import { useState } from 'react';
import Head from 'next/head';

// Define the form data structure
interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const Checkout = () => {
  // Initialize the form data state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  // Initialize the submitting state
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.postalCode || !formData.country) {
      alert('Please fill all the fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate order processing
    setTimeout(() => {
      alert('Order placed successfully!');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout page for your website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {['name', 'email', 'address', 'city', 'postalCode', 'country'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-lg font-medium text-gray-700">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-2 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            ))}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-3 px-4 text-lg font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-300"
              >
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
