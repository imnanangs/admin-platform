import { forwardRef } from "react";
import {
  Button as UIButton,
  type ButtonProps as UIButtonProps,
} from "@heroui/react";
import { clsx } from "clsx";

export interface ButtonProps extends UIButtonProps {
  loadingText?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading = false,
      isDisabled = false,
      loadingText,
      className,
      spinnerPlacement = "start",
      ...props
    },
    ref,
  ) => {
    return (
      <UIButton
        ref={ref}
        isDisabled={isDisabled || isLoading}
        isLoading={isLoading}
        spinnerPlacement={spinnerPlacement}
        className={clsx(className)}
        spinner={
          loadingText ? (
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              <span>{loadingText}</span>
            </div>
          ) : (
            props.spinner
          )
        }
        {...props}
      >
        {children}
      </UIButton>
    );
  },
);

Button.displayName = "Button";
