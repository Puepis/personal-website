import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import ViewportProvider from "../components/ViewportProvider";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnimatePresence } from "framer-motion";
import PageProvider from "../components/PageProvider";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ViewportProvider>
        <PageProvider>
          <ThemeToggle />
          <main className="max-w-lg sm:max-w-xl mx-auto px-6 sm:px-4 pt-28">
            <Header />
            <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <Footer />
          </main>
        </PageProvider>
      </ViewportProvider>
    </ThemeProvider>
  );
}
export default MyApp;
