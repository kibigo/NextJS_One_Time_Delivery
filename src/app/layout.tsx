import type { Metadata } from "next";
import "./globals.css";





export const metadata: Metadata = {
  title: "One Time Delivery",
  description: "Your home for all deliveries across the country. We offer same-day and scheduled delivery options for parcels, food and goods",
  keywords:['Delivery in Nairobi', 'Parcel delivery', 'Food delivery', 'Grocery delivery', 'Home delivery', 'Door-to-door delivery', 'Same-day delivery', 'Delivery outside Nairobi', 'Quick delivery', 'Safe delivery'],
  openGraph:{
    title:'One Time Delivery',
    description:'Efficient and reliable delivery services within Nairobi and surrounding. We ensure secure and eco-friendly deliveries of parcels, food, groceries and others',
    url:'',
    siteName:'One Time Delivery',
    images:[
      {
        url:'/favicon.ico',
        width:800,
        height:600,
        alt:'One Time Delivery Logo'
      }
    ],
  },

  twitter:{
    card:'summary_large_image',
    title:'One Time Delivery',
    description:'Get your goods delivered to client at the most convinient time',
    images:[
      {
        url:'/favicon.ico',
        alt:'One Time Delivery Logo'
      }
    ]
  }
};

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
