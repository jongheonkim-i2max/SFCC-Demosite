/*keyword typing*/
document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.keyword__ranking--subject') 
  .pause(1000)
  .delete(4, { delay: 1000 })
  .type(' ranking')
  .go();
});