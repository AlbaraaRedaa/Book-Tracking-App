import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Providers from "./providers";
import { BookContextProvider } from "@/providers/BooksContext";
export const metadata = {
  title: "Book Tracking App",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <BookContextProvider>{children}</BookContextProvider>
        </Providers>
      </body>
    </html>
  );
}
