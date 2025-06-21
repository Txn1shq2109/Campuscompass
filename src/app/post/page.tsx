"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PlusCircle } from "lucide-react";

const opportunitySchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long."),
  company: z.string().min(2, "Company name is required."),
  type: z.enum(["Internship", "Hackathon", "Scholarship", "Competition"]),
  domain: z.enum(["Tech", "Business", "Design", "Marketing", "Science"]),
  mode: z.enum(["Remote", "On-site", "Hybrid"]),
  deadline: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format.",
  }),
  url: z.string().url("Please enter a valid URL."),
  description: z.string().min(20, "Description must be at least 20 characters long."),
});

type OpportunityFormValues = z.infer<typeof opportunitySchema>;

export default function PostOpportunityPage() {
  const { toast } = useToast();
  const form = useForm<OpportunityFormValues>({
    resolver: zodResolver(opportunitySchema),
    defaultValues: {
      title: "",
      company: "",
      type: "Internship",
      domain: "Tech",
      mode: "Remote",
      deadline: "",
      url: "",
      description: "",
    },
  });

  function onSubmit(data: OpportunityFormValues) {
    console.log("New Opportunity Posted:", data);
    toast({
      title: "Opportunity Posted!",
      description: "The new opportunity has been successfully posted.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <PlusCircle className="h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">Post a New Opportunity</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Opportunity Title</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Software Engineering Intern" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Organization</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Innovatech" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select opportunity type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {opportunitySchema.shape.type.options.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domain</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {opportunitySchema.shape.domain.options.map(domain => (
                        <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField
              control={form.control}
              name="mode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mode</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select mode" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {opportunitySchema.shape.mode.options.map(mode => (
                        <SelectItem key={mode} value={mode}>{mode}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Deadline</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Application URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com/apply" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Provide a detailed description of the opportunity..."
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Post Opportunity</Button>
        </form>
      </Form>
    </div>
  );
}
