"use client"

import { useChainId, useSwitchChain } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

interface ChainGuardProps {
  children: React.ReactNode
  requiredChainId?: number
}

export function ChainGuard({ children, requiredChainId = 11155111 }: ChainGuardProps) {
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  const isOnCorrectChain = chainId === requiredChainId

  if (!isOnCorrectChain) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              Red Incorrecta
            </CardTitle>
            <CardDescription>
              Necesitas estar conectado a la red Sepolia para usar esta aplicación.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-sm text-muted-foreground">
              <p>Red actual: {chainId || "Desconocida"}</p>
              <p>Red requerida: Sepolia Testnet (ID: {requiredChainId})</p>
            </div>
            <Button
              onClick={() => switchChain({ chainId: requiredChainId })}
              className="w-full"
            >
              Cambiar a Sepolia
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}