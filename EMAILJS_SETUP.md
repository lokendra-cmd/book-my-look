# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

### Template Subject:
```
New Booking Request - {{service_title}}
```

### Template Body:
```
Hello,

You have received a new booking request:

Customer Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Contact Number: {{contact_number}}

Service Details:
- Service: {{service_title}}
- Price: {{service_price}}

Message:
{{message}}

Please contact the customer to confirm the booking.

Best regards,
Book Your Look
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## Step 5: Update Configuration
1. Open `src/lib/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_TEMPLATE_ID` with your actual Template ID
   - `YOUR_PUBLIC_KEY` with your actual Public Key

## Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Click "Book Now" on any service
3. Fill out the form and submit
4. Check the email `lokendra69.lk@gmail.com` for the booking request

## Important Notes:
- The free EmailJS plan allows 200 emails per month
- Make sure your email service is properly configured
- Test the integration before deploying to production
- The emails will be sent to `lokendra69.lk@gmail.com` as configured

## Troubleshooting:
- If emails aren't being sent, check the browser console for errors
- Verify all IDs are correct in the configuration file
- Make sure your email service is active in EmailJS dashboard
- Check if you've reached your monthly email limit
