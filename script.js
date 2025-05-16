const body = document.querySelector('body');
const buttons = document.querySelectorAll('.box');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function(event){
          const clickedBox = event.currentTarget;
    //  const clickedBox = event.currentTarget;
        console.log(event);
        console.log(clickedBox);

        switch (clickedBox.id) {
            case 'grey':
                body.style.backgroundColor = 'grey';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            default:
                break;
        }
    });
})