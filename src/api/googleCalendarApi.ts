import { gapi } from "gapi-script";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];
const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

let isGapiInitialized = false;

export const initClient = () => {
  return new Promise<void>((resolve, reject) => {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() => {
          console.log("GAPI client initialized");
          isGapiInitialized = true;
          resolve();
        })
        .catch((error: any) => {
          console.error("Error initializing GAPI client: ", error);
          reject(error);
        });
    });
  });
};

export const signInWithGoogle = async () => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    const user = await authInstance.signIn({
      ux_mode: "popup", // ポップアップモードを使用
    });
    const profile = user.getBasicProfile();
    console.log("User signed in:", profile.getName());
  } catch (error: any) {
    console.error("Error signing in: ", error);
  }
};

export const listUpcomingEvents = async () => {
  if (!isGapiInitialized) {
    throw new Error("GAPI client not initialized");
  }

  const response = await gapi.client.calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: "startTime",
  });
  return response.result.items;
};
