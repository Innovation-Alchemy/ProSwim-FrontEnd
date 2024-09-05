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
import { verifyAccountFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormBackground } from "@/components";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyAccount = () => {
  const form = useForm<z.infer<typeof verifyAccountFormSchema>>({
    resolver: zodResolver(verifyAccountFormSchema),
    defaultValues: {
      pin: "",
    },
  });
  const onSubmit = (values: z.infer<typeof verifyAccountFormSchema>) => {
    console.log(values);
  }

  const handleResendingVerificationEmail = () => {
    // handle resending verification email
  };
  return (
    <FormBackground>
      <div className="text-center">
        <h1 className="text-[30px]">Please Verify Your Account</h1>
        <p className="text-sm text-muted w-2/3 mx-auto">
          Enter the six digit code we sent to your email address to verify your
          new ProSwim Account
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full relative"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="relative overflow-y-hidden h-[180px] p-1">
                <FormLabel className="text-muted">One-Time Password</FormLabel>
                <FormControl className="!overflow-auto !w-full">
                  <InputOTP maxLength={6} {...field}>
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <InputOTPGroup>
                          <InputOTPSlot
                            className="w-[77px] h-24 text-4xl text-primary no-focus !ring-primary"
                            index={index}
                          />
                        </InputOTPGroup>
                      ))}
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-muted">
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage className="absolute text-red-500 bottom-0" />
              </FormItem>
            )}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-sm">
              Resend verification email ?
              <Button
                type="button"
                onClick={handleResendingVerificationEmail}
                className="!bg-transparent text-primary p-0 m-0 font-bold"
              >
                resend
              </Button>
            </div>
            <Button type="submit" className="w-full text-xl">
              Verify and continue
            </Button>
          </div>
        </form>
      </Form>
    </FormBackground>
  );
};

export default VerifyAccount;
