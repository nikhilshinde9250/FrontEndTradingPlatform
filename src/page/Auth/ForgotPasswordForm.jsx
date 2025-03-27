// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: ""
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div >
         <h1 className="text-xl font-bold text-center pb-5">Forgot Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="accountHolderName"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter your register email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
          <Button type="submit" className="w-full py-6">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPasswordForm;
