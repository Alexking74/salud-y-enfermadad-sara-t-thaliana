export interface PresentationMetadata {
  studentName: string;
  grade: string;
  teacherName: string;
  date: string;
  schoolSubject: string;
}

export interface SpeakerNote {
  bulletPoints: string[];
  cuePrompt: string;
  durationEstimate: string;
}

export interface SlideData {
  id: number;
  title: string;
  shortTitle: string;
  category: string;
  speakerNote: SpeakerNote;
}
