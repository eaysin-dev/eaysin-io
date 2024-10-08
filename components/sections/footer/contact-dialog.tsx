"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import useContact from "@/hooks/useContact";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const ContactDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { formRef, inputError, onSubmit, isLoading } = useContact(() =>
    setIsDialogOpen(false)
  );

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div className="md:col-span-2 lg:col-span-1">
          <Button className="py-6 w-full">Let&apos;s Talk</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Me</DialogTitle>
          <DialogDescription className="mt-1">
            I&apos;m excited to hear from you! Please fill out the form below to
            send me a message.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
            {inputError?.name && (
              <Typography variant="error">{inputError.name}</Typography>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" />
            {inputError?.email && (
              <Typography variant="error">{inputError.email}</Typography>
            )}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" />
            {inputError?.message && (
              <Typography variant="error">{inputError.message}</Typography>
            )}
          </div>
          <DialogFooter className="pt-2">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
