export const metadata = {
  title: "Chandu Pulluru | Portfolio",
  description: "Java Developer | Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
