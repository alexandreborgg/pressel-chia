
export interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  benefits: string[];
}

export interface UserStats {
  views: number;
  hoursAgo: number;
  spotsLeft: number;
}
