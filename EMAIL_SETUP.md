# Email Setup Instructions

## Overview
The contact form now sends emails to `achraf.chalkha@etu.uae.ac.ma` with proper error handling and user feedback.

## Current Status
✅ **The contact form is working!**
- If email is not configured, messages are logged to the server console
- All form submissions are captured and can be viewed in the terminal/logs
- The form provides proper user feedback

## Setup Required for Email Sending

### 1. Configure Environment Variables
Edit the `.env.local` file in your project root:

### 2. Gmail Setup (Recommended)

**Step-by-step instructions:**

1. **Enable 2-Factor Authentication:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable "2-Step Verification" if not already enabled

2. **Generate App Password:**
   - In Google Account settings, go to Security > 2-Step Verification
   - Scroll down to "App passwords"
   - Select "Mail" as the app
   - Copy the 16-character password generated

3. **Update .env.local:**
   ```
   EMAIL_USER=your-actual-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

**Example:**
```
EMAIL_USER=achraf.chalkha@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### 3. Alternative Email Services

#### Outlook/Hotmail
```
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Custom SMTP
```
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
```

## Features Implemented

### ✅ Email Functionality
- All emails are sent to `achraf.chalkha@etu.uae.ac.ma`
- Professional HTML email template with Highway Academy branding
- Reply-to field set to sender's email for easy responses

### ✅ Error Handling
- Form validation with helpful error messages
- Character limits with live counters (Name: 100, Subject: 200, Message: 2000)
- Email format validation
- Network error handling
- Server error handling

### ✅ User Experience
- Loading states with spinner during submission
- Success/error toast notifications
- Form reset after successful submission
- Disabled submit button during processing

### ✅ Security
- Input sanitization
- Rate limiting considerations
- Environment variable validation

## Testing
1. Fill out the contact form
2. Check for validation errors
3. Submit and verify toast notifications
4. Check the recipient email inbox

## Troubleshooting

### Common Issues
1. **"Email service is not configured"** - Check your `.env.local` file
2. **Authentication errors** - Verify your email credentials
3. **Network errors** - Check internet connection and email service status

### Gmail Specific
- Make sure 2FA is enabled
- Use App Password, not regular password
- Check Google Account security settings
