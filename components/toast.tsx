"use client";

import { useEffect, useState } from "react";

// emissor minusculo de toast, sem contexto nem biblioteca
let ouvinte: ((msg: string) => void) | null = null;

export function toast(msg: string) {
  ouvinte?.(msg);
}

export function Toaster() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    ouvinte = (m) => {
      setMsg(m);
      clearTimeout(timer);
      timer = setTimeout(() => setMsg(null), 2600);
    };
    return () => {
      ouvinte = null;
      clearTimeout(timer);
    };
  }, []);

  if (!msg) return null;
  return (
    <div className="folha border-risco text-tinta fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-2xl border px-4 py-[11px] text-[13px]">
      {msg}
    </div>
  );
}
