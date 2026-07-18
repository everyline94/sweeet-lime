"use client";

import { useEffect, useRef, useState } from "react";

/* O prompt copiavel: a RECEITA PROMPT v1 do tokens.css vestida de React.
   O visual mora na receita; aqui so o clique (clipboard com fallback pra
   contexto nao seguro e o estado Copiado por dois segundos). O texto entra
   como string pra poder ir direto pro clipboard. */
export function Prompt({
  rotulo,
  children,
  className = "",
}: {
  rotulo: string;
  children: string;
  className?: string;
}) {
  const [copiado, setCopiado] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function confirmar() {
    setCopiado(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopiado(false), 2000);
  }

  function reserva(texto: string) {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      confirmar();
    } catch {
      /* clipboard bloqueado: sem confirmacao */
    }
    document.body.removeChild(ta);
  }

  function copiar() {
    const texto = children.trim();
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(confirmar, () => reserva(texto));
    } else {
      reserva(texto);
    }
  }

  return (
    <div className={`pr-card ${className}`.trim()}>
      <div className="pr-topo">
        <span className="pr-rotulo">{rotulo}</span>
        <button
          type="button"
          className="pr-copiar"
          onClick={copiar}
          disabled={copiado}
        >
          {copiado ? "Copiado" : "Copiar"}
        </button>
      </div>
      <p className="pr-texto">{children}</p>
    </div>
  );
}
