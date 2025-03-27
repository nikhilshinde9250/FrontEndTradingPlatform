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
import { useDispatch } from "react-redux";
import { register } from "@/State/Auth/Action";


const SignupForm = () => {
  const dispatch=useDispatch()
  const form = useForm({
    resolver: "",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(register(data))
    console.log(data);
  };
  return (
    <div >
      <h1 className="text-xl font-bold text-center pb-5">Create New Account</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="accountHolderName"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    //   name="accountNumber"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Enter your password"
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

export default SignupForm;
