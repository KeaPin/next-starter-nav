"use client";

import { AITool } from '@/types';
import Link from 'next/link';

interface AIToolCardProps {
  tool: AITool;
}

export default function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <Link 
      href={tool.url}
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white dark:bg-[#1a1a1a] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-black/[.08] dark:border-white/[.1] h-full"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {tool.icon ? (
              <div className="text-2xl">{tool.icon}</div>
            ) : (
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-lg font-bold">
                {tool.name.charAt(0)}
              </div>
            )}
            <h3 className="text-lg font-semibold">{tool.name}</h3>
          </div>
          <div className="flex gap-1">
            {tool.isFree && (
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full">
                免费
              </span>
            )}
            {tool.isPremium && (
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs rounded-full">
                付费
              </span>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-300 my-3 line-clamp-3 flex-grow">
          {tool.description}
        </p>
        
        <div className="mt-2 flex flex-wrap gap-1">
          {tool.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 