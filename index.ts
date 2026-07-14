// A porta do import direto. O registry shadcn continua sendo a porta principal:
// aqui e pra quem instala o pacote inteiro por caminho de arquivo ou git.
// Os tokens nao passam por aqui: importe "sweeet-lime/tokens.css" antes de tudo.

export { cn } from "./lib/utils";

export { Badge, badgeVariants } from "./components/ui/badge";
export { Button, buttonVariants } from "./components/ui/button";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
export { Input } from "./components/ui/input";
export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/sheet";
export { Textarea } from "./components/ui/textarea";
export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./components/ui/tooltip";

export {
  Pagina,
  Cabecalho,
  Sec,
  Card as CardBloco,
  ChipMono,
  Tile,
  KV,
  Vazio,
  BotaoLeve,
} from "./components/blocos";
export { BotaoLima } from "./components/botao";
export { ItemCheck, type ChecklistItem } from "./components/checklist";
export { Marca, Selo } from "./components/marca";
export { Moldura } from "./components/moldura";
export { Spinner } from "./components/spinner";
export { BotaoTema } from "./components/tema";
export { ThemeProvider } from "./components/theme-provider";
export { Toaster, toast } from "./components/toast";
