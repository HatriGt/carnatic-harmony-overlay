
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { CourseLevel, courseDetails } from '@/data/courses';
import { BookOpen, ChevronRight, Calendar, User, Award, Music, Info, Check, Clock, CheckCircle, Target, X } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface CourseDisplayProps {
  courseName: string;
  imageSrc: string;
  description: string;
}

const CourseDisplay: React.FC<CourseDisplayProps> = ({ 
  courseName, 
  imageSrc,
  description 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('Beginner');
  const [animateContent, setAnimateContent] = useState(true);
  
  const course = courseDetails[courseName];
  const levels: CourseLevel[] = course ? Object.keys(course) as CourseLevel[] : ['Beginner', 'Intermediate', 'Advanced'];
  
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);
  
  const handleLevelClick = (level: CourseLevel) => {
    if (isOpen) {
      handleLevelChange(level);
    } else {
      setSelectedLevel(level);
    }
  };

  const handleLevelChange = (level: CourseLevel) => {
    setAnimateContent(false);
    setTimeout(() => {
      setSelectedLevel(level);
      setAnimateContent(true);
    }, 300);
  };

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

  const getLevelColor = (level: CourseLevel) => {
    if (level === 'Beginner') return 'bg-green-500 hover:bg-green-600';
    if (level === 'Intermediate') return 'bg-blue-500 hover:bg-blue-600';
    return 'bg-purple-500 hover:bg-purple-600';
  };

  const getOverlayLevelIcon = (level: CourseLevel) => {
    if (level === 'Beginner') return <User className="mr-2" />;
    if (level === 'Intermediate') return <BookOpen className="mr-2" />;
    return <Award className="mr-2" />;
  };
  
  const levelDetails = course && course[selectedLevel];

  // Card Component
  const renderCard = () => (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 course-card">
      <div className="h-52 overflow-hidden relative group">
        <img 
          src={imageSrc} 
          alt={courseName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-music-800 flex items-center">
          <BookOpen size={18} className="mr-2 text-music-500" />
          {courseName}
        </h3>
        
        {course && (
          <div className="flex flex-wrap gap-2 mb-4">
            {levels.map((level) => (
              <span 
                key={level}
                onClick={() => handleLevelClick(level)}
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
          onClick={openOverlay}
        >
          <BookOpen size={18} className="mr-2 transition-transform group-hover:-translate-y-1" />
          Explore Course
          <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );

  // Overlay Component
  const renderOverlay = () => {
    if (!isOpen || !course) return null;
    
    return (
      <div 
        className={cn(
          'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center',
          isOpen ? 'animate-fade-in' : 'animate-fade-out'
        )}
        onClick={(e) => e.target === e.currentTarget && closeOverlay()}
      >
        <div 
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-scale-in"
        >
          <button 
            onClick={closeOverlay}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors z-10 shadow-md"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col md:flex-row">
            {/* Course Header - Left Side */}
            <div className="bg-music-500 bg-gradient-to-br from-music-400 to-music-700 text-white p-8 md:w-1/3 md:rounded-l-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnpNMTggMzZjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
              
              <div className="mb-8 animate-fade-in relative">
                <h2 className="text-3xl font-bold flex items-center">
                  <Music size={24} className="mr-2" />
                  {courseName}
                </h2>
                <div className="w-20 h-1 bg-white/70 mt-2 mb-4"></div>
                <div className="text-white/80 flex items-center mb-6">
                  <Info size={18} className="mr-2" />
                  <span>Choose your learning level</span>
                </div>
              </div>
              
              <div className="space-y-4 relative z-10">
                {Object.keys(course).map((level) => (
                  <Button
                    key={level}
                    onClick={() => handleLevelChange(level as CourseLevel)}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className={cn(
                      "w-full text-left justify-start border-2 transition-all duration-300 group",
                      selectedLevel === level 
                        ? "bg-white text-music-800 border-white shadow-lg" 
                        : "bg-transparent text-white border-white/30 hover:border-white/70"
                    )}
                  >
                    {getOverlayLevelIcon(level as CourseLevel)}
                    <span className="flex-1">{level}</span>
                    {selectedLevel === level && (
                      <Check size={18} className="ml-2 animate-fade-in" />
                    )}
                  </Button>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20 text-white/80 relative">
                <p className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-white/60" />
                  Enrollments open year-round
                </p>
              </div>
            </div>
            
            {/* Course Content - Right Side */}
            <ScrollArea className="p-8 md:w-2/3 bg-gradient-to-br from-white to-music-50 md:max-h-[80vh]">
              <div className={cn(
                'space-y-8 transition-all duration-300',
                animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}>
                <div className="p-6 bg-music-100 rounded-lg shadow-inner">
                  <h3 className="flex items-center text-xl font-semibold text-music-800 mb-4 border-b border-music-200 pb-2">
                    <Clock size={22} className="mr-3 text-music-500" />
                    Course Duration
                  </h3>
                  <p className="whitespace-pre-line text-lg">{levelDetails.duration}</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-music-100">
                  <h3 className="flex items-center text-xl font-semibold text-music-800 mb-4 border-b border-music-100 pb-2">
                    <CheckCircle size={22} className="mr-3 text-music-500" />
                    Prerequisites
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {levelDetails.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-music-500 mt-2 mr-3"></span>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-music-100">
                    <h3 className="flex items-center text-xl font-semibold text-music-800 mb-4 border-b border-music-100 pb-2">
                      <BookOpen size={22} className="mr-3 text-music-500" />
                      Course Highlights
                    </h3>
                    <ul className="space-y-3">
                      {levelDetails.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-music-600 mr-3">{index + 1}.</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-music-100">
                    <h3 className="flex items-center text-xl font-semibold text-music-800 mb-4 border-b border-music-100 pb-2">
                      <Target size={22} className="mr-3 text-music-500" />
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {levelDetails.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-music-600 mr-3">{index + 1}.</span>
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="pt-6 flex justify-center">
                  <Button 
                    className={cn(
                      "px-8 py-6 rounded-full text-white transition-transform hover:scale-105 shadow-lg",
                      getLevelColor(selectedLevel)
                    )}
                  >
                    <Award size={20} className="mr-2" />
                    Enroll in {selectedLevel} Course
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderCard()}
      {renderOverlay()}
    </>
  );
};

export default CourseDisplay;
