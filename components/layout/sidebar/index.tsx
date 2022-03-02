import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen mr-4">
      <div className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div className="flex-shrink-0 px-4 pt-4 flex flex-row items-center justify-between">
          <h2 className="text-md font-semibold text-gray-900 pointer-events-none">
            Design Fundation
          </h2>
        </div>
        <nav className="flex-grow md:block px-0 pb-4 md:pb-0 md:overflow-y-auto">
          <Link href="/button">
            <span className="block px-8 py-2 mt-2 text-sm text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-grey-0 dark-mode:hover:text-grey-0 dark-mode:text-gray-200 hover:text-grey-0 focus:text-gray-900 hover:bg-primary focus:bg-blue-200 focus:outline-none focus:shadow-outline cursor-pointer">
              Button
            </span>
          </Link>
          <Link href="/typography">
            <span className="block px-8 py-2 mt-2 text-sm text-gray-900 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-grey-0 dark-mode:hover:text-grey-0 dark-mode:text-gray-200 hover:text-grey-0 focus:text-gray-900 hover:bg-primary focus:bg-blue-200 focus:outline-none focus:shadow-outline cursor-pointer">
              Typography
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
