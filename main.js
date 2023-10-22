import { series } from './data.js';
var tabla = document.getElementById("tabla");
var data = document.getElementById("data");
function mostrarDatos(data, body) {
    var htmlVar = "";
    var promedio = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr class=\"serie\">\n            <td>".concat(data[i].id, "</td>\n            <td>").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        promedio += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"promedio\"><h2>Promedio de temporadas: ".concat(promedio / data.length, "</h2></tr>");
    body.innerHTML = htmlVar;
}
mostrarDatos(series, tabla);
