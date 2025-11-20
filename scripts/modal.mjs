import { courses } from './courses.mjs';


const classes = document.getElementById("course-container");
const modal = document.getElementById('myModal');
const modalHeader = document.getElementById('course-header');
const modalTitle = document.createElement('h2');
const modalButton = document.createElement('button');
const modalCourseName = document.createElement('h3');
const modalCourseCredits = document.createElement('p');
const modalCertificate = document.createElement('p');
const modalDescription = document.createElement('p');
const modalTechnology = document.createElement('p');




console.log(classes);

classes.addEventListener('click', (event) => {
    const button = event.target.closest('.course');
    if (!button) return;

    const classID = button.dataset.classID;
    modal.showModal();
    modal.focus();
    showModalFor(classID);
})

export function showModalFor(id) {
    const course = courses.find(course => `${course.subject}${course.number}` === id);
    if (!course) return;

    modal.focus();

    modalTitle.textContent = `${course.subject} ${course.number}`;
    modalCourseName.textContent = course.title;
    modalButton.textContent = "✕";
    modalCourseCredits.textContent = `${course.credits} credits.`;
    modalCertificate.textContent = `Certificate: ${course.certificate}`;
    modalDescription.textContent = course.description;
    modalTechnology.textContent = `Technology: ${course.technology} `;
}

modalButton.addEventListener('click', () => {
    modal.close();

})

document.addEventListener('DOMContentLoaded', () => {
    modalHeader.appendChild(modalTitle);
    modalTitle.id = 'modalTitle';
    modalTitle.classList.add('modal-title')
    modalHeader.appendChild(modalButton);
    modalButton.id = 'modalButton';
    modalButton.classList.add('button-common');
    modal.appendChild(modalHeader);
    modal.appendChild(modalCourseName);
    modalCourseName.id = 'modalCourseName';
    modal.appendChild(modalCourseCredits);
    modalCourseCredits.id = 'modalCourseCredits';
    modal.appendChild(modalCertificate);
    modalCertificate.id = 'modalCertificate';
    modal.appendChild(modalDescription);
    modalDescription.id = 'modalDescription';
    modal.appendChild(modalTechnology);
    modalTechnology.id = 'modalTechnology';
})

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        modal.close();
        modal.focus();
    }
})

modal.addEventListener('click', (event) => {
    const rect = modal.getBoundingClientRect();

    const clickedInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!clickedInDialog) {
        modal.close();
    }
})
