
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, ChevronRight, Calendar, User, Award, Music, Info, Check, Clock, CheckCircle, Target, X } from 'lucide-react';

// Types
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface LevelDetails {
  duration: string;
  prerequisites: string[];
  highlights: string[];
  outcomes: string[];
}

export interface Course {
  [key: string]: LevelDetails;
}

export interface CourseData {
  [key: string]: Course;
}

// Sample course data that can be overridden with props
const defaultCourseDetails: CourseData = {
  'Sample Course': {
    Beginner: {
      duration: '3 months (12 weeks)\n1 class per week, 1 hour each',
      prerequisites: ['No prior experience required', 'Interest in learning'],
      highlights: ['Introduction to basics', 'Foundational knowledge', 'Simple exercises'],
      outcomes: ['Basic understanding', 'Fundamental skills', 'Preparation for intermediate level']
    },
    Intermediate: {
      duration: '6 months (24 weeks)\n2 classes per week, 1.5 hours each',
      prerequisites: ['Completion of beginner level', 'Basic knowledge'],
      highlights: ['Advanced techniques', 'Practical applications', 'Complex exercises'],
      outcomes: ['Enhanced skills', 'Deeper understanding', 'Practical experience']
    },
    Advanced: {
      duration: '9 months (36 weeks)\n2 classes per week, 2 hours each',
      prerequisites: ['Completion of intermediate level', 'Strong foundation'],
      highlights: ['Expert-level concepts', 'Mastery of techniques', 'Professional applications'],
      outcomes: ['Professional expertise', 'Independent mastery', 'Teaching capability']
    }
  }
};

interface CourseDisplayProps {
  courseName: string;
  imageSrc: string;
  description: string;
  courseData?: CourseData;
}

const CourseDisplay: React.FC<CourseDisplayProps> = ({ 
  courseName, 
  imageSrc,
  description,
  courseData = defaultCourseDetails
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('Beginner');
  const [animateContent, setAnimateContent] = useState(true);
  
  const course = (courseData && courseData[courseName]) ? courseData[courseName] : defaultCourseDetails['Sample Course'];
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

  // Styles for the component (typically would be in CSS file)
  const styles = {
    // Level badges
    levelBadge: "inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full transition-all duration-200",
    levelBadgeBeginner: "bg-green-100 text-green-800",
    levelBadgeIntermediate: "bg-blue-100 text-blue-800",
    levelBadgeAdvanced: "bg-purple-100 text-purple-800",
    
    // Animations
    animateFadeIn: "transition-all duration-300 opacity-100 translate-y-0",
    animateFadeOut: "transition-all duration-300 opacity-0 translate-y-4",
    
    // Course card hover
    courseCard: "transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl",
  };

  // Card Component
  const renderCard = () => (
    <div className={cn("bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300", styles.courseCard)}>
      <div className="h-52 overflow-hidden relative group">
        <img 
          src={imageSrc} 
          alt={courseName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 flex items-center">
          <BookOpen size={18} className="mr-2 text-purple-500" />
          {courseName}
        </h3>
        
        {course && (
          <div className="flex flex-wrap gap-2 mb-4">
            {levels.map((level) => (
              <span 
                key={level}
                onClick={() => handleLevelClick(level)}
                className={cn(
                  styles.levelBadge,
                  getBadgeColor(level) === 'level-badge-beginner' ? styles.levelBadgeBeginner : 
                    getBadgeColor(level) === 'level-badge-intermediate' ? styles.levelBadgeIntermediate : 
                    styles.levelBadgeAdvanced,
                  'cursor-pointer hover:scale-105',
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
          className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-all duration-300 group"
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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
        style={{
          animation: isOpen ? 'fadeIn 0.3s ease' : 'fadeOut 0.3s ease',
        }}
        onClick={(e) => e.target === e.currentTarget && closeOverlay()}
      >
        <div 
          className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl"
          style={{
            animation: 'scaleIn 0.2s ease',
          }}
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
            <div className="bg-purple-500 bg-gradient-to-br from-purple-400 to-purple-700 text-white p-8 md:w-1/3 md:rounded-l-xl relative overflow-hidden">
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
                {levels.map((level) => (
                  <Button
                    key={level}
                    onClick={() => handleLevelChange(level)}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className={cn(
                      "w-full text-left justify-start border-2 transition-all duration-300 group",
                      selectedLevel === level 
                        ? "bg-white text-purple-800 border-white shadow-lg" 
                        : "bg-transparent text-white border-white/30 hover:border-white/70"
                    )}
                  >
                    {getOverlayLevelIcon(level)}
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
            <ScrollArea className="p-8 md:w-2/3 bg-gradient-to-br from-white to-purple-50 md:max-h-[80vh]">
              <div className={cn(
                'space-y-8',
                animateContent ? styles.animateFadeIn : styles.animateFadeOut
              )}>
                <div className="p-6 bg-purple-100 rounded-lg shadow-inner">
                  <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4 border-b border-purple-200 pb-2">
                    <Clock size={22} className="mr-3 text-purple-500" />
                    Course Duration
                  </h3>
                  <p className="whitespace-pre-line text-lg">{levelDetails.duration}</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                  <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-2">
                    <CheckCircle size={22} className="mr-3 text-purple-500" />
                    Prerequisites
                  </h3>
                  <ul className="space-y-3 pl-5">
                    {levelDetails.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3"></span>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                    <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-2">
                      <BookOpen size={22} className="mr-3 text-purple-500" />
                      Course Highlights
                    </h3>
                    <ul className="space-y-3">
                      {levelDetails.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-3">{index + 1}.</span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-purple-100">
                    <h3 className="flex items-center text-xl font-semibold text-gray-800 mb-4 border-b border-purple-100 pb-2">
                      <Target size={22} className="mr-3 text-purple-500" />
                      Learning Outcomes
                    </h3>
                    <ul className="space-y-3">
                      {levelDetails.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-600 mr-3">{index + 1}.</span>
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

  // CSS Animations (usually in a CSS file)
  const styleTag = (
    <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      
      @keyframes scaleIn {
        from { transform: scale(0.95); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      
      .animate-fade-in {
        animation: fadeIn 0.3s ease forwards;
      }
      
      .level-badge {
        transition: all 0.2s ease;
      }
      
      .course-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
    `}</style>
  );

  return (
    <>
      {styleTag}
      {renderCard()}
      {renderOverlay()}
    </>
  );
};

export default CourseDisplay;
