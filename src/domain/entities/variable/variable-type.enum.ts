export type VariableType = "NUMERIC" | "MULTIVALUED" | "UNIVALUED";

export const VariableType = {
  NUMERIC: "NUMERIC" as VariableType,
  MULTIVALUED: "MULTIVALUED" as VariableType,
  UNIVALUED: "UNIVALUED" as VariableType,
} as const;
