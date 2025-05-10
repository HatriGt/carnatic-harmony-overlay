
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

export const courseDetails: CourseData = {
  'Carnatic Vocals': {
    Beginner: {
      duration: '6 months depending on the student\'s progress\n1 class per week, 40 minute session',
      prerequisites: [
        'No prior music knowledge required',
        'Dedication to practice regularly',
        'Age 5 years and above',
      ],
      highlights: [
        'Introduction to Carnatic music basics',
        'Understanding Shruti and Swara',
        'Basic Alankaras and exercises',
        'Simple Geethams and Swarajathis',
        'Fundamentals of Talam',
      ],
      outcomes: [
        'Ability to sing basic Carnatic compositions',
        'Understanding of fundamental concepts',
        'Foundation for intermediate level',
        'Basic rhythm recognition',
      ],
    },
    Intermediate: {
      duration: '7 months depending on the student\'s progress\n1 class per week, 40 minute session',
      prerequisites: [
        'Completion of beginner level',
        'Knowledge of basic concepts',
        'Regular practice routine',
      ],
      highlights: [
        'Advanced Alankaras and Varnams',
        'Detailed study of Ragas',
        'Complex Talas and rhythmic patterns',
        'Krithis and compositions',
      ],
      outcomes: [
        'Ability to sing complex compositions',
        'Understanding of Raga alapana',
        'Improved voice modulation',
        'Enhanced rhythmic skills',
      ],
    },
    Advanced: {
      duration: '12 months (48 weeks)\n2 classes per week, 2 hours each',
      prerequisites: [
        'Completion of intermediate level',
        'Strong foundation in Carnatic music',
        'Dedication to performance practice',
      ],
      highlights: [
        'Advanced Manodharma Sangeetham',
        'Ragam Tanam Pallavi',
        'Concert-level compositions',
        'Advanced voice culture',
        'Performance techniques',
      ],
      outcomes: [
        'Concert-ready performance skills',
        'Mastery of improvisation',
        'Ability to teach beginners',
        'Complete understanding of music theory',
      ],
    },
  },
  'Western Vocals': {
    Beginner: {
      duration: '3 months (12 weeks)\n2 classes per week, 1 hour each',
      prerequisites: [
        'No prior music knowledge required',
        'Enthusiasm to learn Western music',
        'Age 8 years and above',
      ],
      highlights: [
        'Basic music theory and notation',
        'Voice training and breath control',
        'Major and minor scales',
        'Sight reading fundamentals',
        'Introduction to rhythm and tempo',
      ],
      outcomes: [
        'Read basic musical notation',
        'Sing in tune with proper technique',
        'Understand fundamental music theory',
        'Perform simple songs',
      ],
    },
    Intermediate: {
      duration: '6 months (24 weeks)\n2 classes per week, 1.5 hours each',
      prerequisites: [
        'Completion of beginner level',
        'Basic music theory knowledge',
        'Ability to read simple notation',
      ],
      highlights: [
        'Advanced music theory',
        'Complex rhythm patterns',
        'Harmony and chord progressions',
        'Ear training and dictation',
        'Performance techniques',
      ],
      outcomes: [
        'Harmonize with other singers',
        'Read and interpret complex notation',
        'Understand music theory in depth',
        'Perform intermediate level pieces',
      ],
    },
    Advanced: {
      duration: '12 months (48 weeks)\n2 classes per week, 2 hours each',
      prerequisites: [
        'Completion of intermediate level',
        'Strong music theory foundation',
        'Sight-reading proficiency',
      ],
      highlights: [
        'Advanced vocal techniques',
        'Complex harmonies and arrangements',
        'Music composition and improvisation',
        'Performance mastery',
        'Studio recording techniques',
      ],
      outcomes: [
        'Professional-level performance skills',
        'Ability to arrange music',
        'Studio recording expertise',
        'Teaching capabilities',
      ],
    },
  },
  'English Pop': {
    Beginner: {
      duration: '3 months (12 weeks)\n1 class per week, 1 hour each',
      prerequisites: [
        'No prior singing experience required',
        'Interest in pop music',
        'Age 10 years and above',
      ],
      highlights: [
        'Basics of pop vocal technique',
        'Breath control and support',
        'Basic microphone technique',
        'Simple pop song arrangements',
        'Introduction to performance style',
      ],
      outcomes: [
        'Sing popular songs with basic technique',
        'Basic performance confidence',
        'Understanding of pop vocal style',
        'Introduction to mic technique',
      ],
    },
    Intermediate: {
      duration: '6 months (24 weeks)\n1 class per week, 1.5 hours each',
      prerequisites: [
        'Completion of beginner level or equivalent experience',
        'Basic vocal technique understanding',
        'Ability to maintain pitch',
      ],
      highlights: [
        'Advanced pop vocal techniques',
        'Stylistic elements of different pop genres',
        'Extended microphone techniques',
        'Vocal runs and riffs',
        'Performance enhancement',
      ],
      outcomes: [
        'Enhanced vocal range and control',
        'Refined pop vocal style',
        'Ability to perform with confidence',
        'Improved microphone technique',
      ],
    },
    Advanced: {
      duration: '9 months (36 weeks)\n1 class per week, 2 hours each',
      prerequisites: [
        'Completion of intermediate level',
        'Strong vocal foundation',
        'Performance experience',
      ],
      highlights: [
        'Professional-level pop vocal techniques',
        'Genre-specific stylistic mastery',
        'Studio recording techniques',
        'Advanced performance skills',
        'Original song interpretation',
      ],
      outcomes: [
        'Professional performance capabilities',
        'Studio-ready vocal technique',
        'Personal style development',
        'Performance mastery across pop genres',
      ],
    },
  },
};
