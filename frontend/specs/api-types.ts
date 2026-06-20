export type OperationType = "income" | "outcome";
export type Category = "suppliers" | "sales" | "operational" | "administrative" | "others";
export type BusinessType = "B2B" | "B2C";

export interface FacetsResponse {
  operation_types: OperationType[];
  business_types: BusinessType[];
  categories: Category[];
  min_date: string;
  max_date: string;
}

export interface AlertEntry {
  period: string;
  outcome_total: number;
  baseline_average: number;
  increase_ratio: number;
}

export type AlertResponse = AlertEntry[];

export interface CategoryEntry {
  category: Category;
  operation_type: OperationType;
  total_amount: number;
}

export interface TopCategoriesResponse {
  b2b: CategoryEntry[];
  b2c: CategoryEntry[];
}