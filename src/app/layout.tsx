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
  description:
    "Ứng dụng tạo câu hỏi trắc nghiệm, tổ chức thi và quản lý kết quả thi. Cung cấp nhiều loại câu hỏi cho người dùng với các tính năng quản lý dễ dàng.",
  keywords:
    "trắc nghiệm, thi trực tuyến, quản lý câu hỏi, hệ thống thi, ứng dụng thi, multiple choice, quản lý kết quả thi, kiểm tra kiến thức, đề thi trực tuyến",
  authors: [
    { name: "Nguyễn Phi Long", url: "https://nguyenphilongportfolio.vercel.app/" },
  ],
  creator: "Nguyễn Phi Long",
  publisher: "Nguyễn Phi Long",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Multiple Choice Exam System",
    description:
      "Hệ thống thi trắc nghiệm trực tuyến giúp giáo viên và học sinh dễ dàng tạo, tham gia và theo dõi kết quả các bài thi.",
    url: "https://multiple-choice-eta.vercel.app/",
    siteName: "Multiple Choice Exam System",
    images: [
      {
        url: "/favicon-v2.png",
        width: 1200,
        height: 630,
        alt: "Multiple Choice Exam System",
      },
    ],
    locale: "en",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-v2.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon-v2.png",
  },
  manifest: "/favicon-v2.png",
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
