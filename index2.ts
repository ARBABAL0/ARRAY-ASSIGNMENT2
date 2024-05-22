//part 2 students named


// Define a TypeScript class  named
type Student = {
  name: string;
  grades: number[];
};

// Create an array named students containing at least three student objects
const students: Student[] = [
  {
    name: 'ARBAB ALI',
    grades: [85, 90, 78, 92],
  },
  {
    name: 'AHSAN',
    grades: [95, 88, 91, 89],
  },
  {
    name: 'ZAIN',
    grades: [88, 92, 89, 90],
  },
];

// Implement a function named calculateAverageGrade
function calculateAverageGrade(grades: number[]): number {
  const sum = grades.reduce((acc, current) => acc + current, 0);
  return sum / grades.length;
}

// Display each student's name and average grade
students.forEach((student) => {
  const averageGrade = calculateAverageGrade(student.grades);
  console.log(`Student Name: ${student.name}, Average Grade: ${averageGrade}`);
});
