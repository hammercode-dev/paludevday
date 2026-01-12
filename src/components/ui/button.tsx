import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  icon?: React.ReactNode;
};

function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group from-pdd-purple hover:from-pdd-purple/90 hover:shadow-pdd-purple/50 to-pdd-blue hover:to-pdd-blue/90 relative rounded-lg bg-linear-to-r px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl",
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
