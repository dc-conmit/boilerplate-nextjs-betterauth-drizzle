"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ServicesInputProps {
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
}

export function ServicesInput({ value, onChange, placeholder = "Add a service...", className }: ServicesInputProps) {
  const [inputValue, setInputValue] = React.useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()
      if (!value.includes(inputValue.trim())) {
        onChange([...value, inputValue.trim()])
      }
      setInputValue("")
    }
  }

  const handleAdd = () => {
    if (inputValue.trim() && !value.includes(inputValue.trim())) {
      onChange([...value, inputValue.trim()])
      setInputValue("")
    }
  }

  const handleRemove = (service: string) => {
    onChange(value.filter((s) => s !== service))
  }

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((service) => (
          <Badge key={service} variant="secondary" className="flex items-center gap-1">
            {service}
            <button
              type="button"
              onClick={() => handleRemove(service)}
              className="ml-1 hover:text-destructive"
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
      </div>
      <div className="flex gap-2">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        <Button type="button" variant="outline" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  )
} 