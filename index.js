
let ok = prompt(`Hola! Bienvenido al SDM (Sistema de División Monetaria). Escriba “OK” para continuar.`);
if (ok != `ok` && ok != `OK` && ok != `Ok` && ok != `oK`) {
    alert(`Por favor, vuelva a intentarlo.`);
} else {
    let cantAmigos = parseInt(prompt(`¿Cuántos amigos fueron?`));
    if (cantAmigos > 8) {
        alert(`Lo sentimos, SDM no admite más de ocho personas en su procesamiento.`);
    } else {
        let total = prompt(`¿Total del pago?`);
        let pagoIdeal = total / cantAmigos;
        let deudaTotal = 0;
        let nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, nombre8;
        let deuda1, deuda2, deuda3, deuda4, deuda5, deuda6, deuda7, deuda8;
        let deudaPara1, deudaPara2, deudaPara3, deudaPara4, deudaPara5, deudaPara6, deudaPara7, deudaPara8;
        let deudor1, deudor2, deudor3, deudor4, deudor5, deudor6, deudor7, deudor8;
        for (let i=1; i<=cantAmigos; i++) {
            switch(i) {
                case 1:
                    nombre1 = prompt(`¿Quién es el amigo N°1?`);
                    let pagoReal1 = parseFloat(prompt(`¿Cuánto pagó ${nombre1}?`));
                    deuda1 = pagoIdeal - pagoReal1;
                    if (deuda1 < 0 || deuda1 == 0) {
                        deudaPara1 = deuda1 * -1;
                        deudaTotal = deudaTotal + deudaPara1;
                        deudor1 = false;
                    } else {
                        deudor1 = true;
                    }
                break;
                case 2:
                    nombre2 = prompt(`¿Quién es el amigo N°2?`);
                    let pagoReal2 = parseFloat(prompt(`¿Cuánto pagó ${nombre2}?`));
                    deuda2 = pagoIdeal - pagoReal2;
                    if (deuda2 < 0 || deuda2 == 0) {
                        deudaPara2 = deuda2 * -1;
                        deudaTotal = deudaTotal + deudaPara2;
                        deudor2 = false;
                    } else {
                        deudor2 = true;
                    }
                break;
                case 3:
                    nombre3 = prompt(`¿Quién es el amigo N°3?`);
                    let pagoReal3 = parseFloat(prompt(`¿Cuánto pagó ${nombre3}?`));
                    deuda3 = pagoIdeal - pagoReal3;
                    if (deuda3 < 0 || deuda3 == 0) {
                        deudaPara3 = deuda3 * -1;
                        deudaTotal = deudaTotal + deudaPara3;
                        deudor3 = false;
                    } else {
                        deudor3 = true;
                    }
                break;
                case 4:
                    nombre4 = prompt(`¿Quién es el amigo N°4?`);
                    let pagoReal4 = parseFloat(prompt(`¿Cuánto pagó ${nombre4}?`));
                    deuda4 = pagoIdeal - pagoReal4;
                    if (deuda4 < 0 || deuda4 == 0) {
                        deudaPara4 = deuda4 * -1;
                        deudaTotal = deudaTotal + deudaPara4;
                        deudor4 = false;
                    } else {
                        deudor4 = true;
                    }
                break;
                case 5:
                    nombre5 = prompt(`¿Quién es el amigo N°5?`);
                    let pagoReal5 = parseFloat(prompt(`¿Cuánto pagó ${nombre5}?`));
                    deuda5 = pagoIdeal - pagoReal5;
                    if (deuda5 < 0 || deuda5 == 0) {
                        deudaPara5 = deuda5 * -1;
                        deudaTotal = deudaTotal + deudaPara5;
                        deudor5 = false;
                    } else {
                        deudor5 = true;
                    }
                break;
                case 6:
                    nombre6 = prompt(`¿Quién es el amigo N°6?`);
                    let pagoReal6 = parseFloat(prompt(`¿Cuánto pagó ${nombre6}?`));
                    deuda6 = pagoIdeal - pagoReal6;
                    if (deuda6 < 0 || deuda6 == 0) {
                        deudaPara6 = deuda6 * -1;
                        deudaTotal = deudaTotal + deudaPara6;
                        deudor6 = false;
                    } else {
                        deudor6 = true;
                    }
                break;
                case 7:
                    nombre7 = prompt(`¿Quién es el amigo N°7?`);
                    let pagoReal7 = parseFloat(prompt(`¿Cuánto pagó ${nombre7}?`));
                    deuda7 = pagoIdeal - pagoReal7;
                    if (deuda7 < 0 || deuda7 == 0) {
                        deudaPara7 = deuda7 * -1;
                        deudaTotal = deudaTotal + deudaPara7;
                        deudor7 = false;
                    } else {
                        deudor7 = true;
                    }
                break;
                case 8:
                    nombre8 = prompt(`¿Quién es el amigo N°8?`);
                    let pagoReal8 = parseFloat(prompt(`¿Cuánto pagó ${nombre8}?`));
                    deuda8 = pagoIdeal - pagoReal8;
                    if (deuda8 < 0 || deuda8 == 0) {
                        deudaPara8 = deuda8 * -1;
                        deudaTotal = deudaTotal + deudaPara8;
                        deudor8 = false;
                    } else {
                        deudor8 = true;
                    }
                break;
                default:
                    alert(`Hubo un error. Inicie de nuevo el programa.`);
                break;
            }
        }
        for (let j = 1; j <= cantAmigos; j++) {
            switch (j) {
                case 1:
                    if (deudor1 == false) {
                        alert(`A ${nombre1} le deben ${deudaPara1} pesos y no debe.`);
                    } else {
                        if (deudor2 == false) {
                          let deuda1A2 = deuda1 * deudaPara2 / deudaTotal;
                          alert(`${nombre1} debe ${deuda1A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda1A3 = deuda1 * deudaPara3 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda1A4 = deuda1 * deudaPara4 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda1A5 = deuda1 * deudaPara5 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda1A6 = deuda1 * deudaPara6 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda1A7 = deuda1 * deudaPara7 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda1A8 = deuda1 * deudaPara8 / deudaTotal;
                            alert(`${nombre1} debe ${deuda1A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=2:
                    if (deudor2 == false) {
                        alert(`A ${nombre2} le deben ${deudaPara2} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda2A1 = deuda2 * deudaPara1 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A1} pesos a ${nombre1}`);
                        }
                        if (deudor3 == false) {
                            let deuda2A3 = deuda2 * deudaPara3 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda2A4 = deuda2 * deudaPara4 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda2A5 = deuda2 * deudaPara5 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda2A6 = deuda2 * deudaPara6 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda2A7 = deuda2 * deudaPara7 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda2A8 = deuda2 * deudaPara8 / deudaTotal;
                            alert(`${nombre2} debe ${deuda2A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=3:
                    if (deudor3 == false) {
                        alert(`A ${nombre3} le deben ${deudaPara3} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda3A1 = deuda3 * deudaPara1 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda3A2 = deuda3 * deudaPara2 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A2} pesos a ${nombre2}`);
                        }
                        if (deudor4 == false) {
                            let deuda3A4 = deuda3 * deudaPara4 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda3A5 = deuda3 * deudaPara5 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda3A6 = deuda3 * deudaPara6 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda3A7 = deuda3 * deudaPara7 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda3A8 = deuda3 * deudaPara8 / deudaTotal;
                            alert(`${nombre3} debe ${deuda3A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=4:
                    if (deudor4 == false) {
                        alert(`A ${nombre4} le deben ${deudaPara4} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda4A1 = deuda4 * deudaPara1 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda4A2 = deuda4 * deudaPara2 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda4A3 = deuda4 * deudaPara3 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A3} pesos a ${nombre3}`);
                        }
                        if (deudor5 == false) {
                            let deuda4A5 = deuda4 * deudaPara5 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda4A6 = deuda4 * deudaPara6 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda4A7 = deuda4 * deudaPara7 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda4A8 = deuda4 * deudaPara8 / deudaTotal;
                            alert(`${nombre4} debe ${deuda4A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=5:
                    if (deudor5 == false) {
                        alert(`A ${nombre5} le deben ${deudaPara5} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda5A1 = deuda5 * deudaPara1 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda5A2 = deuda5 * deudaPara2 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda5A3 = deuda5 * deudaPara3 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda5A4 = deuda5 * deudaPara4 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A4} pesos a ${nombre4}`);
                        }
                        if (deudor6 == false) {
                            let deuda5A6 = deuda5 * deudaPara6 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda5A7 = deuda5 * deudaPara7 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda5A8 = deuda5 * deudaPara8 / deudaTotal;
                            alert(`${nombre5} debe ${deuda5A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=6:
                    if (deudor6 == false) {
                        alert(`A ${nombre6} le deben ${deudaPara6} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda6A1 = deuda6 * deudaPara1 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda6A2 = deuda6 * deudaPara2 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda6A3 = deuda6 * deudaPara3 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda6A4 = deuda6 * deudaPara4 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda6A5 = deuda6 * deudaPara5 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A5} pesos a ${nombre5}`);
                        }
                        if (deudor7 == false) {
                            let deuda6A7 = deuda6 * deudaPara7 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A7} pesos a ${nombre7}`);
                        }
                        if (deudor8 == false) {
                            let deuda6A8 = deuda6 * deudaPara8 / deudaTotal;
                            alert(`${nombre6} debe ${deuda6A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=7:
                    if (deudor7 == false) {
                        alert(`A ${nombre7} le deben ${deudaPara7} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda7A1 = deuda7 * deudaPara1 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda7A2 = deuda7 * deudaPara2 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda7A3 = deuda7 * deudaPara3 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda7A4 = deuda7 * deudaPara4 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda7A5 = deuda7 * deudaPara5 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda7A6 = deuda7 * deudaPara6 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A6} pesos a ${nombre6}`);
                        }
                        if (deudor8 == false) {
                            let deuda7A8 = deuda7 * deudaPara8 / deudaTotal;
                            alert(`${nombre7} debe ${deuda7A8} pesos a ${nombre8}`);
                        }
                    }
                break;
                case j=8:
                    if (deudor8 == false) {
                        alert(`A ${nombre8} le deben ${deudaPara8} pesos y no debe.`);
                    } else {
                        if (deudor1 == false) {
                            let deuda8A1 = deuda8 * deudaPara1 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A1} pesos a ${nombre1}`);
                        }
                        if (deudor2 == false) {
                            let deuda8A2 = deuda8 * deudaPara2 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A2} pesos a ${nombre2}`);
                        }
                        if (deudor3 == false) {
                            let deuda8A3 = deuda8 * deudaPara3 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A3} pesos a ${nombre3}`);
                        }
                        if (deudor4 == false) {
                            let deuda8A4 = deuda8 * deudaPara4 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A4} pesos a ${nombre4}`);
                        }
                        if (deudor5 == false) {
                            let deuda8A5 = deuda8 * deudaPara5 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A5} pesos a ${nombre5}`);
                        }
                        if (deudor6 == false) {
                            let deuda8A6 = deuda8 * deudaPara6 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A6} pesos a ${nombre6}`);
                        }
                        if (deudor7 == false) {
                            let deuda8A7 = deuda8 * deudaPara7 / deudaTotal;
                            alert(`${nombre8} debe ${deuda8A7} pesos a ${nombre7}`);
                        }
                    }
                break;
            }
        }
    }
}
