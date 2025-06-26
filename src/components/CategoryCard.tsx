"use client";

import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
        isActive 
          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 shadow-sm scale-105'
          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {category.icon && <span className="text-2xl mb-2">{category.icon}</span>}
      <span className="font-medium text-sm">{category.name}</span>
    </button>
  );
} 