"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Button,
  Header,
  ListBox,
  ListBoxItem,
  Popover,
  Select as RaSelect,
  SelectValue as RaSelectValue,
  Section,
  Separator,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const Select = RaSelect

const SelectSection = Section

const SelectValue = React.forwardRef<
  React.ElementRef<typeof RaSelectValue>,
  React.ComponentPropsWithoutRef<typeof RaSelectValue>
>(({ className, ...props }, ref) => (
  <RaSelectValue
    ref={ref}
    className={(values) =>
      cnv(values, "data-[placeholder]:text-muted-foreground", className)
    }
    {...props}
  />
))
SelectValue.displayName = "SelectValue"

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Button
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <CaretSortIcon className="h-4 w-4 opacity-50" />
      </>
    )}
  </Button>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectPopover = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover>
>(({ className, offset = 0, ...props }, ref) => (
  <Popover
    ref={ref}
    offset={offset}
    className={(values) =>
      cnv(
        values,
        "w-[--trigger-width] relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
        className
      )
    }
    {...props}
  />
))
SelectPopover.displayName = "SelectPopover"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof ListBox>,
  React.ComponentPropsWithoutRef<typeof ListBox>
>(({ className, ...props }, ref) => (
  <ListBox ref={ref} className={cn("p-1")} {...props} />
))
SelectContent.displayName = "SelectContent"

const SelectHeader = React.forwardRef<
  React.ElementRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header>
>(({ className, ...props }, ref) => (
  <Header
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectHeader.displayName = "SelectHeader"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof ListBoxItem>,
  React.ComponentPropsWithoutRef<typeof ListBoxItem>
>(({ className, children, ...props }, ref) => (
  <ListBoxItem
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {values.isSelected && (
          <span className="absolute right-2 flex h-4 w-4 items-center justify-center">
            <CheckIcon className="h-4 w-4" />
          </span>
        )}
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </ListBoxItem>
))
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = "Separator"

export {
  Select,
  SelectSection,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectHeader,
  SelectItem,
  SelectPopover,
  SelectSeparator,
}
