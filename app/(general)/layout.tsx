import Navbar from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Titulo</span>
        {children}
      </main>

    </>
  );
}