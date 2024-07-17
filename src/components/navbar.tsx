"use client"
import React, { useState } from "react"
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu"
import { cn } from "@/lib/utils"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar