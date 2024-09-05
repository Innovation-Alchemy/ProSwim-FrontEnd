import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { loginFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginAnimation } from "@/assets";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { TextFormField } from "@/components/shared/TextFormField";
import { FormBackground, GoogleButton } from "@/components";

const Login = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      remmemberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values);
  }
  return (
    <FormBackground>
      <div>
        <h1 className="text-[40px] text-center">Welcome Back</h1>
        <div className="flex items-center justify-center gap-4 text-2xl">
          <img src={loginAnimation} alt="login" className="w-9 h-12" />
          <span>Login</span>
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
          <div className="flex justify-between items-center gap-5">
            <FormField
              control={form.control}
              name="remmemberMe"
              render={({ field }) => (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remmemberMe"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label htmlFor="remmemberMe" className="select-none">Remember me</label>
                </div>
              )}
            />
            <Link to={"/"} className="text-primary text-sm">
              Forgot password ?
            </Link>
          </div>
          <Button type="submit" className="w-full text-xl">
            Login
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
        Don't have an account ?
        <Link to={"/signup"} className="text-primary font-bold ml-2">
          Sign Up
        </Link>
      </p>
    </FormBackground>
  );
};

export default Login;
