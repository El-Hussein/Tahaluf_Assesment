
export enum CATEGORY_TYPE {
    HISTORY = 'History',
    GEOLOGY = 'Geology',
    SCIENCE = 'Science',
    GENERAL_KNOWLEDGE = 'General Knowledge',
}

export enum QUESTION_TYPE {
    MULTIPLE = 'multiple',
    FREE_TEXT = 'freetext',
    BOOLEAN = 'boolean',
}

export enum QUESTION_DIFFICULTY {
    HARD = 'hard',
    MEDIUM = 'medium',
    EASY = 'easy',
}



export interface Category {
    id: number;
    type: CATEGORY_TYPE;
    title: string;
}

export interface QuestionAnswer {
    question_id: number; // use as ID
    answer: string;
}

export interface Question {
    id: number;
    category: CATEGORY_TYPE;
    difficulty: QUESTION_DIFFICULTY;
    question: string;
    correct_answer: string;
    type: QUESTION_TYPE;
    incorrect_answers?: string[];
}

