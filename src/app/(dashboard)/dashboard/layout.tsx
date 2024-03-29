import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corp Connect Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <DashboardSidebar />
          <div className="md:pl-16 w-full mt-20 md:mt-0">{children}</div>
        </div>
      </body>
    </html>
  );
}
