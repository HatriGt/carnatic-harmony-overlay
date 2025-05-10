
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { CourseLevel } from '@/data/courses';
import { BookOpen, ChevronRight, Calendar, User, Award } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
  showLevels?: boolean;
  onLevelClick?: (level: CourseLevel) => void;
  selectedLevel?: CourseLevel;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, 
  description, 
  imageSrc,
  onClick,
  showLevels = false,
  onLevelClick,
  selectedLevel = 'Beginner'
}) => {
  const levels: CourseLevel[] = ['Beginner', 'Intermediate', 'Advanced'];
  
  const getBadgeColor = (level: CourseLevel) => {
    if (level === 'Beginner') return 'level-badge-beginner';
    if (level === 'Intermediate') return 'level-badge-intermediate';
    return 'level-badge-advanced';
  };

  const getLevelIcon = (level: CourseLevel) => {
    if (level === 'Beginner') return <User size={12} className="mr-1" />;
    if (level === 'Intermediate') return <BookOpen size={12} className="mr-1" />;
    return <Award size={12} className="mr-1" />;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 course-card">
      <div className="h-52 overflow-hidden relative group">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-music-800 flex items-center">
          <BookOpen size={18} className="mr-2 text-music-500" />
          {title}
        </h3>
        
        {showLevels && (
          <div className="flex flex-wrap gap-2 mb-4">
            {levels.map((level) => (
              <span 
                key={level}
                onClick={() => onLevelClick && onLevelClick(level)}
                className={cn(
                  'level-badge cursor-pointer transition-all duration-200 hover:scale-105 flex items-center',
                  getBadgeColor(level),
                  selectedLevel === level && 'ring-2 ring-offset-1',
                  selectedLevel === level && level === 'Beginner' && 'ring-green-400',
                  selectedLevel === level && level === 'Intermediate' && 'ring-blue-400',
                  selectedLevel === level && level === 'Advanced' && 'ring-purple-400'
                )}
              >
                {getLevelIcon(level)}
                {level}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600 mb-5 line-clamp-3">{description}</p>
        <Button 
          className="w-full bg-music-500 hover:bg-music-600 text-white transition-all duration-300 group"
          onClick={onClick}
        >
          <BookOpen size={18} className="mr-2 transition-transform group-hover:-translate-y-1" />
          Explore Course
          <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
