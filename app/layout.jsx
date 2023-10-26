import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import BorderContextProvider from "./context/BorderContext";
import ThemeProvider from "./providers/ThemeProvider";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Countries of the world",
  description: "Countries of the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="relative dark:text-[#ffffff] dark:bg-[#202c37]">
        <ScrollToTop>
          <ReactQueryProvider>
            <BorderContextProvider>
              <ThemeProvider>
                <Header />
                {children}
              </ThemeProvider>
            </BorderContextProvider>
          </ReactQueryProvider>
        </ScrollToTop>
      </body>
    </html>
  );
}
