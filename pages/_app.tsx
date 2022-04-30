import { ChakraProvider } from "@chakra-ui/react";
import "@styles/globals.css";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
