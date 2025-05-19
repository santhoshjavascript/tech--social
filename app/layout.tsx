"use client";

import BottomMenu from "@/components/menu/BottomMenu";
import PostPopups from "@/components/modals/PostPopups";
import NavBar from "@/components/navbar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import "react-modal-video/css/modal-video.css"; // Use CSS if SCSS is unavailable
import "slick-carousel/slick/slick.css";
// import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const clss = pathname !== "/index-two" ? "container" : "container-fluid";

  useEffect(() => {
    if (!isLoginPage) {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, [isLoginPage]);

  return (
    <html lang="en">
      <head>
        {!isLoginPage && (
          <>
            <meta
              name="description"
              content="Circlehub React Nextjs Template"
            />
            <title>Circlehub - React Nextjs Template</title>
          </>
        )}
      </head>
      <body className={isLoginPage ? "login-page" : "app-page"}>
        <ThemeProvider attribute="class" enableSystem={false}>
          {!isLoginPage && (
            <>
              <Preloader />
              <ScrollToTop />
              <NavBar clss={clss} />
              <BottomMenu />
              <PostPopups />
            </>
          )}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
