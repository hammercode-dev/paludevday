import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  icon?: React.ReactNode;
};

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group pdd2026-gradient-btn relative rounded-lg px-8 py-4 font-semibold",
        props.icon && "inline-flex transform items-center gap-3",
        props.className
      )}
    >
      {props.icon}
      {props.children}
    </button>
  );
}

export { Button };
