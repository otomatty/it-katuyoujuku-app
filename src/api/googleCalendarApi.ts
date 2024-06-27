import { gapi } from 'gapi-script';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
];
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

let isGapiInitialized = false;

export const initClient = () => {
  return new Promise<void>((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          console.log('GAPI client initialized');
          isGapiInitialized = true;
          resolve();
        })
        .catch((error: any) => {
          console.error('Error initializing GAPI client: ', error);
          reject(error);
        });
    });
  });
};

export const signInWithGoogle = async () => {
  const authInstance = gapi.auth2.getAuthInstance();
  return authInstance.signIn({
    ux_mode: 'popup', // ポップアップモードを使用
  });
};

export const checkIfSignedIn = () => {
  const authInstance = gapi.auth2.getAuthInstance();
  return authInstance.isSignedIn.get();
};

export const listUpcomingEvents = async () => {
  if (!isGapiInitialized) {
    throw new Error('GAPI client not initialized');
  }

  const response = await gapi.client.calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: 'startTime',
  });
  return response.result.items;
};
