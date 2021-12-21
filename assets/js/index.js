let nombre = prompt("Introduce tu nombre, por favor. Las respuestas, a partir de ahora, todas en minúsculas, por favor, nuestro detector de respuestas es demasiado aesthetic y sólo lee minúsculas.");

if (nombre === "martina") {
    let edad = parseInt(prompt("Introduce tu edad, por favor. Queremos asegurar que eres quien dices ser... Martina, ¿no?"))

    if (edad === 19) {
        let gata = prompt("Mhm... 19 años... Puede ser que seas tú... ¡Pero una cosa más! ¿Cuál es el nombre de tu gata...?");

        if (gata === "kiki") {
            let password = prompt("Introduce la contraseña final que te han dado junto a la web, para ver tu regalito y tu mensaje del año.");
            if (password === "eustaquia") {
                alert (" Muchísimas gracias por existir. Por seguir existiendo. Por ser quién eres, por no dejar de serlo. Por haber luchado, y seguir haciéndolo. Tantas cosas podría agradecerte pero aún no es el momento puesto que sé que aún mucho más nos queda. No sé cómo agradecerte todo, en serio. No sé. No puedo tampoco, es como inexplicable. El hecho de haber encontrado a alguien con quien pueda conectar tanto a este nivel, Dios. Y alguien que me ha podido apoyar, ayudar, y sobretodo, lo que más admiro de ti, y lo sabes, tu poco juicio. Me gustaría decírtelo todo con palabras, pero no sé... Así que lo haré con ¡esta página web!")
            } else {
                alert("ne, no tienes la contraseña, da igual lo que sepas sobre ella, no tendrás el mensaje secreto.")
            }
        }
        else {
            alert("¡No eres Martina! No sabes cómo se llama su gata, lol... Pero te dejaré ver la página, aunque no sabrás el mensaje secreto.");
        }

    }

    else if (edad < 19) {
        alert("Pareces demasiado pequeña... ¡Me has mentido, no eres Martina y por lo tanto, no puedes ver esta página! Pero te dejaré ver la página, aunque no sabrás el mensaje secreto.");
    }

    else {
        alert("Demasiado mayor. A ver si no eres Martina... Enga, pa fuera. Pero te dejaré ver la página, aunque no sabrás el mensaje secreto.")
    }
}

else {
    alert("¡Oye! ¿Tú qué haces aquí? ¡No eres Martina! Fush, fush. Bueno, te dejaré ver la página aún así.")
};