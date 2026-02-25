import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { HandleLogin } from "@/lib/action";
import { useRedirectuser, useTogglePassword } from "@/lib/hooks";
import type { ActionState } from "@/lib/type";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, formAction, isPending] = React.useActionState<
    ActionState,
    FormData
  >(HandleLogin, { message: "" });
  const navigate = useNavigate();
  const { isPassword, togglePassword } = useTogglePassword();

  // when signup success navigate to this path
  useRedirectuser("/task", state?.success, "Login Successfully.");

  return (
    <>
      <Container>
        <div className="shadow w-lg p-5 rounded-lg">
          <h3 className="text-4xl font-medium text-neutral-800 text-center font-sans">
            Login
          </h3>
          <div>
            {state.message && (
              <p className="text-sm text-green-500 font-medium text-center mt-2">
                {state.message}
              </p>
            )}
            {state.errors && (
              <p className="text-sm text-red-500 font-medium text-center mt-2">
                {state.errors}
              </p>
            )}
          </div>
          <form action={formAction}>
            <div className="mt-10 px-10 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-neutral-600 font-bold"
                >
                  Email:
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm text-neutral-600 font-bold"
                >
                  Password:
                </label>
                <Input
                  type={isPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="showpass" onClick={togglePassword} />
                <label
                  htmlFor="showpass"
                  className="text-xs text-neutral-500 font-medium"
                >
                  Show Password
                </label>
              </div>
              <Button
                className="w-full mt-5"
                type="submit"
                disabled={isPending}
              >
                Login
              </Button>
              <div className="flex justify-center items-center mt-3">
                <p className="text-sm text-neutral-500">
                  Dont have account signup
                </p>
                <Button variant="link" onClick={() => navigate("/signup")}>
                  Sign up
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
