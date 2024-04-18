'use client'

import { Skeleton } from "@/components/skeleton"
import { useSearchParams } from "next/navigation"

export default function SearchLoading() {
  const searchParams = useSearchParams()

  const query = searchParams.get('p')

  return (
    <div className="flex flex-col gap-4">
      <p>
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[390px]" />
        <Skeleton className="h-[390px]" />
        <Skeleton className="h-[390px]" />
        <Skeleton className="h-[390px]" />
        <Skeleton className="h-[390px]" />
        <Skeleton className="h-[390px]" />
      </div>
    </div>
  )
}
