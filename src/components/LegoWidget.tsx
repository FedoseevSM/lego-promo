import React from 'react';
import { BoxIcon } from 'lucide-react';
export type LegoColor = 'red' | 'blue' | 'yellow' | 'green' | 'purple' | 'orange';
interface LegoWidgetProps {
  id: string;
  name: string;
  description: string;
  icon: BoxIcon;
  color: LegoColor;
  isSelected: boolean;
  onToggle: (id: string) => void;
}
const colorMap: Record<LegoColor, {
  bg: string;
  bgDark: string;
  border: string;
  shadow: string;
  stud: string;
  studDark: string;
  glow: string;
}> = {
  red: {
    bg: 'bg-red-500',
    bgDark: 'bg-red-600',
    border: 'border-red-700',
    shadow: 'shadow-red-900',
    stud: 'bg-red-400',
    studDark: 'bg-red-500',
    glow: 'shadow-red-500/50'
  },
  blue: {
    bg: 'bg-blue-500',
    bgDark: 'bg-blue-600',
    border: 'border-blue-700',
    shadow: 'shadow-blue-900',
    stud: 'bg-blue-400',
    studDark: 'bg-blue-500',
    glow: 'shadow-blue-500/50'
  },
  yellow: {
    bg: 'bg-yellow-400',
    bgDark: 'bg-yellow-500',
    border: 'border-yellow-600',
    shadow: 'shadow-yellow-800',
    stud: 'bg-yellow-300',
    studDark: 'bg-yellow-400',
    glow: 'shadow-yellow-500/50'
  },
  green: {
    bg: 'bg-green-500',
    bgDark: 'bg-green-600',
    border: 'border-green-700',
    shadow: 'shadow-green-900',
    stud: 'bg-green-400',
    studDark: 'bg-green-500',
    glow: 'shadow-green-500/50'
  },
  purple: {
    bg: 'bg-purple-500',
    bgDark: 'bg-purple-600',
    border: 'border-purple-700',
    shadow: 'shadow-purple-900',
    stud: 'bg-purple-400',
    studDark: 'bg-purple-500',
    glow: 'shadow-purple-500/50'
  },
  orange: {
    bg: 'bg-orange-500',
    bgDark: 'bg-orange-600',
    border: 'border-orange-700',
    shadow: 'shadow-orange-900',
    stud: 'bg-orange-400',
    studDark: 'bg-orange-500',
    glow: 'shadow-orange-500/50'
  }
};
export function LegoWidget({
  id,
  name,
  description,
  icon: Icon,
  color,
  isSelected,
  onToggle
}: LegoWidgetProps) {
  const styles = colorMap[color];
  return <button onClick={() => onToggle(id)} className={`
        relative group w-full text-left transition-all duration-300 transform
        ${isSelected ? 'translate-y-2 scale-[0.98]' : 'hover:-translate-y-2 hover:scale-[1.03]'}
        outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-400 rounded-2xl
      `} aria-pressed={isSelected}>
      {/* 3D Block Body with realistic depth */}
      <div className={`
        relative z-10 rounded-2xl border-4 ${styles.border} ${styles.bg}
        ${isSelected ? 'shadow-none' : `shadow-[0_10px_0_0_rgba(0,0,0,0.3)] ${styles.glow}`}
        transition-all duration-300 overflow-visible
      `}>
        {/* Top surface with studs grid */}
        <div className="absolute -top-5 left-0 right-0 h-5 flex items-start justify-center">
          <div className="grid grid-cols-4 gap-3 px-6">
            {[...Array(8)].map((_, i) => <div key={i} className="relative">
                {/* Stud with 3D effect */}
                <div className={`
                  w-8 h-6 rounded-t-xl ${styles.stud} 
                  shadow-[0_2px_0_0_rgba(0,0,0,0.2)]
                  relative overflow-hidden
                `}>
                  {/* Stud highlight */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-white/30 rounded-t-xl"></div>
                  {/* Stud center circle */}
                  <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${styles.studDark} shadow-inner`}></div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Main block content */}
        <div className="p-6 pt-8 relative">
          {/* Plastic texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10 pointer-events-none rounded-xl"></div>

          {/* Shine effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

          {/* Side depth effect (left) */}
          <div className={`absolute left-0 top-0 bottom-0 w-2 ${styles.bgDark} rounded-l-xl`}></div>

          {/* Side depth effect (right) */}
          <div className={`absolute right-0 top-0 bottom-0 w-2 ${styles.bgDark} rounded-r-xl`}></div>

          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="p-3 bg-white/25 rounded-xl backdrop-blur-sm shadow-lg border border-white/30">
              <Icon className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            {isSelected && <div className="bg-white text-xs font-extrabold px-3 py-1.5 rounded-full text-gray-900 shadow-xl flex items-center animate-bounce">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                УСТАНОВЛЕНО
              </div>}
          </div>

          <h3 className="text-xl font-extrabold text-white mb-2 drop-shadow-lg tracking-tight relative z-10">
            {name}
          </h3>
          <p className="text-white/95 text-sm font-medium leading-relaxed relative z-10 drop-shadow-md">
            {description}
          </p>

          {/* Bottom edge highlight */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-xl"></div>
        </div>

        {/* Connection points at bottom (like real LEGO) */}
        <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-4 px-8">
          {[...Array(4)].map((_, i) => <div key={i} className={`w-6 h-3 ${styles.bgDark} rounded-b-md shadow-sm border-t border-black/20`}></div>)}
        </div>
      </div>
    </button>;
}