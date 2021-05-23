//determine variables for container and cards
const container = document.querySelector('.container-slider');
const cards = document.querySelector('.cards');
//keep track of mouse up and down
let isPressDown = false;
//x space of cursor from inner container
let startX;
//offsetX read-only property of the MouseEvent interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node. ie: retriev the position of mouse point
//offsetLeft read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.
//console.log(e.offsetX) shows horizontal position of the  mouse down according to the grid-columns
//console.log(cards.offsetleft) - will return = because Left:0 (CSS)
container.addEventListener('mousedown', (e) => {
    isPressDown = true;
    startX = e.offsetX - cards.offsetLeft;
    container.style.cursor = 'grabbing';
});
//The mouse was sticking to the page so we add the 'mouseup* event listener below
container.addEventListener('mouseup', () => {
    container.style.cursor = 'grab';
});
window.addEventListener('mouseup', () => {
    isPressDown = false;
});
container.addEventListener('mousemove', (e) => {
    if (!isPressDown)
        return;
    e.preventDefault(); //default
    cards.style.left = `${e.offsetX - startX}px`;
    //cannot drag as we have to set the pointer event to none in CSS 
    boundCards();
});
function boundCards() {
    const container_rect = container.getBoundingClientRect();
    const cards_rect = cards.getBoundingClientRect();
    //below gets rid of the white space on either side of the cards - note: perhaps use this to infinte loop the cards
    if (parseInt(cards.style.left) > 0) {
        cards.style.left = 0;
    }
    else if (cards_rect.right < container_rect.right) {
        cards.style.left = `-${cards_rect.width - container_rect.width}px`;
    }
}
