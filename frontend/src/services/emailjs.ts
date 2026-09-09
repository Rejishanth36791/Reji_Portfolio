import emailjs from '@emailjs/browser';
import type { ContactFormData } from '../types';

export async function sendEmailMessage(formData: ContactFormData): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId?.trim() || !templateId?.trim() || !publicKey?.trim()) {
    console.warn(
      'EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing or empty.'
    );
    throw new Error('Contact form is temporarily unavailable. Please try again later.');
  }

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject || '',
    message: formData.message,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}
