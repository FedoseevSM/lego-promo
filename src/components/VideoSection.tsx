import React from 'react';
import { Play } from 'lucide-react';
interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
}
export function VideoSection({
  videoUrl = 'https://inv.perditum.com/embed/vaZOlKwFX_0?autoplay=1',
  title = 'Как работает партнёрская программа',
  description = 'Посмотрите короткий 20-минутный обзор того, как вы можете создать регулярный доход с WidgetBlocks.'
}: VideoSectionProps) {
const handlePlaylist = () => {
 window.open('https://inv.perditum.com/playlist?list=PLZzS4wQVyqj8FD8FqH37oolJ4TToCc-E3', '_blank');
}
  return <div className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl mb-6">
          <Play className="w-8 h-8 text-red-600" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="relative pb-[56.25%] h-0 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
          <iframe src={videoUrl} title={title} className="absolute top-0 left-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="mt-10">
          <button onClick={handlePlaylist} className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors group">
            <Play className="w-6 h-6 mr-2 fill-current group-hover:scale-110 transition-transform" />
            Смотреть полную серию уроков
          </button>
        </div>
      </div>
    </div>;
}