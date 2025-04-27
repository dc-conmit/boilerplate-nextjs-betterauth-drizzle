"use client"

import { Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import CardWrapper from "@/components/ui/card-wrapper"
import { createUser } from "./actions"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    const result = await createUser(formData);
    
    if (result.success) {
      toast.success("Your account has been created successfully.");
      router.push("/login");
    } else {
      toast.error(result.error || "Failed to create account. Please try again.");
    }
  }

  return (
    <Suspense>
      <div className="min-h-screen flex items-center justify-center p-4">
        <CardWrapper cardTitle="Create an Account" cardDescription="Create an account to get started">
          <form action={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password" 
                type="password"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Role</Label>
              <RadioGroup
                name="role"
                defaultValue="property_manager"
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="property_manager" id="property_manager" />
                  <Label htmlFor="property_manager">Property Manager</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="service_provider" id="service_provider" />
                  <Label htmlFor="service_provider">Service Provider</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </CardWrapper>
      </div>
    </Suspense>
  );
}