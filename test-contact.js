// Simple test script to test the contact API
const testData = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "This is a test message to verify the contact form is working."
};

console.log('Testing contact form API...');
console.log('Test data:', testData);

// This would be the API call that the frontend makes
fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
.then(response => response.json())
.then(data => {
  console.log('API Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
