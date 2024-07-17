import type { Metadata } from "next";
import "./globals.css";





// export const metadata: Metadata = {
//   title: "One Time Delivery",
//   description: "Your Home For All Deliveries Across The Country",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <title>One Time Delivery</title>
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body>
        {children}
      </body>
    </html>

    </>

  );
}
