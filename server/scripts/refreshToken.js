const { google } = require('googleapis');
const readline = require('readline');

// Your OAuth 2.0 credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate a URL for your app to request access to user's data
const SCOPES = ['https://www.googleapis.com/auth/drive.file']; // Adjust scopes as needed
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Ensures a refresh token is returned
  scope: SCOPES,
});

console.log('Authorize this app by visiting this url:', authUrl);

// Create a readline interface to get the authorization code from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', (code) => {
  rl.close();
  oauth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);

    oauth2Client.setCredentials(token);
    console.log('Your refresh token is:', token.refresh_token);
  });
});
