"use client";

import { ExternalLink } from "lucide-react";
import { useState } from "react";

import { Spinner } from "./spinner";

// iframe com estado de carregando e fallback de nova aba sempre visivel.
// Cada app embutido tem login proprio (mesma conta, sessao separada por
// origem): loga uma vez dentro do iframe e a sessao fica.
export function Moldura({ titulo, url }: { titulo: string; url: string }) {
  const [carregou, setCarregou] = useState(false);

  return (
    <div className="flex h-full flex-col">
      <div className="border-risco flex items-center justify-between gap-3 border-b px-4 py-2.5">
        <span className="text-tinta-fraca font-mono text-xs">{titulo}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener"
          className="text-tinta-fraca hover:bg-tinta/5 hover:text-tinta inline-flex h-8 items-center gap-1.5 rounded-lg px-2.5 text-[12.5px] font-medium transition-colors"
        >
          <ExternalLink className="size-[13px]" strokeWidth={1.75} /> Abrir em
          nova aba
        </a>
      </div>
      <div className="relative flex-1">
        {!carregou ? (
          <div className="text-tinta-fraca absolute inset-0 flex items-center justify-center text-[13px]">
            <Spinner className="mr-2.5" />
            carregando {titulo.toLowerCase()}
          </div>
        ) : null}
        <iframe
          src={url}
          title={titulo}
          onLoad={() => setCarregou(true)}
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
