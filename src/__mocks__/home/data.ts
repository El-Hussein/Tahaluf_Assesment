import { Category, QUESTION_DIFFICULTY, CATEGORY_TYPE, Question, QUESTION_TYPE } from "@appTypes/api/home"


// generated from questions instead (DON"T KNOW WHY!)
const categories: Category[] = [
    { id: 1, title: 'History', type: CATEGORY_TYPE.HISTORY },
    { id: 2, title: 'Geology', type: CATEGORY_TYPE.GEOLOGY },
    { id: 3, title: 'Science', type: CATEGORY_TYPE.SCIENCE },
    { id: 4, title: 'General Knowledge', type: CATEGORY_TYPE.GENERAL_KNOWLEDGE }
]

const questions: Question[] = [
    {
        "id": 1,
        "category": CATEGORY_TYPE.HISTORY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.HARD,
        "question": "Who was the leader of the Mongol Empire in the 13th century?",
        "correct_answer": "Genghis Khan",
        "incorrect_answers": [
            "Kublai Khan",
            "Tamerlane",
            "Atilla the Hun"
        ]
    },
    {
        "id": 2,
        "category": CATEGORY_TYPE.HISTORY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "When did the Berlin Wall fall, marking the end of the Cold War?",
        "correct_answer": "1989",
        "incorrect_answers": [
            "1975",
            "1991",
            "1983"
        ]
    },
    {
        "id": 3,
        "category": CATEGORY_TYPE.HISTORY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Who was the first emperor of China?",
        "correct_answer": "Qin Shi Huang",
        "incorrect_answers": [
            "Li Shimin",
            "Wudi",
            "Emperor Wu"
        ]
    },
    {
        "id": 4,
        "category": CATEGORY_TYPE.HISTORY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "Which country was the birthplace of the Industrial Revolution?",
        "correct_answer": "United Kingdom",
        "incorrect_answers": [
            "Germany",
            "France",
            "United States"
        ]
    },
    {
        "id": 5,
        "category": CATEGORY_TYPE.HISTORY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.HARD,
        "question": "Which battle is considered the turning point of the American Civil War?",
        "correct_answer": "Battle of Gettysburg",
        "incorrect_answers": [
            "Battle of Antietam",
            "Battle of Fort Sumter",
            "Battle of Bull Run"
        ]
    },
    {
        "id": 6,
        "category": CATEGORY_TYPE.GEOLOGY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "What is the Earth's outermost layer called?",
        "correct_answer": "Crust",
        "incorrect_answers": [
            "Mantle",
            "Core",
            "Lithosphere"
        ]
    },
    {
        "id": 7,
        "category": CATEGORY_TYPE.GEOLOGY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which of the following is not a type of plate boundary?",
        "correct_answer": "Radial",
        "incorrect_answers": [
            "Convergent",
            "Divergent",
            "Transform"
        ]
    },
    {
        "id": 8,
        "category": CATEGORY_TYPE.GEOLOGY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which volcanic event caused the most deaths in history?",
        "correct_answer": "Mount Tambora eruption (1815)",
        "incorrect_answers": [
            "Mount Vesuvius (79 AD)",
            "Krakatoa eruption (1883)",
            "Mount St. Helens (1980)"
        ]
    },
    {
        "id": 9,
        "category": CATEGORY_TYPE.GEOLOGY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "Which mineral is commonly known as 'fool's gold'?",
        "correct_answer": "Pyrite",
        "incorrect_answers": [
            "Quartz",
            "Gold",
            "Mica"
        ]
    },
    {
        "id": 10,
        "category": CATEGORY_TYPE.GEOLOGY,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "Which type of rock is formed from the cooling of molten magma?",
        "correct_answer": "Igneous",
        "incorrect_answers": [
            "Sedimentary",
            "Metamorphic",
            "Fossilized"
        ]
    },
    {
        "id": 11,
        "category": CATEGORY_TYPE.SCIENCE,
        "type": QUESTION_TYPE.BOOLEAN,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "The Earth revolves around the Sun in approximately 365 days.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "id": 12,
        "category": CATEGORY_TYPE.SCIENCE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which element has the chemical symbol 'O'?",
        "correct_answer": "Oxygen",
        "incorrect_answers": [
            "Osmium",
            "Oganesson",
            "Ozone"
        ]
    },
    {
        "id": 13,
        "category": CATEGORY_TYPE.SCIENCE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "What is the primary source of energy for life on Earth?",
        "correct_answer": "The Sun",
        "incorrect_answers": [
            "The Moon",
            "Volcanic Activity",
            "Geothermal Energy"
        ]
    },
    {
        "id": 14,
        "category": CATEGORY_TYPE.SCIENCE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which gas is most commonly responsible for the greenhouse effect?",
        "correct_answer": "Carbon dioxide (CO2)",
        "incorrect_answers": [
            "Oxygen",
            "Nitrogen",
            "Methane"
        ]
    },
    {
        "id": 15,
        "category": CATEGORY_TYPE.SCIENCE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which organ in the human body is responsible for producing insulin?",
        "correct_answer": "Pancreas",
        "incorrect_answers": [
            "Liver",
            "Kidneys",
            "Lungs"
        ]
    },
    {
        "id": 16,
        "category": CATEGORY_TYPE.GENERAL_KNOWLEDGE,
        "type": QUESTION_TYPE.FREE_TEXT,
        "difficulty": QUESTION_DIFFICULTY.HARD,
        "question": "What is the name of the longest river in South America?",
        "correct_answer": "Amazon River"
    },
    {
        "id": 17,
        "category": CATEGORY_TYPE.GENERAL_KNOWLEDGE,
        "type": QUESTION_TYPE.FREE_TEXT,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "What is the tallest mountain in the world?",
        "correct_answer": "Mount Everest"
    },
    {
        "id": 18,
        "category": CATEGORY_TYPE.GENERAL_KNOWLEDGE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "Which is the largest continent by population?",
        "correct_answer": "Asia",
        "incorrect_answers": [
            "Africa",
            "Europe",
            "North America"
        ]
    },
    {
        "id": 19,
        "category": CATEGORY_TYPE.GENERAL_KNOWLEDGE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.MEDIUM,
        "question": "Which country is known as the Land of the Rising Sun?",
        "correct_answer": "Japan",
        "incorrect_answers": [
            "China",
            "South Korea",
            "Thailand"
        ]
    },
    {
        "id": 20,
        "category": CATEGORY_TYPE.GENERAL_KNOWLEDGE,
        "type": QUESTION_TYPE.MULTIPLE,
        "difficulty": QUESTION_DIFFICULTY.EASY,
        "question": "Which planet is known as the Red Planet?",
        "correct_answer": "Mars",
        "incorrect_answers": [
            "Venus",
            "Earth",
            "Saturn"
        ]
    }
]

export { categories, questions }