import { FieldType } from "../../generated/prisma";

// Field type metadata and configurations
export interface FieldTypeConfig {
  label: string;
  icon: string;
  description: string;
  defaultConfig?: any;
  supportsConfig: boolean;
}

export const FIELD_TYPE_CONFIGS: Record<FieldType, FieldTypeConfig> = {
  TEXT: {
    label: "Single line text",
    icon: "T",
    description: "Short text like names, titles, etc.",
    supportsConfig: false,
  },
  LONG_TEXT: {
    label: "Long text",
    icon: "¶",
    description: "Multi-line text with formatting",
    supportsConfig: false,
  },
  NUMBER: {
    label: "Number",
    icon: "#",
    description: "Integers or decimals",
    defaultConfig: {
      precision: 0, // 0 = integer, 2 = 2 decimal places
      format: "decimal", // "decimal" | "currency" | "percent"
      currencySymbol: "$",
    },
    supportsConfig: true,
  },
  DATE: {
    label: "Date",
    icon: "📅",
    description: "Date picker",
    defaultConfig: {
      format: "YYYY-MM-DD", // Display format
      includeTime: false,
      timeFormat: "24h", // "12h" | "24h"
    },
    supportsConfig: true,
  },
  CHECKBOX: {
    label: "Checkbox",
    icon: "☑",
    description: "True/false toggle",
    supportsConfig: false,
  },
  SELECT: {
    label: "Single select",
    icon: "▼",
    description: "Pick one option from a list",
    defaultConfig: {
      options: [
        { id: "opt1", label: "Option 1", color: "gray" },
        { id: "opt2", label: "Option 2", color: "blue" },
        { id: "opt3", label: "Option 3", color: "green" },
      ],
    },
    supportsConfig: true,
  },
  MULTI_SELECT: {
    label: "Multiple select",
    icon: "▼▼",
    description: "Pick multiple options from a list",
    defaultConfig: {
      options: [
        { id: "opt1", label: "Option 1", color: "gray" },
        { id: "opt2", label: "Option 2", color: "blue" },
        { id: "opt3", label: "Option 3", color: "green" },
      ],
    },
    supportsConfig: true,
  },
  URL: {
    label: "URL",
    icon: "🔗",
    description: "Clickable web links",
    supportsConfig: false,
  },
  EMAIL: {
    label: "Email",
    icon: "✉",
    description: "Email addresses",
    supportsConfig: false,
  },
  PHONE: {
    label: "Phone",
    icon: "📞",
    description: "Phone numbers",
    defaultConfig: {
      format: "US", // "US" | "International"
    },
    supportsConfig: true,
  },
  ATTACHMENT: {
    label: "Attachment",
    icon: "📎",
    description: "Files and images",
    defaultConfig: {
      maxFiles: 10,
      maxSizePerFile: 10 * 1024 * 1024, // 10MB
      allowedTypes: ["image/*", "application/pdf", ".doc", ".docx"],
    },
    supportsConfig: true,
  },
};

// Color options for SELECT and MULTI_SELECT fields
export const SELECT_COLORS = [
  { value: "gray", label: "Gray", bg: "#E5E7EB", text: "#1F2937" },
  { value: "red", label: "Red", bg: "#FEE2E2", text: "#991B1B" },
  { value: "orange", label: "Orange", bg: "#FED7AA", text: "#9A3412" },
  { value: "yellow", label: "Yellow", bg: "#FEF3C7", text: "#92400E" },
  { value: "green", label: "Green", bg: "#D1FAE5", text: "#065F46" },
  { value: "blue", label: "Blue", bg: "#DBEAFE", text: "#1E40AF" },
  { value: "purple", label: "Purple", bg: "#E9D5FF", text: "#6B21A8" },
  { value: "pink", label: "Pink", bg: "#FCE7F3", text: "#9F1239" },
];

// Validation functions
export function validateFieldValue(value: any, fieldType: FieldType, config?: any): boolean {
  if (value === null || value === undefined || value === "") {
    return true; // Empty values are always valid (unless isRequired is set)
  }

  switch (fieldType) {
    case "TEXT":
    case "LONG_TEXT":
      return typeof value === "string";

    case "NUMBER":
      return typeof value === "number" && !isNaN(value);

    case "DATE":
      // Validate ISO 8601 date string
      if (typeof value !== "string") return false;
      const date = new Date(value);
      return !isNaN(date.getTime());

    case "CHECKBOX":
      return typeof value === "boolean";

    case "SELECT":
      // Value should be a string (option ID)
      return typeof value === "string";

    case "MULTI_SELECT":
      // Value should be an array of strings (option IDs)
      return Array.isArray(value) && value.every((v) => typeof v === "string");

    case "URL":
      if (typeof value !== "string") return false;
      try {
        new URL(value);
        return true;
      } catch {
        return false;
      }

    case "EMAIL":
      if (typeof value !== "string") return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);

    case "PHONE":
      return typeof value === "string";

    case "ATTACHMENT":
      // Value should be an array of file objects
      return (
        Array.isArray(value) &&
        value.every(
          (f) =>
            typeof f === "object" &&
            typeof f.url === "string" &&
            typeof f.name === "string"
        )
      );

    default:
      return true;
  }
}

// Format value for display
export function formatFieldValue(value: any, fieldType: FieldType, config?: any): string {
  if (value === null || value === undefined || value === "") {
    return "";
  }

  switch (fieldType) {
    case "TEXT":
    case "LONG_TEXT":
    case "URL":
    case "EMAIL":
    case "PHONE":
      return String(value);

    case "NUMBER":
      const num = Number(value);
      const precision = config?.precision ?? 0;
      const format = config?.format ?? "decimal";

      if (format === "currency") {
        const symbol = config?.currencySymbol ?? "$";
        return `${symbol}${num.toFixed(precision)}`;
      } else if (format === "percent") {
        return `${(num * 100).toFixed(precision)}%`;
      }
      return num.toFixed(precision);

    case "DATE":
      const date = new Date(value);
      const includeTime = config?.includeTime ?? false;
      const dateFormat = config?.format ?? "YYYY-MM-DD";

      if (includeTime) {
        return date.toLocaleString();
      }
      return date.toLocaleDateString();

    case "CHECKBOX":
      return value ? "✓" : "";

    case "SELECT":
      // Return the option label
      const option = config?.options?.find((o: any) => o.id === value);
      return option?.label ?? value;

    case "MULTI_SELECT":
      // Return comma-separated labels
      if (!Array.isArray(value)) return "";
      return value
        .map((id) => {
          const opt = config?.options?.find((o: any) => o.id === id);
          return opt?.label ?? id;
        })
        .join(", ");

    case "ATTACHMENT":
      if (!Array.isArray(value)) return "";
      return `${value.length} file${value.length !== 1 ? "s" : ""}`;

    default:
      return String(value);
  }
}

// Get appropriate filter operators for a field type
export function getFilterOperatorsForType(fieldType: FieldType): string[] {
  switch (fieldType) {
    case "TEXT":
    case "LONG_TEXT":
    case "EMAIL":
    case "PHONE":
    case "URL":
      return [
        "EQUALS",
        "NOT_EQUALS",
        "CONTAINS",
        "NOT_CONTAINS",
        "IS_EMPTY",
        "IS_NOT_EMPTY",
      ];

    case "NUMBER":
    case "DATE":
      return [
        "EQUALS",
        "NOT_EQUALS",
        "GREATER_THAN",
        "LESS_THAN",
        "IS_EMPTY",
        "IS_NOT_EMPTY",
      ];

    case "CHECKBOX":
      return ["EQUALS", "IS_EMPTY", "IS_NOT_EMPTY"];

    case "SELECT":
    case "MULTI_SELECT":
      return ["EQUALS", "NOT_EQUALS", "CONTAINS", "IS_EMPTY", "IS_NOT_EMPTY"];

    case "ATTACHMENT":
      return ["IS_EMPTY", "IS_NOT_EMPTY"];

    default:
      return ["EQUALS", "NOT_EQUALS", "IS_EMPTY", "IS_NOT_EMPTY"];
  }
}
