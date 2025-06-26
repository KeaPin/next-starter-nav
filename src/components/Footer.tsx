"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AI导航站</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              汇集最新、最全面的AI工具资源，为您提供一站式AI导航服务。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">链接</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  关于我们
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">分类</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/?category=chatbots"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  聊天机器人
                </Link>
              </li>
              <li>
                <Link 
                  href="/?category=image"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  图像生成
                </Link>
              </li>
              <li>
                <Link 
                  href="/?category=video"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  视频生成
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              有任何问题或建议，请联系我们
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              邮箱: contact@ai-nav.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} AI导航站. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  );
} 