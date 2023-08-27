import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "@/hooks/useLoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import useRegisterModal from "@/hooks/useRegisterMdoal";
import { Session } from "inspector";

export default function App({ Component, pageProps }: AppProps) {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      {registerModal.isOpen && <RegisterModal />}
      {loginModal.isOpen && <LoginModal />}
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </SessionProvider>
  );
}
