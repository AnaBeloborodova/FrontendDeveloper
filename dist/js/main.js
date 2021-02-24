// Анимация skills
/*
new Vivus(
    'animate-circle-1',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-2',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-3',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);

new Vivus(
    'animate-circle-4',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-5',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-6',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-7',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-8',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-9',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
new Vivus(
    'animate-circle-10',
    {
        type: 'delayed',
        duration: 200,
        animTimingFunction: Vivus.EASE
    }
);
*/

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
/*
var bar = new ProgressBar.Circle(container, {
    color: '#915F6D',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 10,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#915F6D', width: 10 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0
*/

/*
let circleArray = document.querySelectorAll('.circle');

circleArray.forEach((item)=>{

    let percent = item.getAttribute('percent');
    let leftBlock = item.querySelector('.left');
    let rightBlock = item.querySelector('.right');
    let rightNumber = item.querySelector('.circle-number');

    let counter = 0;
    let test = ()=>{
        if((counter < percent)){
            leftBlock.style.transform = 'rotate('+(counter*3.6)+'deg)';
            counter++;
            rightNumber.textContent = counter;
            if(counter>50){
                item.querySelector('.circle-fon').style.background = 'green';
                rightBlock.classList.add('active-track');
            }
            setTimeout(test,40);
        } else {

        }
    };
    test();

});

*/