import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface BookingData {
  name: string;
  contactNumber: string;
  email: string;
  serviceTitle: string;
  servicePrice: string;
}

export const sendBookingEmail = async (bookingData: BookingData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: 'lokendra69.lk@gmail.com',
      from_name: bookingData.name,
      from_email: bookingData.email,
      contact_number: bookingData.contactNumber,
      service_title: bookingData.serviceTitle,
      service_price: bookingData.servicePrice,
      message: `New booking request from ${bookingData.name} for ${bookingData.serviceTitle} at ${bookingData.servicePrice}. Contact: ${bookingData.contactNumber}, Email: ${bookingData.email}`
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Instructions for setup:
/*
1. Go to https://www.emailjs.com/ and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - {{to_email}}
   - {{from_name}}
   - {{from_email}}
   - {{contact_number}}
   - {{service_title}}
   - {{service_price}}
   - {{message}}
4. Get your Service ID, Template ID, and Public Key
5. Replace the placeholder values above with your actual IDs
6. Make sure your email template is set up to send to lokendra69.lk@gmail.com
*/
