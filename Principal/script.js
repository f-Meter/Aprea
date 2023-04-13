document.addEventListener("DOMContentLoaded", () => {
    // Escuchamos el click del botón
    const $boton = document.querySelector("#btn_descargar");
    $boton.addEventListener("click", () => {
        /*const $elementoParaConvertir = document.getElementById("micanvas");; // <-- Aquí puedes elegir cualquier elemento del DOM
        html2pdf()
            .set({
                margin: 1,
                filename: 'receta.pdf',
                image: {
                    type: 'jpeg',
                    quality: 1
                },
                html2canvas: {
                    scale: 3, // A mayor escala, mejores gráficos, pero más peso
                    letterRendering: true,
                    backimgy: "top",
                },
                jsPDF: {
                    unit: "in",
                    format: "a4",
                    orientation: 'portrait' // landscape o portrait
                }
            })
            .from($elementoParaConvertir)
            .save()
            .catch(err => console.log(err));
            */

            const $canvas = document.querySelector("#micanvas")
            // Lo siguiente dibuja en el canvas, no tiene que ver con el tutorial, solo es demostración
            const contexto = $canvas.getContext("2d");
            let enlace = document.createElement('a');
            // El título
            enlace.download = "Avatar.jpg";
            // Convertir la imagen a Base64 y ponerlo en el enlace
            enlace.href = micanvas.toDataURL("image/jpeg", 1);
            // Hacer click en él
            enlace.click();
    });
});
