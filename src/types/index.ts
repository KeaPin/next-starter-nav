export interface AITool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string;
  category: string;
  tags: string[];
  isFree: boolean;
  isPremium?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
} 