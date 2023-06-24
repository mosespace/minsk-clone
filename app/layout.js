import "./globals.scss";
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'Minsk- Webflow HTML Website Clone',
  description: 'mnsk.clone.webflow.io',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
