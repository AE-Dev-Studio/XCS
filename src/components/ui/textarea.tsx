// import * as React from "react"

// import { cn } from "@/lib/utils"

// function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
//   return (
//     <textarea
//       data-slot="textarea"
//       className={cn(
//         "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full  border-black bg-transparent px-3 py-2 text-base  transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export { Textarea }
import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex w-full min-h-16 border border-gray-500 bg-transparent px-3 py-2 text-base text-black outline-none transition-colors placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm hover:border-black focus:border-black",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
