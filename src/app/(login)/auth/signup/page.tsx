"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ServicesInput } from "@/components/ui/services-input"
import { toast } from "sonner"
import { signUp } from "@/lib/auth/auth-client"
import CardWrapper from "@/components/ui/card-wrapper"

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "homeowner",
    services: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        role: formData.role,
        services: formData.services,
      });
      toast.success("Your account has been created successfully.");
      router.push("/login");
    } catch (error) {
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <CardWrapper cardTitle="Create an Account" cardDescription="Create an account to get started">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Role</Label>
            <RadioGroup
              value={formData.role}
              onValueChange={(value) => setFormData({ ...formData, role: value })}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="homeowner" id="homeowner" />
                <Label htmlFor="homeowner">Homeowner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="service_provider" id="service_provider" />
                <Label htmlFor="service_provider">Service Provider</Label>
              </div>
            </RadioGroup>
          </div>

          {formData.role === "service_provider" && (
            <div className="space-y-2">
              <Label>Services</Label>
              <ServicesInput
                value={formData.services}
                onChange={(services: string[]) => setFormData({ ...formData, services })}
                placeholder="Add services you offer..."
              />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>
        </form>
      </CardWrapper>
    </div>
  );
} 