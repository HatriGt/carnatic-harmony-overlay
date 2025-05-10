
import React, { useState } from 'react';
import { X } from 'lucide-react';
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
  const course = courseDetails[courseName];
  
  if (!isOpen || !course) return null;
  
  const levelDetails = course[selectedLevel];

  return (
    <div 
      className={cn(
        'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center',
        isOpen ? 'animate-fade-in' : 'animate-fade-out'
      )}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-music-800">{courseName}</h2>
            <div className="w-20 h-1 bg-music-500 mt-2 mb-4"></div>
          </div>
          
          <div className="flex gap-2 mb-8">
            {Object.keys(course).map((level) => (
              <Button
                key={level}
                onClick={() => setSelectedLevel(level as CourseLevel)}
                variant={selectedLevel === level ? "default" : "outline"}
                className={cn(
                  "border-2",
                  selectedLevel === level 
                    ? "bg-music-500 hover:bg-music-600 text-white" 
                    : "border-music-300 hover:border-music-400"
                )}
              >
                {level}
              </Button>
            ))}
          </div>
          
          <div className="space-y-8">
            <div className="p-6 bg-music-100 rounded-lg">
              <h3 className="text-lg font-semibold text-music-800 mb-2">Duration</h3>
              <p className="whitespace-pre-line">{levelDetails.duration}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-music-800 mb-3">Prerequisites</h3>
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
              <h3 className="text-lg font-semibold text-music-800 mb-3">Course Highlights</h3>
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
              <h3 className="text-lg font-semibold text-music-800 mb-3">Learning Outcomes</h3>
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
              <Button className="bg-music-600 hover:bg-music-700 text-white px-8 py-6 rounded-full">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverlay;
