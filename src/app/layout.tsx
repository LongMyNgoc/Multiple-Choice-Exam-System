import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css";  // Import CSS của Toastify

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); 

export const metadata: Metadata = {
  title: "Multiple Choice Exam System",
  description: "Ứng dụng tạo câu hỏi trắc nghiệm, tổ chức thi và quản lý kết quả thi. Cung cấp nhiều loại câu hỏi cho người dùng với các tính năng quản lý dễ dàng.",
  keywords: "trắc nghiệm, thi trực tuyến, quản lý câu hỏi, hệ thống thi, ứng dụng thi, multiple choice, quản lý kết quả thi",
  icons: {
    icon: [
      { url: "/favicon-v2.png", sizes: "32x32", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
