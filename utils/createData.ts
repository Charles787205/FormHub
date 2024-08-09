/**
 * @description This is the list of component that are used in create page
 *
 */

export type componentNamesType = {
  [key: string]: { name: string; icon: string }[];
};

export const componentNames: componentNamesType = {
  "Input Blocks": [
    {
      name: "Short Answer",
      icon: "maximize",
    },
    {
      name: "Long Answer",
      icon: "menu",
    },
    {
      name: "Email",
      icon: "mail",
    },
    {
      name: "Phone",
      icon: "call",
    },
    {
      name: "Date",
      icon: "calendar_month",
    },
    {
      name: "Time",
      icon: "schedule",
    },
    {
      name: "Number",
      icon: "123",
    },
    {
      name: "URL",
      icon: "link",
    },
  ],
  "Option Blocks": [
    {
      name: "Checkbox",
      icon: "check_box",
    },
    {
      name: "Multi Select",
      icon: "done_all",
    },
    {
      name: "Dropdown",
      icon: "add",
    },
    {
      name: "Multiple Choice",
      icon: "check_circle",
    },
  ],

  "Text Blocks": [
    {
      name: "Heading 1",
      icon: "format_h1",
    },
    {
      name: "Heading 2",
      icon: "format_h2",
    },
    {
      name: "Heading 3",
      icon: "format_h3",
    },
    {
      name: "Title",
      icon: "title",
    },
    {
      name: "Label",
      icon: "label",
    },
    {
      name: "Text",
      icon: "text_fields",
    },
  ],
} as const;
