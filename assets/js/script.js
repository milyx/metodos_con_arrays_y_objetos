const radiologia = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

const traumatologia = [
  {
    HORA: "8:00",
    ESPECIALISTA: "MARIA PAZ ALTUZARRA",
    PACIENTE: "PAULA SANCHEZ",
    RUT: "15554774-5",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL ARAYA",
    PACIENTE: "ANGÉLICA NAVAS",
    RUT: "15444147-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "MARIA ARRIAGADA",
    PACIENTE: "ANA KLAPP",
    RUT: "17879423-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:00",
    ESPECIALISTA: "ALEJANDRO BADILLA",
    PACIENTE: "FELIPE MARDONES",
    RUT: "1547423-6",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "CECILIA BUDNIK",
    PACIENTE: "DIEGO MARRE",
    RUT: "16554741-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: "ARTURO CAVAGNARO",
    PACIENTE: "CECILIA MENDEZ",
    RUT: "9747535-8",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:30",
    ESPECIALISTA: "ANDRES KANACRI",
    PACIENTE: "MARCIAL SUAZO",
    RUT: "11254785-5",
    PREVISION: "ISAPRE",
  },
];

const dental = [
  {
    HORA: "11:00",
    ESPECIALISTA: "IGNACIO SCHULZ",
    PACIENTE: "FRANCISCA ROJAS",
    RUT: "9878782-1",
    PREVISION: "FONASA",
  },
  {
    HORA: "11:30",
    ESPECIALISTA: "FEDERICO SUBERCASEAUX",
    PACIENTE: "PAMELA ESTRADA",
    RUT: "15345241-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:00",
    ESPECIALISTA: "FERNANDO WURTHZ",
    PACIENTE: "ARMANDO LUNA",
    RUT: "16445345-9",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "15:30",
    ESPECIALISTA: "ANA MARIA GODOY",
    PACIENTE: "MANUEL GODOY",
    RUT: "17666419-0",
    PREVISION: "FONASA",
  },
  {
    HORA: "16:00",
    ESPECIALISTA: "PATRICIA SUAZO",
    PACIENTE: "RAMON ULLOA",
    RUT: "14989389-K",
    PREVISION: "FONASA",
  },
];

//Radiología
console.log(radiologia[0]);
console.log(radiologia[radiologia.length - 1]);
const primeraAtencionRadiologia = radiologia[0];
const ultimaAtencionRadiologia = radiologia[radiologia.length - 1];
console.log(
  `Radiología: Primera atención: ${primeraAtencionRadiologia.PACIENTE} - ${primeraAtencionRadiologia.PREVISION} | Última atención: ${ultimaAtencionRadiologia.PACIENTE} -  ${ultimaAtencionRadiologia.PREVISION}`
);
document.getElementById(
  "firstAttentionRadiology"
).innerHTML = `${primeraAtencionRadiologia.PACIENTE} - ${primeraAtencionRadiologia.PREVISION}`;
document.getElementById(
  "lastAttentionRadiology"
).innerHTML = `${ultimaAtencionRadiologia.PACIENTE} - ${ultimaAtencionRadiologia.PREVISION}`;

//Tabla Radiología
let table = `
      <p><B>Radiología</B></p>
      <table border='1'>
      <tr>
        <td><B>HORA</B></td>
        <td><B>ESPECIALISTA</B></td>
        <td><B>PACIENTE</B></td>
        <td><B>RUT</B></td>
        <td><B>PREVISIÓN</B></td>
      </tr>
      `;
for (let k = 1; k <= radiologia.length; k++) {
  //console.log(radiologia[k-1])
  table =
    table +
    `
      <tr>
        <td>${radiologia[k - 1].HORA}</td>
        <td>${radiologia[k - 1].ESPECIALISTA}</td>
        <td>${radiologia[k - 1].PACIENTE}</td>
        <td>${radiologia[k - 1].RUT}</td>
        <td>${radiologia[k - 1].PREVISION}</td>
      </tr>
      `;
}

table = table + `</table>`;
document.getElementById("radiologyTable").innerHTML = `${table}`;

//Traumatología
console.log(traumatologia[0]);
console.log(traumatologia[traumatologia.length - 1]);
const primeraAtencionTraumatologia = traumatologia[0];
const ultimaAtencionTraumatologia = traumatologia[traumatologia.length - 1];
console.log(
  `Primera atención: ${primeraAtencionTraumatologia.PACIENTE} - ${primeraAtencionTraumatologia.PREVISION} | Última atención: ${ultimaAtencionTraumatologia.PACIENTE} -  ${ultimaAtencionTraumatologia.PREVISION}`
);
document.getElementById(
  "firstAttentionTraumatology"
).innerHTML = `${primeraAtencionTraumatologia.PACIENTE} - ${primeraAtencionTraumatologia.PREVISION}`;
document.getElementById(
  "lastAttentionTraumalogy"
).innerHTML = `${ultimaAtencionTraumatologia.PACIENTE} - ${ultimaAtencionTraumatologia.PREVISION}`;

table = `
        <p><B>Traumatología</B></p>
        <table border='1'>
        <tr>
          <td><B>HORA</B></td>
          <td><B>ESPECIALISTA</B></td>
          <td><B>PACIENTE</B></td>
          <td><B>RUT</B></td>
          <td><B>PREVISIÓN</B></td>
        </tr>
     `;
for (let k = 1; k <= traumatologia.length; k++) {
  //console.log(traumatologia[k-1])
  table =
    table +
    `
   <tr>
     <td>${traumatologia[k - 1].HORA}</td>
     <td>${traumatologia[k - 1].ESPECIALISTA}</td>
     <td>${traumatologia[k - 1].PACIENTE}</td>
     <td>${traumatologia[k - 1].RUT}</td>
     <td>${traumatologia[k - 1].PREVISION}</td>
   </tr>
 `;
}

table = table + `</table>`;
document.getElementById("traumalogyTable").innerHTML = `${table}`;

//Dental
console.log(dental[0]);
console.log(dental[dental.length - 1]);
const primeraAtenDental = dental[0];
const ultimaAtencionDental = dental[dental.length - 1];
console.log(
  `Primera atención: ${primeraAtenDental.PACIENTE} - ${primeraAtenDental.PREVISION} | Última atención: ${ultimaAtencionDental.PACIENTE} -  ${ultimaAtencionDental.PREVISION}`
);
document.getElementById(
  "firstDentalCare"
).innerHTML = `${primeraAtenDental.PACIENTE} - ${primeraAtenDental.PREVISION}`;
document.getElementById(
  "lastDentalCare"
).innerHTML = `${ultimaAtencionDental.PACIENTE} - ${ultimaAtencionDental.PREVISION}`;

table = `
   <p><B>Dental</B></p>
   <table border='1'>
   <tr>
    <td><B>HORA</B></td>
    <td><B>ESPECIALISTA</B></td>
    <td><B>PACIENTE</B></td>
    <td><B>RUT</B></td>
    <td><B>PREVISIÓN</B></td>
  </tr>
 `;
for (let k = 1; k <= traumatologia.length; k++) {
  //console.log(traumatologia[k-1])
  table =
    table +
    `
<tr>
 <td>${traumatologia[k - 1].HORA}</td>
 <td>${traumatologia[k - 1].ESPECIALISTA}</td>
 <td>${traumatologia[k - 1].PACIENTE}</td>
 <td>${traumatologia[k - 1].RUT}</td>
 <td>${traumatologia[k - 1].PREVISION}</td>
</tr>
`;
}

table = table + `</table>`;
document.getElementById("dentalCareTable").innerHTML = `${table}`;

for (let k = 1; k <= traumatologia.length; k++) {
  console.log(traumatologia[k - 1]);
}
for (let k = 1; k <= dental.length; k++) {
  console.log(dental[k - 1]);
}

//Agregar las siguientes horas al arreglo de Traumatología:
traumatologia.push(
  {
    HORA: "09:00",
    ESPECIALISTA: "RENÉ POBLETE",
    PACIENTE: "ANA GELLONA",
    RUT: "13123329-7",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "09:30",
    ESPECIALISTA: "MARIA SOLAR",
    PACIENTE: "RAMIRO ANDRADE",
    RUT: "12221451-K",
    PREVISION: "FONASA",
  },
  {
    HORA: "10:00",
    ESPECIALISTA: "RAUL LOYOLA",
    PACIENTE: "CARMEN ISLA",
    RUT: "10112348-3",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "10:30",
    ESPECIALISTA: "ANTONIO LARENAS",
    PACIENTE: " PABLO LOAYZA",
    RUT: "13453234-1",
    PREVISION: "ISAPRE",
  },
  {
    HORA: "12:00",
    ESPECIALISTA: " MATIAS ARAVENA",
    PACIENTE: "SUSANA POBLETE",
    RUT: "14345656-6",
    PREVISION: "FONASA",
  }
),
  console.log(traumatologia);

//Eliminar el primer elemento del arreglo de Radiología.

radiologia.shift();

//Eliminar el último elemento del arreglo de Radiología.

radiologia.pop();
console.log(radiologia);

//Imprimir consultas Dental
for (let i = 1; i <= dental.length; i++) {
  document.write(
    `${dental[i - 1].HORA} - ${dental[i - 1].ESPECIALISTA} - ${
      dental[i - 1].PACIENTE
    } - ${dental[i - 1].RUT} - ${dental[i - 1].PREVISION}<br>`
  );
}

//Imprimir todas las consultas
let consultas = radiologia.concat(traumatologia);
consultas = consultas.concat(dental);
console.log(consultas);

document.write("<h2>Listado Total de Pacientes</h2>");
for (let j = 1; j <= consultas.length; j++) {
  document.write(`<p>${consultas[j - 1].PACIENTE}</p>`);
}

document.write("<h2>Pacientes de Dental Isapre</h2>");
for (let i = 1; i <= dental.length; i++) {
  if (dental[i - 1].PREVISION === "ISAPRE") {
    document.write(
      `${dental[i - 1].PACIENTE} - ${dental[i - 1].PREVISION}<br>`
    );
  }
}

document.write("<h2>Pacientes de Traumatología Fonasa</h2>");
traumatologia.map(paciente =>{
  if(paciente.PREVISION === 'FONASA'){
    document.write(`${paciente.PACIENTE} - ${paciente.PREVISION}<br>`)
  } 
})



