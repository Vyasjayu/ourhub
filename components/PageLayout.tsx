import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function PageLayout({
  title,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-[#071424] text-white">
      <div className="mx-auto w-full
          max-w-[430px]
          min-h-screen
          overflow-hidden max-w-3xl px-4 py-8">

        <h1 className="mb-6 text-3xl font-bold text-yellow-400">
          {title}
        </h1>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
          {children}
        </div>

      </div>
    </main>
  );
}