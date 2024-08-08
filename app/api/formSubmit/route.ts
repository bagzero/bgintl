// pages/api/sendForm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { db } from '../../../firebaseAdmin'; // Adjust the import path as necessary
import admin from 'firebase-admin';

// import type { NextApiRequest, NextApiResponse } from 'next'
// import { NextRequest, NextResponse } from 'next/server';

// export async function GET() {
//     return NextResponse.json("hi");
// }

// export async function POST(req: NextRequest) {
//     const formData = await req.json();
//     console.log(formData);

//     const newForm = {
//         id: 1,
//         name: formData.name,
//         email: formData.email,
//         message: formData.message,
//     };
//     return new Response(JSON.stringify(newForm), {
//         headers: {
//             "Content-Type": "application/json",
//         },
//         status: 201,
//     })
// }

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();
    const formData = {
        name,
        email,
        message
    }

    console.log(name, email, message);
    console.log(process.env.FIREBASE_PROJECT_ID);
    console.log(process.env.FIREBASE_CLIENT_EMAIL);
    console.log(process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'));
    console.log(process.env.EMAIL_USERNAME)
    console.log(process.env.EMAIL_PASSWORD)
    // Adding document to Firestore
    try {
        const docRef = await db.collection('contactFormSubmissions').add({
            name,
            email,
            message,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        
        // THIS IS SENDING EMAIL LETTING CLIENT KNOW THAT THEY FILLED OUT THE CONTACT FORM. This works, but for some reason my email creds don't work properly - i think b/c google or gmail prevents less-secure app access or just blocks it. Error says "Invalid login: Username and Password not accepted."
        // // Set up Nodemailer transporter
        // const transporter = nodemailer.createTransport({
        //     service: 'gmail', // Example using Gmail; configure for your email provider
        //     auth: {
        //         user: process.env.EMAIL_USERNAME, // Your email address
        //         pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
        //     },
        // });

        // // Email options
        // const mailOptions = {
        //     from: process.env.EMAIL_USERNAME, // Sender address
        //     to: email, // Recipient address from the form submission
        //     subject: 'Thank You for Your Submission',
        //     text: `Hello ${name},\n\nThank you for your message: "${message}".\n\nWe will get back to you soon.\n\nBest Regards,\nYour Team`,
        //     html: `<p>Hello ${name},</p><p>Thank you for your message: "${message}".</p><p>We will get back to you soon.</p><p>Best Regards,<br>Your Team</p>`,
        // };

        // // Send email
        // transporter.sendMail(mailOptions, (error, info) => {
        //     if (error) {
        //         console.error('Error sending email:', error);
        //         return new Response(JSON.stringify(info), {
        //             status: 500,
        //         })
        //         // return res.status(500).json({ error: 'Failed to send email' });
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //         return new Response(JSON.stringify(info), {
        //             status: 200
        //         })
        //         // return res.status(200).json({ message: 'Form submitted and email sent successfully', id: docRef.id });
        //     }
        // });
        return new Response(JSON.stringify(formData), {
            status: 200
        })
    } catch (error) {
        console.error('Error adding document:', error);
        return new Response(JSON.stringify(formData), {
            status: 500,
        })
        // res.status(500).json({ error: 'Internal Server Error' });
    }
}
// return new Response(JSON.stringify(newForm), {
//         headers: {
//             "Content-Type": "application/json",
//         },
//         status: 201,
//     })