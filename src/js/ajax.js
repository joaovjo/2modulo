window.onload = () => {
    const formulario = document.getElementsByTagName("form")[0];
    formulario.onsubmit = (evento) => {
        evento.preventDefault();
        const formdata = new FormData(formulario);
        fetch("ajax.php", {
            "method":formulario.getAttribute("method"),
            "body":formdata
        })
    };
};