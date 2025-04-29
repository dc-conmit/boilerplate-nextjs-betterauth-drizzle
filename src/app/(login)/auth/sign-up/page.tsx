"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CardWrapper from "@/components/ui/card-wrapper";
import { registerUser } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const result = await registerUser(formData);
    try {
      await registerUser(formData);
      toast.success("Your account has been created successfully.");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to create account");
    } finally {
      setLoading(false);
    }
    
    if (result.success) {
      router.push("/dashboard");
    }
  }

  return (
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

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
      </CardWrapper>
    </div>
  );
}
