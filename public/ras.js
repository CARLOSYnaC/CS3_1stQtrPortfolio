grades = [90, 88, 99, 98, 97]

sum = 0;
for (let i = 0;i < grades.length; i++) {
    sum += grades[i]
}
console.log(sum)

average = sum/5

console.log(average)

console.log(Math.min(...grades))

min = 100000000
for (let grade of grades) {
    if (grade < min) {
        min= grade
    }
}

console.log(min)

max = -100000000
for (let grade of grades) {
    if (grade > max) {
        max= grade
    }
}

console.log(max)

grades.push(100,20)
grades.sort()
console.log(grades)