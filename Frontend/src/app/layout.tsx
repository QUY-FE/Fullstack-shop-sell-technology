// thư viện
import { ToastContainer } from "react-toastify";

//  import components
import Header from "#/components/Header";
import Footer from "#/components/Footer";
import { ProductProvider } from "#/context/productContext";
// import file css
import "react-multi-carousel/lib/styles.css";
import "#/assets/css/globals.css";
// import icons


// import và set font chữ
import { Archivo } from "next/font/google";
import { AuthProvider } from "#/context/authContext";
const geistArchivo = Archivo({
  variable: "--font-geist-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${geistArchivo.variable}  antialiased relative`}>
        <AuthProvider>     
        <ProductProvider>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Header />
          <div className="w-full ">
            <main className="max-w-[1200px] mx-auto">{children}</main>
          </div>
          <Footer />
          
        </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
