document.addEventListener('DOMContentLoaded', function () {
    const nextBtns = document.querySelectorAll('.nextBtn');
    const prevBtns = document.querySelectorAll('.prevBtn');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');

    let formStepsNum = 0;

    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            formStepsNum++;
            updateFormSteps();
            updateProgressBar();
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            formStepsNum--;
            updateFormSteps();
            updateProgressBar();
        });
    });

    function updateFormSteps() {
        formSteps.forEach(formStep => {
            formStep.classList.contains('active') && formStep.classList.remove('active');
        });

        formSteps[formStepsNum].classList.add('active');
    }

    function updateProgressBar() {
        progressSteps.forEach((progressStep, idx) => {
            if (idx <= formStepsNum) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });
    }
});


document.getElementById('nav-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('open');
});

