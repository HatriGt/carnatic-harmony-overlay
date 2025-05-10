
import React, { useState } from 'react';
import { X, Clock, CheckCircle, Award, BookOpen, Target } from 'lucide-react';
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

  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center',
        isOpen ? 'animate-fade-in' : 'animate-fade-out'
      )}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-scale-in"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col md:flex-row">
          {/* Course Header - Left Side */}
          <div className="bg-music-500 text-white p-8 md:w-1/3 md:rounded-l-xl">
            <div className="mb-6 animate-fade-in">
              <h2 className="text-3xl font-bold">{courseName}</h2>
              <div className="w-20 h-1 bg-white/70 mt-2 mb-4"></div>
            </div>
            
            <div className="space-y-3">
              {Object.keys(course).map((level) => (
                <Button
                  key={level}
                  onClick={() => handleLevelChange(level as CourseLevel)}
                  variant={selectedLevel === level ? "default" : "outline"}
                  className={cn(
                    "w-full text-left justify-start border-2 transition-all duration-300 group",
                    selectedLevel === level 
                      ? "bg-white text-music-800 border-white" 
                      : "bg-transparent text-white border-white/30 hover:border-white/70"
                  )}
                >
                  <span className={cn(
                    "w-3 h-3 rounded-full mr-3",
                    level === 'Beginner' ? "bg-green-400" : "",
                    level === 'Intermediate' ? "bg-blue-400" : "",
                    level === 'Advanced' ? "bg-purple-400" : ""
                  )}></span>
                  {level}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Course Content - Right Side */}
          <div className="p-8 md:w-2/3">
            <div className={cn(
              'space-y-8 transition-all duration-300',
              animateContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              <div className="p-6 bg-music-100 rounded-lg">
                <h3 className="flex items-center text-lg font-semibold text-music-800 mb-3">
                  <Clock size={20} className="mr-2 text-music-500" />
                  Duration
                </h3>
                <p className="whitespace-pre-line">{levelDetails.duration}</p>
              </div>
              
              <div>
                <h3 className="flex items-center text-lg font-semibold text-music-800 mb-3">
                  <CheckCircle size={20} className="mr-2 text-music-500" />
                  Prerequisites
                </h3>
                <ul className="space-y-2 pl-5">
                  {levelDetails.prerequisites.map((prereq, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-music-500 mt-2 mr-3"></span>
                      <span>{prereq}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-lg font-semibold text-music-800 mb-3">
                  <BookOpen size={20} className="mr-2 text-music-500" />
                  Course Highlights
                </h3>
                <ul className="space-y-2 pl-5">
                  {levelDetails.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-music-500 mt-2 mr-3"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-lg font-semibold text-music-800 mb-3">
                  <Target size={20} className="mr-2 text-music-500" />
                  Learning Outcomes
                </h3>
                <ul className="space-y-2 pl-5">
                  {levelDetails.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-music-500 mt-2 mr-3"></span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 flex justify-center">
                <Button 
                  className={cn(
                    "px-8 py-6 rounded-full text-white transition-transform hover:scale-105",
                    getLevelColor(selectedLevel)
                  )}
                >
                  <Award size={20} className="mr-2" />
                  Enroll Now
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
