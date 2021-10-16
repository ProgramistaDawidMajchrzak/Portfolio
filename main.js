


const spnWelcome = document.getElementById('welcome-span');
const txtWelcome = 'Witaj';
const spnFirst = document.getElementById('first-span');
const txtFirst = 'oto moje portfolio.';
const spnSecond = document.getElementById('second-span');
const txtSecond = 'Poszukuję swojej pierwszej pracy';
const spnThird = document.getElementById('third-span');
const txtThird = 'jako';
const spnThirdBold = document.getElementById('third-span-bold');
const txtThirdBold = 'junior react developer.';
const spnFourth = document.getElementById('fourth-span');
const txtFourth = 'Zapraszam do oględzin projektów.';
const spnName = document.getElementById('name-span');
const txtName = 'Dawid Majchrzak';


let indexText = 0;

const mainTextShow = () => {

    const addWelcome = () => {
        spnWelcome.textContent += txtWelcome[indexText];
        indexText++;
        if (indexText === txtWelcome.length) {
            clearInterval(indexTyping)
            indexText = 0;
            addFirst()
        }
    }
    const indexTyping = setInterval(addWelcome, 100)

    const addFirst = () => {
        setTimeout(() => {
            const addFirstSpan = () => {
                spnFirst.textContent += txtFirst[indexText];
                indexText++;
                if (indexText === txtFirst.length) {
                    clearInterval(indexTyping)
                    indexText = 0;
                    addSecond()
                }
            }
            const indexTyping = setInterval(addFirstSpan, 50)
        }, 200)

    }

    const addSecond = () => {
        setTimeout(() => {
            const addSecondSpan = () => {
                spnSecond.textContent += txtSecond[indexText];
                indexText++;
                if (indexText === txtSecond.length) {
                    clearInterval(indexTyping)
                    indexText = 0;
                    addThird()
                }
            }

            const indexTyping = setInterval(addSecondSpan, 50)
        }, 200)
    }

    const addThird = () => {
        const addThirdSpan = () => {
            spnThird.textContent += txtThird[indexText];
            indexText++;
            if (indexText === txtThird.length) {
                clearInterval(indexTyping)
                indexText = 0;
                addThirdBold()
            }
        }

        const indexTyping = setInterval(addThirdSpan, 50)
    }

    const addThirdBold = () => {
        const addThirdSpanBold = () => {
            spnThirdBold.textContent += txtThirdBold[indexText];
            indexText++;
            if (indexText === txtThirdBold.length) {
                clearInterval(indexTyping)
                indexText = 0;
                addFourth()
            }
        }

        const indexTyping = setInterval(addThirdSpanBold, 50)
    }

    const addFourth = () => {
        setTimeout(() => {
            const addFourthSpan = () => {
                spnFourth.textContent += txtFourth[indexText];
                indexText++;
                if (indexText === txtFourth.length) {
                    clearInterval(indexTyping)
                    indexText = 0;
                    addName()
                }
            }

            const indexTyping = setInterval(addFourthSpan, 50)
        }, 200)
    }
    const addName = () => {
        const addNameSpan = () => {
            spnName.textContent += txtName[indexText];
            indexText++;
            if (indexText === txtName.length) {
                clearInterval(indexTyping)
                indexText = 0;
                projectsAnimation()
            }
        }

        const indexTyping = setInterval(addNameSpan, 50)
    }
}
mainTextShow()

const projectsAnimation = () => {
    const projectsImage = document.querySelector('.projects-img-section');
    projectsImage.style.animationName = 'projectsImageAnimation'
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
}