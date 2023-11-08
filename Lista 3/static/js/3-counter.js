$(document).ready(() => {
    //Selecionar os elementos
    const $decrementButton = $("#decrementButton");
    const $incrementButton = $("#incrementButton");
    const $counter = $("#counter");

    //Estado
    let counter = 0;

    /**
     * Atualiza o contador
     * @returns 
     */
    const updateCounter = () => $counter.text(counter);
    

    /**
     * Incrementa o contador
     */
    const incrementCounter = () => {
        counter++;
        updateCounter();
    }

    /**
     * Diminui do contador
     */
    const decrementCounter = () => {
        counter--;
        updateCounter();
    }

    //Adicionar as funções aos botões
    $incrementButton.click(incrementCounter);
    $decrementButton.click(decrementCounter);


})