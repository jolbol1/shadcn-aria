import * as React from "react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export default function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectPopover placement="bottom">
                  <SelectContent>
                    <SelectItem id="next">Next.js</SelectItem>
                    <SelectItem id="sveltekit">SvelteKit</SelectItem>
                    <SelectItem id="astro">Astro</SelectItem>
                    <SelectItem id="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </SelectPopover>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
