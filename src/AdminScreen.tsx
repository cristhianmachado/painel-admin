import { useState } from "react";
// Mesmo design system, montado aqui em src/design-system (submódulo)
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./design-system/src";

type User = { id: number; nome: string; papel: string; ativo: boolean };

const initial: User[] = [
  { id: 1, nome: "Ana Souza", papel: "Admin", ativo: true },
  { id: 2, nome: "Bruno Lima", papel: "Editor", ativo: true },
  { id: 3, nome: "Carla Dias", papel: "Leitor", ativo: false },
];

export function AdminScreen() {
  const [users, setUsers] = useState(initial);

  function toggle(id: number) {
    setUsers((list) =>
      list.map((u) => (u.id === id ? { ...u, ativo: !u.ativo } : u))
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <h1 className="text-lg font-bold tracking-tight">Painel Admin</h1>
          <p className="text-xs text-muted-foreground">
            Segundo consumidor — mesmo design system, caminho de submódulo
            diferente (src/design-system)
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar usuários</CardTitle>
            <CardDescription>
              Ative/desative acessos. Botões e cards vêm do submódulo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {users.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <div>
                  <p className="text-sm font-medium">{u.nome}</p>
                  <p className="text-xs text-muted-foreground">{u.papel}</p>
                </div>
                <Button
                  size="sm"
                  variant={u.ativo ? "secondary" : "outline"}
                  onClick={() => toggle(u.id)}
                >
                  {u.ativo ? "Ativo" : "Inativo"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
