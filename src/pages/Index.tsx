
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import CourseOverlay from '@/components/CourseOverlay';
import { CourseLevel } from '@/data/courses';

const Index = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevels, setSelectedLevels] = useState<Record<string, CourseLevel>>({
    'Carnatic Vocals': 'Beginner',
    'Western Vocals': 'Beginner',
    'English Pop': 'Beginner'
  });

  const handleCourseClick = (courseName: string) => {
    setSelectedCourse(courseName);
    setOverlayOpen(true);
  };

  const handleLevelClick = (course: string, level: CourseLevel) => {
    setSelectedLevels(prev => ({
      ...prev,
      [course]: level
    }));
  };

  return (
    <div className="min-h-screen bg-music-100/40">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-music-800 mb-4">Our Courses</h1>
          <div className="w-24 h-1 bg-music-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover your musical potential with our diverse range of courses taught by industry experts.
          </p>
        </section>
        
        {/* Courses Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            title="Carnatic Vocals"
            description="Master the ancient art of Carnatic music with our expert instructors."
            imageSrc="/placeholder.svg"
            showLevels={true}
            selectedLevel={selectedLevels['Carnatic Vocals']}
            onLevelClick={(level) => handleLevelClick('Carnatic Vocals', level)}
            onClick={() => handleCourseClick('Carnatic Vocals')}
          />
          
          <CourseCard
            title="Tamil Film Songs"
            description="Learn to sing popular Tamil cinema melodies and express emotions through music."
            imageSrc="/placeholder.svg"
            onClick={() => {}}
          />
          
          <CourseCard
            title="English Pop"
            description="Explore contemporary English pop music and develop your unique style."
            imageSrc="/placeholder.svg"
            showLevels={true}
            selectedLevel={selectedLevels['English Pop']}
            onLevelClick={(level) => handleLevelClick('English Pop', level)}
            onClick={() => handleCourseClick('English Pop')}
          />
          
          <CourseCard
            title="Western Vocals"
            description="Master western singing techniques from basic to advanced levels."
            imageSrc="/placeholder.svg"
            showLevels={true}
            selectedLevel={selectedLevels['Western Vocals']}
            onLevelClick={(level) => handleLevelClick('Western Vocals', level)}
            onClick={() => handleCourseClick('Western Vocals')}
          />
        </section>
      </main>
      
      <footer className="bg-music-700 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Melodious Harmony</h2>
              <p className="text-music-200">Discover your musical journey with us</p>
            </div>
            <div>
              <p>© 2023 Melodious Harmony. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
      <CourseOverlay
        courseName={selectedCourse}
        onClose={() => setOverlayOpen(false)}
        isOpen={overlayOpen}
      />
    </div>
  );
};

export default Index;
