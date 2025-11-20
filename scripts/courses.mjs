export const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]


window.addEventListener('DOMContentLoaded', createCourses);


const courseContainer = document.getElementById('course-container')
const cseClasses = document.querySelectorAll('#cse-class')


// const cseCourses = courses.filter(course => course.subject === "CSE");
// const wddCourses = course.filter(course => course.subject === "WDD");

function createCourses() {
    courses.forEach(course => {
        const courseElement = document.createElement('button')
        const courseName = course.subject
        const courseNumber = course.number
        const completed = course.completed


        courseElement.textContent = `${courseName} ${courseNumber} `;
        courseContainer.append(courseElement);

        courseElement.classList.add('course');
        courseElement.dataset.classID = (`${course.subject}${course.number}`);
        courseElement.dataset.credits = String(course.credits);

        // Mark completed classes as completed & add not-taken class if not
        if (completed) {
            courseElement.prepend('✔ ')
        }
        else {
            courseElement.classList.add('not-taken')
        }


        // Add classes to each coresponding course
        if (course.subject == 'CSE') {
            courseElement.classList.add('cse-course')
        }
        if (course.subject == 'WDD') {
            courseElement.classList.add('wdd-course')
        }
        courseElement.classList.add('visible')
    });

    const creditTotal = document.createElement('h4')
    creditTotal.id = 'credit-total'
    creditTotal.textContent = `Total Credits: 0`;
    courseContainer.append(creditTotal);

    updateCredits();
}


const allButton = document.querySelector('#all-button');
const cseButton = document.querySelector('#cse-button');
const wddButton = document.querySelector('#wdd-button');



allButton.addEventListener('click', () => {
    const cseCourse = document.querySelectorAll('.cse-course');
    const wddCourse = document.querySelectorAll('.wdd-course');

    wddCourse.forEach(course => { course.classList.add('visible'), course.classList.remove('is-hidden') });
    cseCourse.forEach(course => { course.classList.add('visible'), course.classList.remove('is-hidden') });
    updateCredits();
})

cseButton.addEventListener('click', () => {
    const cseCourse = document.querySelectorAll('.cse-course');
    const wddCourse = document.querySelectorAll('.wdd-course');

    wddCourse.forEach(course => { course.classList.remove('visible'), course.classList.add('is-hidden') });
    cseCourse.forEach(course => { course.classList.add('visible'), course.classList.remove('is-hidden') });
    updateCredits();
})

wddButton.addEventListener('click', () => {
    const cseCourse = document.querySelectorAll('.cse-course');
    const wddCourse = document.querySelectorAll('.wdd-course');

    wddCourse.forEach(course => { course.classList.add('visible'), course.classList.remove('is-hidden') });
    cseCourse.forEach(course => { course.classList.remove('visible'), course.classList.add('is-hidden') });
    updateCredits();
})

function updateCredits() {
    const visible = document.querySelectorAll('.visible');

    const total = [...visible].reduce((sum, el) => {
        return sum + Number(el.dataset.credits || 0);
    }, 0);

    const out = document.getElementById('credit-total');
    if (out) out.textContent = `Total Credits ${total}`;
}