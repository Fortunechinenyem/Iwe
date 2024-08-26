import "../styles/globals.css";
import SessionProviderWrapper from "./components/SessionProviderWrapper";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
