import admin from 'firebase-admin';

// Check if we've already initialized a Firebase app; initialize if not
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
    // Optionally, specify other Firebase services, such as the database URL
    // databaseURL: "https://your-project-id.firebaseio.com",
  });
}

// Export the admin Firestore, Auth, or any other service you intend to use
const db = admin.firestore();
// const auth = admin.auth(); // Example if you also want to use Firebase Auth

export { admin, db }; // Export as needed
