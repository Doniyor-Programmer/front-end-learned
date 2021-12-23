const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        const marksType = document.querySelectorAll(markType);

        wrapper.querySelectorAll('.all').forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (marksType) {
            marksType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        }
    };

    function makeFilter(btnSelector, content) {
        const btn = menu.querySelector(btnSelector);
        btn.addEventListener('click', () => typeFilter(content));
    }

    makeFilter('.all', '.all');
    makeFilter('.lovers', '.lovers');
    makeFilter('.chef', '.chef');
    makeFilter('.girl', '.girl');
    makeFilter('.guy', '.guy');
    makeFilter('.grandmother');
    makeFilter('.granddad');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }

        if (target && (target.classList.contains('grandmother') || target.classList.contains('granddad'))) {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    });
};

export default filter;