import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signupFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginAnimation } from "@/assets";
import { Link } from "react-router-dom";
import { TextFormField } from "@/components/shared/TextFormField";
import { FormBackground, GoogleButton } from "@/components";

const Signup = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof signupFormSchema>) {
    console.log(values);
  }
  return (
    <FormBackground>
      <div>
        <h1 className="text-[40px] text-center">Welcome Back</h1>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <img src={loginAnimation} alt="login" className="w-9 h-12" />
          <span>Signup</span>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
          <TextFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            required
          />
          <TextFormField
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            required
          />
          <TextFormField
            control={form.control}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            required
          />
          <Button type="submit" className="w-full text-xl">
            Signup
          </Button>
        </form>
      </Form>
      <div className="flex items-center gap-5 px-0.5">
        <span className="flex-1 h-0.5 bg-gray-400"></span>
        <span className="text-gray-500">Or Login With</span>
        <span className="flex-1 h-0.5 bg-gray-400"></span>
      </div>
      <GoogleButton />
      <p className="text-sm text-center">
        Already have an account ?
        <Link to={"/login"} className="text-primary font-bold ml-2">
          Login
        </Link>
      </p>
    </FormBackground>
  )
}

export default Signup