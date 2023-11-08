$(document).ready(() => {
    // Selecionar os elementos que a gente quer modificar e salvar eles dentro de uma variável
    const $clock = $(".clock");
    const $date = $(".date");
    const $toggleButton = $("#toggleButton");

    /**
     * Atualiza o relógio
     */
    const updateClock = () => $clock.text(new Date().toLocaleTimeString());

    /**
     * Formata o dia da semana de número para portugês
     * @param {number} dayOfWeek - Dia da semana
     * @returns {string} Dia da semana formatado
     */
    const formatDayOfWeek = (dayOfWeek) => {
        const daysOfWeek = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        return daysOfWeek[dayOfWeek];
    };

    /**
     * Formata o mês de número para portugês
     * @param {number} month - Número do mes
     * @returns {string} Mês formatado
     */
    const formatMonth = (month) => {
        const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
        return monthNames[month];
    };

    /**
     * Formata o dia do mês para que ele sempre tenha dois dígitos
     * @param {number} day - Dia do mês
     * @returns {string} Dia do mês com dois dígitos
     */
    const formatDay = (day) => String(day).padStart(2, 0);

    /**
     * Atualiza a data 
     */
    const updateDate = () => {
        const today = new Date();
        const dayOfWeek = formatDayOfWeek(today.getDay());
        const month = formatMonth(today.getMonth());
        const day = formatDay(today.getDate());
        const year = today.getFullYear();
        $date.text(`${dayOfWeek}, ${day} de ${month} de ${year}`);
    };

    //Executa a ação em um determinado intervalo de tempo
    let clockTime = setInterval(updateClock, 1000); //1000 milissegundos = 1 segundo

    //Controla o estado do relógio
    let isPaused = false;

    /**
     * Função para pausar e retornar o temporizador
     */
    const toggleTimer = () => {
        isPaused = !isPaused;
        if (isPaused) {
            clearInterval(clockTime);
        } else {
            updateClock()
            clockTime = setInterval(updateClock, 1000);
        }
        $toggleButton.text(isPaused ? "Resumir" : "Pausar");
        $toggleButton.css("background-color", isPaused ? "#ADE25D" : "rgb(6, 164, 236)")
    };

    //Atrelando o evento de clicl no botão de toggle
    $toggleButton.click(toggleTimer);

    updateClock();
    updateDate();

})
