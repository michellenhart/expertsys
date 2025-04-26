export type ConditionOperator = "=" | "<>";

export const ConditionOperator = {
  EQUAL: "=" as ConditionOperator,
  DIFFERENT: "<>" as ConditionOperator
} as const;
