function getBotResponse(input) {

    // Simple responses
    if (input == "hola") {
        return "¡Hola!";
    } else if (input == "Hola") {
        return "¡Hola!";
    } else if (input == "chao") {
        return "¡Hasta pronto!";
    } else if (input == "Chao") {
        return "¡Hasta pronto!";
    } else if (input == "Bien") {
        return "Me alegro";
    } else if (input == "bien") {
        return "Me alegro";
    } else if (input == "Mal") {
        return "Puedes encontrar ayuda en: Unidad de salud mental UC http://apoyo.saludestudiantil.uc.cl/ ";
    } else if (input == "mal") {
        return "Puedes encontrar ayuda en: Unidad de salud mental UC http://apoyo.saludestudiantil.uc.cl/ ";
    } else if (input == "¡Me gusta la página!") {
        return "Gracias :)";
    } else {
        return "Intenta preguntar otra cosa";
    }
}