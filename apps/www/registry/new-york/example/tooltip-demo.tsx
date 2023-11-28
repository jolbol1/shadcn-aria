import { Pencil1Icon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon">
        <Pencil1Icon className="h-4 w-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
