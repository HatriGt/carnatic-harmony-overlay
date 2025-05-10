
import React, { useState } from 'react';
import { X, Clock, CheckCircle, Award, BookOpen, Target, Calendar, User, Music, Info, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { courseDetails, CourseLevel } from '@/data/courses';

interface CourseOverlayProps {
  courseName: string;
  onClose: () => void;
  isOpen: boolean;
}

const CourseOverlay: React.FC<CourseOverlayProps> = ({ courseName, onClose, isOpen }) => {
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel>('Beginner');
  const [animateContent, setAnimateContent] = useState(true);
  const course = courseDetails[courseName];
  
  if (!isOpen || !course) return null;
  
  const levelDetails = course[selectedLevel];

  const handleLevelChange = (level: CourseLevel) => {
    setAnimateContent(false);
    setTimeout(() => {
      setSelectedLevel(level);
      setAnimateContent(true);
    }, 300);
  };

  const getLevelColor = (level: CourseLevel) => {
    if (level === 'Beginner') return 'bg-green-500 hover:bg-green-600';
    if (level === 'Intermediate') return 'bg-blue-500 hover:bg-blue-600';
    return 'bg-purple-500 hover:bg-purple-600';
  };

  const getLevelIcon = (level: CourseLevel) => {
    if (level === 'Beginner') return <User className="mr-2" />;
    if (level === 'Intermediate') return <BookOpen className="mr-2" />;
    return <Award className="mr-2" />;
  };

  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center',
        isOpen ? 'animate-fade-in' : 'animate-fade-out'
      )}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-scale-in"
      >
        <button 
          onClick={onClose}
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
                  {getLevelIcon(level as CourseLevel)}
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
          <div className="p-8 md:w-2/3 bg-gradient-to-br from-white to-music-50">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverlay;
