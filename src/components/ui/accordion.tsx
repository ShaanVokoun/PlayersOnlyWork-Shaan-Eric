

// function Accordion({
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
//   return <AccordionPrimitive.Root data-slot="accordion" {...props} />
// }

// function AccordionItem({
//   className,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
//   return (
//     <AccordionPrimitive.Item
//       data-slot="accordion-item"
//       className={cn("border-b last:border-b-0", className)}
//       {...props}
//     />
//   )
// }

// function AccordionTrigger({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
//   return (
//     <AccordionPrimitive.Header className="flex">
//       <AccordionPrimitive.Trigger
//         data-slot="accordion-trigger"
//         className={cn(
//           "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
//           className
//         )}
//         {...props}
//       >
//         {children}
//         <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
//       </AccordionPrimitive.Trigger>
//     </AccordionPrimitive.Header>
//   )
// }

// function AccordionContent({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
//   return (
//     <AccordionPrimitive.Content
//       data-slot="accordion-content"
//       className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
//       {...props}
//     >
//       <div className={cn("pt-0 pb-4", className)}>{children}</div>
//     </AccordionPrimitive.Content>
//   )
// }

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  toggleOpen,
}) => (
  <div className="mb-4">
    <div className="w-full rounded-lg overflow-hidden bg-white dark:bg-gray-900">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={toggleOpen}
      >
        <span className="text-xl font-semibold text-gray-600 dark:text-white">
          {title}
        </span>
        <span
          className={`transform transition-transform duration-300 bg-gray-600 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown className="text-2xl text-white" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="p-4">
          <p className="text-white font-light">{content}</p>
        </div>
      </div>
    </div>
  </div>
);

const defaultAccordionItems = [
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Lorem Ipsum",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({
  items = defaultAccordionItems,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;