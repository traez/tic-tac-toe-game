import "./globals.css";
import Footer from "./components/Footer";

export const metadata = {
  title: "Tic Tac Toe Game",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
