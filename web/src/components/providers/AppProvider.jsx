import { useEffect } from "react";
import AppQueryProvider from "./AppQueryProvider";
import IconThemeProvider from "./IconThemeProvider";
import UserProvider from "./UserProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppProvider({ component }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AppQueryProvider>
      <UserProvider>
        <IconThemeProvider>{component}</IconThemeProvider>
      </UserProvider>
    </AppQueryProvider>
  );
}
