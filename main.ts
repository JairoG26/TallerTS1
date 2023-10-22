import { series } from './data.js';
import { Serie } from "./serie.js";

let tabla: HTMLElement = document.getElementById("tabla")!;

let data: HTMLElement = document.getElementById("data")!;

function mostrarDatos(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let promedio = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr class=\"serie\">
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        promedio += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"promedio\"><h2>Promedio de temporadas: ${promedio / data.length}</h2></tr>`;
    body.innerHTML = htmlVar;
}

mostrarDatos(series, tabla);


