export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          关于AI导航站
        </h1>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">我们的使命</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            AI导航站致力于为用户提供最全面、最实用的人工智能工具和资源导航。我们的目标是帮助每个人轻松发现、了解和使用最前沿的AI技术，提高工作效率和创造力。
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            在这个AI技术迅速发展的时代，新工具和服务层出不穷。我们希望通过精心整理和分类，为您节省寻找合适工具的时间，让您能够快速找到最适合您需求的AI解决方案。
          </p>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">我们的价值观</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium">全面性</span> - 我们努力收集和整理各种类型的AI工具，确保覆盖不同领域和应用场景。</li>
            <li><span className="font-medium">实用性</span> - 我们注重工具的实际应用价值，优先推荐那些能够真正解决问题和提高效率的工具。</li>
            <li><span className="font-medium">及时性</span> - 我们持续关注AI领域的最新发展，及时更新导航内容，确保信息的时效性。</li>
            <li><span className="font-medium">用户体验</span> - 我们致力于打造简洁、易用的导航界面，让您能够轻松找到所需的工具和资源。</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">联系我们</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            如果您有任何问题、建议或者想要推荐优质的AI工具，欢迎联系我们。
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            邮箱：<a href="mailto:contact@ai-nav.com" className="text-blue-500 hover:underline">contact@ai-nav.com</a>
          </p>
        </div>
      </div>
    </div>
  );
} 