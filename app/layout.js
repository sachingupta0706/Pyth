

// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Confident - Dental Care Clinic",
  description: "High Quality & Painless Dentistry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}