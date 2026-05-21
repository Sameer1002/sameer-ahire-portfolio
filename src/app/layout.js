import "./root.css";
import localFont from 'next/font/local';
import { Poppins, Outfit } from 'next/font/google';
import ThemeProviderComponent from "@/components/ThemeProviderComponent";
import crypto from 'crypto';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const roboto = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto/Roboto-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Light.ttf',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: "--font-roboto",
});



const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Regular.ttf',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Medium.ttf',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-SemiBold.ttf',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Bold.ttf',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-ExtraBold.ttf',
      weight: '800',
      style: 'extra-bold',
    },
    {
      path: '../../public/fonts/PlayfairDisplay/PlayfairDisplay-Black.ttf',
      weight: '900',
      style: 'black',
    },
  ],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Ahire Sameer | UI & Front-End Developer",
  description:
    "Portfolio of Ahire Sameer — UI developer building responsive web applications with React, Next.js, and modern front-end tools.",
};

export default function RootLayout({ children }) {
  const nonce = crypto.randomBytes(16).toString("base64");

  return (
    <html
      lang="en"
      className={`${roboto.variable} ${playfair.variable} ${poppins.variable} ${outfit.variable}`}
    >
      <body className={roboto.className}>
        <ThemeProviderComponent nonce={nonce}>{children}</ThemeProviderComponent>
      </body>
    </html>
  );
}
