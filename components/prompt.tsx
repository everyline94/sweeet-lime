"use client";

import { useEffect, useRef, useState } from "react";

/* O prompt copiavel: a RECEITA PROMPT v1 do tokens.css vestida de React.
   O visual mora na receita; aqui so o clique, numa cascata de tres degraus,
   porque iframe com sandbox nega a API e o botao nao pode falhar mudo:
   1. navigator.clipboard.writeText, com catch;
   2. execCommand("copy") via textarea, conferindo o retorno booleano;
   3. seleciona o texto e o rotulo vira "Copia com cmd+C". */
type EstadoCopia = "parado" | "copiado" | "manual";

export function Prompt({
  rotulo,
  children,
  className = "",
}: {
  rotulo: string;
  children: string;
  className?: string;
}) {
  const [estado, setEstado] = useState<EstadoCopia>("parado");
  const textoRef = useRef<HTMLParagraphElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function mostrar(novo: EstadoCopia, ms: number) {
    setEstado(novo);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setEstado("parado"), ms);
  }

  function reserva(texto: string): boolean {
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function selecionar() {
    const el = textoRef.current;
    const selecao = window.getSelection();
    if (!el || !selecao) return;
    const faixa = document.createRange();
    faixa.selectNodeContents(el);
    selecao.removeAllRanges();
    selecao.addRange(faixa);
  }

  async function copiar() {
    const texto = children.trim();
    try {
      if (!navigator.clipboard) throw new Error("sem clipboard");
      await navigator.clipboard.writeText(texto);
      mostrar("copiado", 2000);
      return;
    } catch {
      /* API negada ou ausente: desce um degrau */
    }
    if (reserva(texto)) {
      mostrar("copiado", 2000);
      return;
    }
    selecionar();
    mostrar("manual", 6000);
  }

  const rotuloBotao =
    estado === "copiado"
      ? "Copiado"
      : estado === "manual"
        ? "Copia com cmd+C"
        : "Copiar";

  return (
    <div className={`pr-card ${className}`.trim()}>
      <div className="pr-topo">
        <span className="pr-rotulo">{rotulo}</span>
        <button
          type="button"
          className="pr-copiar"
          onClick={copiar}
          disabled={estado === "copiado"}
        >
          {rotuloBotao}
        </button>
      </div>
      <p ref={textoRef} className="pr-texto">
        {children}
      </p>
    </div>
  );
}
