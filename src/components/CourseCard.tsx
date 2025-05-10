
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { CourseLevel } from '@/data/courses';
import { BookOpen } from 'lucide-react';

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

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md course-card">
      <div className="h-52 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-music-800">{title}</h3>
        
        {showLevels && (
          <div className="flex flex-wrap gap-2 mb-4">
            {levels.map((level) => (
              <span 
                key={level}
                onClick={() => onLevelClick && onLevelClick(level)}
                className={cn(
                  'level-badge cursor-pointer transition-all duration-200 hover:scale-105',
                  getBadgeColor(level),
                  selectedLevel === level && 'ring-2 ring-offset-1',
                  selectedLevel === level && level === 'Beginner' && 'ring-green-400',
                  selectedLevel === level && level === 'Intermediate' && 'ring-blue-400',
                  selectedLevel === level && level === 'Advanced' && 'ring-purple-400'
                )}
              >
                {level}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600 mb-5">{description}</p>
        <Button 
          className="w-full bg-music-500 hover:bg-music-600 text-white transition-all duration-300 group"
          onClick={onClick}
        >
          <BookOpen size={18} className="mr-2 transition-transform group-hover:-translate-y-1" />
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
