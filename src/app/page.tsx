"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/components/SearchBar';
import AIToolCard from '@/components/AIToolCard';
import CategoryCard from '@/components/CategoryCard';
import { aiTools, categories } from '@/data/aiTools';
import { AITool } from '@/types';
import { SearchProvider, useSearch } from '@/context/SearchContext';

// 客户端搜索栏组件
function ClientSearchBar() {
  const { setSearchQuery } = useSearch();
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  return <SearchBar onSearch={handleSearch} />;
}

// 创建一个客户端组件，专门处理useSearchParams的逻辑
function AIToolsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { searchQuery } = useSearch();
  const [filteredTools, setFilteredTools] = useState<AITool[]>(aiTools);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 使用URL参数初始化分类过滤器
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // 过滤工具
  useEffect(() => {
    let filtered = [...aiTools];
    
    // 按分类过滤
    if (selectedCategory) {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    // 按搜索词过滤
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description.toLowerCase().includes(query) ||
          tool.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredTools(filtered);
  }, [selectedCategory, searchQuery]);

  // 处理分类选择
  const handleCategorySelect = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
      router.push('/', { scroll: false });
    } else {
      setSelectedCategory(categoryId);
      router.push(`/?category=${categoryId}`, { scroll: false });
    }
  };

  return (
    <>
      {/* 分类过滤器 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">按分类浏览</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={selectedCategory === category.id}
              onClick={() => handleCategorySelect(category.id)}
            />
          ))}
        </div>
      </div>

      {/* 工具列表 */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          {selectedCategory 
            ? `${categories.find(cat => cat.id === selectedCategory)?.name || ''}工具` 
            : searchQuery 
              ? `搜索结果: "${searchQuery}"`
              : '所有AI工具'}
          <span className="text-gray-500 dark:text-gray-400 text-sm font-normal ml-2">
            ({filteredTools.length}个)
          </span>
        </h2>
        
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <AIToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              没有找到符合条件的AI工具。请尝试其他搜索词或分类。
            </p>
          </div>
        )}
      </div>
    </>
  );
}

// 主页组件，使用Suspense包裹含有useSearchParams的内容
export default function Home() {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a]">
        {/* 英雄区域 */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-[#0a0a0a] pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                发现最佳AI工具
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                汇集最全面的人工智能工具资源，帮助您更高效地工作和创作
              </p>
              <div className="flex justify-center">
                <Suspense fallback={<div>加载中...</div>}>
                  <ClientSearchBar />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        {/* 主内容区域 */}
        <section className="py-12 -mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="text-center p-8">正在加载AI工具...</div>}>
              <AIToolsContent />
            </Suspense>
          </div>
        </section>

        {/* 统计信息区域 */}
        <section className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                最全面的AI工具资源库
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                为您精心筛选和整理优质AI资源
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {aiTools.length}+
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  AI工具和服务
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {categories.length}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  不同分类
                </p>
              </div>
              <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  24/7
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  持续更新
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SearchProvider>
  );
}
