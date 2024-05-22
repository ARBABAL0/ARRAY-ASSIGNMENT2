//PART2 students named
// Create an array named students containing at least three student objects
var students = [
    {
        name: 'ARBAB ALI',
        grades: [87, 90, 70, 99],
    },
    {
        name: 'AHSAN',
        grades: [99, 88, 95, 89],
    },
    {
        name: 'ZAIN',
        grades: [85, 92, 80, 96],
    },
];
// Implement a function named calculateAverageGrade
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / grades.length;
}
// Display each student's name and average grade
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Student Name: ".concat(student.name, ", Average Grade: ").concat(averageGrade));
});
