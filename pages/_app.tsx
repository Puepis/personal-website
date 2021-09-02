import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import ViewportProvider from "../components/ViewportProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </ThemeProvider>
  );
}
export default MyApp;
