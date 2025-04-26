export type ConditionConnective = "E" | "OU";

export const ConditionOperator = {
  E: "E" as ConditionConnective,
  OU: "OU" as ConditionConnective
} as const;
