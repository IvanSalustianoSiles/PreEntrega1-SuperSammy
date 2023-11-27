// SuperSammy es el nombre de este proyecto, y consiste en un SDM (Sistema de División Monetaria) regido por la asistente Sammy, cuyas imágenes fueron creadas con inteligencia artificial. 
// Este sistema está especializado en el típico momento en el que terminaste de cenar con tus amigos y es hora de pagar las cuentas, pero resulta que sólo algunos de ustedes podrán pagar; es hora de saber cómo dividir las deudas. ¡Ahora vas a poder hacerlo de inmediato!
let continuar;
// (Continuar es una varible que cumple la función de determinar si el algoritmo se repita o no, dependiendo de la elección del usuario.)
let enter = `Por favor, presione ENTER para reiniciar.`;
while (continuar != `FIN`) {
    let ok = prompt(`Hola! Bienvenido a SuperSammy, tu SDM (Sistema de División Monetaria). Escriba “OK” para continuar.`).toUpperCase();
    if (ok != `OK`) {
        alert(`ERROR. ${enter}`);
    } else {
        let cantAmigos = parseInt(prompt(`¿Cuántos amigos fueron?`));
        if (cantAmigos > 8 || cantAmigos < 2) {
            alert(`Lo sentimos, SDM no admite más de ocho(8) personas en su procesamiento; tampoco menos de dos(2). ${enter}`);
        } else {
            let total = parseFloat(prompt(`¿Total del pago?`));
            if (total <= 0) {
                alert(`Lo sentimos, pero ${total} no es un número válido. Debe ser positivo. ${enter}`);
            } else {
                let pagoIdeal = total / cantAmigos;
                let deudaTotal = 0;
                // ("deudaTotal" es una variable-sumador que va acumulando el dinero que se le debe a cada acreedor en particular.)
                let totalReal = 0;
                // ("totalReal" es una variable-sumador que va acumulando simplemente el dinero que pagó cada persona,
                // para finalmente corroborar que corresponda con el total estipulado al inicio por el usuario.)
                let nombre1, nombre2, nombre3, nombre4, nombre5, nombre6, nombre7, nombre8;
                let deuda1, deuda2, deuda3, deuda4, deuda5, deuda6, deuda7, deuda8;
                let deudaPara1, deudaPara2, deudaPara3, deudaPara4, deudaPara5, deudaPara6, deudaPara7, deudaPara8;
                let deudor1, deudor2, deudor3, deudor4, deudor5, deudor6, deudor7, deudor8;
                let pagoReal1, pagoReal2, pagoReal3, pagoReal4, pagoReal5, pagoReal6, pagoReal7, pagoReal8;
                // (En una versión futura, probablemente todas estas variables se resuman en cinco arrays.)
                // Funciones:
                function sumador (n1, n2) {
                    let resultado = n1 + n2;
                    return resultado;
                }
                 // ("sumador" es una función que suma dos números. La reutilicé para algunas restas, volviendo al sustraendo negativo.)
                function ifAcreedor (nombreY, deudaParaY) {
                    alert(`A ${nombreY} le deben ${deudaParaY} pesos y no debe.`);
                }
                // ("ifAcreedor" es una función dedicada al mensaje se muestra en pantalla si la persona es acreedor, es decir, la variable deudor resulta false.)
                function ifSegundosCases (deudorX, deudaN, deudaParaX, nombreN, nombreX) {
                    if (deudorX == false) {
                        let deudaNAX = deudaN * deudaParaX / deudaTotal;
                        // ("deudaNAX" refiere a la deuda de una persona N a una persona X. La fórmula consiste en multiplicar la deuda general de N, por lo que le deben en general a X sobre la deuda total, que no es más que la suma de todo lo que se debe grupalmente.)
                        alert(`${nombreN} debe ${deudaNAX} pesos a ${nombreX}`);
                    }
                }
                // ("ifSegundosCases" es una función dedicada a ver, dentro del caso else en el que la persona sea deudor, a quién le debe; para eso, se evalúa si las demás personas son acreedores, es decir, no-deudores. Si lo son, es a ellos a quienes les debe, y se alerta la deuda correspondiente.)
                function ingresoNombres (a) {
                   return prompt(`¿Quién es el amigo N°${a}?`);
                }
                // ("ingresoNombres" es una función dedicada a que el usuario ingrese el nombre de una persona en una determinada vuelta del for. Debido a ello, "a" cambia a "i" en el llamado.)
                function ingresoPagos (nombre) {
                    return parseFloat(prompt(`¿Cuánto pagó ${nombre}?`));
                }
                // ("ingresoPagos" es una función dedicada a que el usuario ingrese el pagó que realizó una persona determinada del grupo. Toma como parámetro al mismo nombre definido justo antes.)
                function pagosNegativos (pagoReal) {
                    if (pagoReal < 0) {
                        alert(`ATENCIÓN: Tu pago es menor a cero. Ten en cuenta que pagarás una deuda extra a los acreedores del grupo de ${-pagoReal}.`)
                    }
                }
                // ("pagosNegativos" es una función que evalúa si el usuario ingresó un pago negativo, lo que implicaría que debe dinero extra por fuera del total estipulado. Ergo, es preciso alertárselo.)
                for (let i=1; i<=cantAmigos; i++) {
                // (For de ingresos por cada amigo.)
                    switch(i) {
                        // (A falta de arrays, se me ocurrió crear muchas variables enumeradas y el usuario las carga en un switch.)
                        case 1:
                            nombre1 = ingresoNombres (i);
                            pagoReal1 = ingresoPagos (nombre1);
                            pagosNegativos (pagoReal1);
                            deuda1 = sumador (pagoIdeal, -pagoReal1);
                            totalReal = sumador (totalReal, pagoReal1);
                            if (deuda1 < 0 || deuda1 == 0) {
                                // (Si el usuario es acreedor, quiere decir que su deuda es negativa o vale cero, es decir, que le deben dinero o no pero no tiene deuda.)
                                deudaPara1 = -deuda1;
                                // (Si su deuda es negativa, se multiplica por -1 y es lo que le deben, es decir, la deuda para con él, no de él. Esa es la variable deudaPara.)
                                deudaTotal = sumador (deudaTotal, deudaPara1);
                                deudor1 = false;
                                // (La variable deudor, por otro lado, es un booleano que define si la persona es deudora o no.)
                            } else {
                                deudor1 = true;
                            }
                        break;
                        case 2:
                            nombre2 = ingresoNombres (i);
                            pagoReal2 = ingresoPagos (nombre2);
                            pagosNegativos (pagoReal2);
                            deuda2 = sumador (pagoIdeal, -pagoReal2);
                            totalReal = sumador (totalReal, pagoReal2);
                            if (deuda2 < 0 || deuda2 == 0) {
                                deudaPara2 = -deuda2;
                                deudaTotal = sumador (deudaTotal, deudaPara2);
                                deudor2 = false;
                            } else {
                                deudor2 = true;
                            }
                        break;
                        case 3:
                            nombre3 = ingresoNombres (i);
                            pagoReal3 = ingresoPagos (nombre3);
                            pagosNegativos (pagoReal3);
                            deuda3 = sumador (pagoIdeal, -pagoReal3);
                            totalReal = sumador (totalReal, pagoReal3);
                            if (deuda3 < 0 || deuda3 == 0) {
                                deudaPara3 = -deuda3;
                                deudaTotal = sumador (deudaTotal, deudaPara3);
                                deudor3 = false;
                            } else {
                                deudor3 = true;
                            }
                        break;
                        case 4:
                            nombre4 = ingresoNombres (i);
                            pagoReal4 = ingresoPagos (nombre4);
                            pagosNegativos (pagoReal4);
                            deuda4 = sumador (pagoIdeal, -pagoReal4);
                            totalReal = sumador (totalReal, pagoReal4);
                            if (deuda4 < 0 || deuda4 == 0) {
                                deudaPara4 = -deuda4;
                                deudaTotal = sumador (deudaTotal, deudaPara4);
                                deudor4 = false;
                            } else {
                                deudor4 = true;
                            }
                        break;
                        case 5:
                            nombre5 = ingresoNombres (i);
                            pagoReal5 = ingresoPagos (nombre5);
                            pagosNegativos (pagoReal5);
                            deuda5 = sumador (pagoIdeal, -pagoReal5);
                            totalReal = sumador (totalReal, pagoReal5);
                            if (deuda5 < 0 || deuda5 == 0) {
                                deudaPara5 = -deuda5;
                                deudaTotal = sumador (deudaTotal, deudaPara5);
                                deudor5 = false;
                            } else {
                                deudor5 = true;
                            }
                        break;
                        case 6:
                            nombre6 = ingresoNombres (i);
                            pagoReal6 = ingresoPagos (nombre6);
                            pagosNegativos (pagoReal6);
                            deuda6 = sumador (pagoIdeal, -pagoReal6);
                            totalReal = sumador (totalReal, pagoReal6);
                            if (deuda6 < 0 || deuda6 == 0) {
                                deudaPara6 = -deuda6;
                                deudaTotal = sumador (deudaTotal, deudaPara6);
                                deudor6 = false;
                            } else {
                                deudor6 = true;
                            }
                        break;
                        case 7:
                            nombre7 = ingresoNombres (i);
                            pagoReal7 = ingresoPagos (nombre7);
                            pagosNegativos (pagoReal7);
                            deuda7 = sumador (pagoIdeal, -pagoReal7);
                            totalReal = sumador (totalReal, pagoReal7);
                            if (deuda7 < 0 || deuda7 == 0) {
                                deudaPara7 = -deuda7;
                                deudaTotal = sumador (deudaTotal, deudaPara7);
                                deudor7 = false;
                            } else {
                                deudor7 = true;
                            }
                        break;
                        case 8:
                            nombre8 = ingresoNombres (i);
                            pagoReal8 = ingresoPagos (nombre8);
                            pagosNegativos (pagoReal8);
                            deuda8 = sumador (pagoIdeal, -pagoReal8);
                            totalReal = sumador (totalReal, pagoReal8);
                            if (deuda8 < 0 || deuda8 == 0) {
                                deudaPara8 = -deuda8;
                                deudaTotal = sumador (deudaTotal, deudaPara8);
                                deudor8 = false;
                            } else {
                                deudor8 = true;
                            }
                        break;
                        default:
                            alert(`Ocurrió un error. ${enter}`);
                        break;
                    }
                    // (Pensé en utilizar una sola función para los cases completos del switch anterior, pero entendí que luego si quería reutilizar muchas variables actualizadas, no podría con lo que aprendimos hasta ahora.
                    // Así mismo, la gran cantidad de variables en mi algoritmo se debe a que aún no usamos arrays.)
                }
                if (total != totalReal) {
                    alert(`El total original estipulado (${total}) difiere del monto sumado entre sus compañeros (${totalReal}). ${enter}`);
                } else {
                    for (let j = 1; j <= cantAmigos; j++) {
                        switch (j) {
                            case 1:
                                if (deudor1 == false) {
                                    ifAcreedor (nombre1, deudaPara1);
                                } else {
                                      ifSegundosCases (deudor2, deuda1, deudaPara2, nombre1, nombre2);
                                      ifSegundosCases (deudor3, deuda1, deudaPara3, nombre1, nombre3);
                                      ifSegundosCases (deudor4, deuda1, deudaPara4, nombre1, nombre4);
                                      ifSegundosCases (deudor5, deuda1, deudaPara5, nombre1, nombre5);
                                      ifSegundosCases (deudor6, deuda1, deudaPara6, nombre1, nombre6);
                                      ifSegundosCases (deudor7, deuda1, deudaPara7, nombre1, nombre7);
                                      ifSegundosCases (deudor8, deuda1, deudaPara8, nombre1, nombre8);
                                    }
                            break;
                            case 2:
                                if (deudor2 == false) {
                                    ifAcreedor (nombre2, deudaPara2);
                                } else {
                                    ifSegundosCases (deudor1, deuda2, deudaPara1, nombre2, nombre1);
                                    ifSegundosCases (deudor3, deuda2, deudaPara3, nombre2, nombre3);
                                    ifSegundosCases (deudor4, deuda2, deudaPara4, nombre2, nombre4);
                                    ifSegundosCases (deudor5, deuda2, deudaPara5, nombre2, nombre5);
                                    ifSegundosCases (deudor6, deuda2, deudaPara6, nombre2, nombre6);
                                    ifSegundosCases (deudor7, deuda2, deudaPara7, nombre2, nombre7);
                                    ifSegundosCases (deudor8, deuda2, deudaPara8, nombre2, nombre8);
                                    
                                  }
                            break;
                            case 3:
                                if (deudor3 == false) {
                                    ifAcreedor (nombre3, deudaPara3);
                                } else {
                                    ifSegundosCases (deudor1, deuda3, deudaPara1, nombre3, nombre1);
                                    ifSegundosCases (deudor2, deuda3, deudaPara2, nombre3, nombre2);
                                    ifSegundosCases (deudor4, deuda3, deudaPara4, nombre3, nombre4);
                                    ifSegundosCases (deudor5, deuda3, deudaPara5, nombre3, nombre5);
                                    ifSegundosCases (deudor6, deuda3, deudaPara6, nombre3, nombre6);
                                    ifSegundosCases (deudor7, deuda3, deudaPara7, nombre3, nombre7);
                                    ifSegundosCases (deudor8, deuda3, deudaPara8, nombre3, nombre8);
                                  }
                            break;
                            case 4:
                                if (deudor4 == false) {
                                    ifAcreedor (nombre4, deudaPara4);
                                } else {
                                    ifSegundosCases (deudor1, deuda4, deudaPara1, nombre4, nombre1);
                                    ifSegundosCases (deudor2, deuda4, deudaPara2, nombre4, nombre2);
                                    ifSegundosCases (deudor3, deuda4, deudaPara3, nombre4, nombre3);
                                    ifSegundosCases (deudor5, deuda4, deudaPara5, nombre4, nombre5);
                                    ifSegundosCases (deudor6, deuda4, deudaPara6, nombre4, nombre6);
                                    ifSegundosCases (deudor7, deuda4, deudaPara7, nombre4, nombre7);
                                    ifSegundosCases (deudor8, deuda4, deudaPara8, nombre4, nombre8);
                                  }
                            break;
                            case 5:
                                if (deudor5 == false) {
                                    ifAcreedor (nombre5, deudaPara5);
                                } else {
                                    ifSegundosCases (deudor1, deuda5, deudaPara1, nombre5, nombre1);
                                    ifSegundosCases (deudor2, deuda5, deudaPara2, nombre5, nombre2);
                                    ifSegundosCases (deudor3, deuda5, deudaPara3, nombre5, nombre3);
                                    ifSegundosCases (deudor4, deuda5, deudaPara4, nombre5, nombre4);
                                    ifSegundosCases (deudor6, deuda5, deudaPara6, nombre5, nombre6);
                                    ifSegundosCases (deudor7, deuda5, deudaPara7, nombre5, nombre7);
                                    ifSegundosCases (deudor8, deuda5, deudaPara8, nombre5, nombre8);
                                  }
                            break;
                            case 6:
                                if (deudor6 == false) {
                                    ifAcreedor (nombre6, deudaPara6);
                                } else {
                                    ifSegundosCases (deudor1, deuda6, deudaPara1, nombre6, nombre1);
                                    ifSegundosCases (deudor2, deuda6, deudaPara2, nombre6, nombre2);
                                    ifSegundosCases (deudor3, deuda6, deudaPara3, nombre6, nombre3);
                                    ifSegundosCases (deudor4, deuda6, deudaPara4, nombre6, nombre4);
                                    ifSegundosCases (deudor5, deuda6, deudaPara5, nombre6, nombre5);
                                    ifSegundosCases (deudor7, deuda6, deudaPara7, nombre6, nombre7);
                                    ifSegundosCases (deudor8, deuda6, deudaPara8, nombre6, nombre8);
                                  }
                            break;
                            case 7:
                                if (deudor7 == false) {
                                    ifAcreedor (nombre7, deudaPara7);
                                } else {
                                    ifSegundosCases (deudor1, deuda7, deudaPara1, nombre7, nombre1);
                                    ifSegundosCases (deudor2, deuda7, deudaPara2, nombre7, nombre2);
                                    ifSegundosCases (deudor3, deuda7, deudaPara3, nombre7, nombre3);
                                    ifSegundosCases (deudor4, deuda7, deudaPara4, nombre7, nombre4);
                                    ifSegundosCases (deudor5, deuda7, deudaPara5, nombre7, nombre5);
                                    ifSegundosCases (deudor6, deuda7, deudaPara6, nombre7, nombre6);
                                    ifSegundosCases (deudor8, deuda7, deudaPara8, nombre7, nombre8);
                                  }
                            break;
                            case 8:
                                if (deudor8 == false) {
                                    ifAcreedor (nombre8, deudaPara8);
                                } else {
                                    ifSegundosCases (deudor1, deuda8, deudaPara1, nombre7, nombre1);
                                    ifSegundosCases (deudor2, deuda8, deudaPara2, nombre7, nombre2);
                                    ifSegundosCases (deudor3, deuda8, deudaPara3, nombre7, nombre3);
                                    ifSegundosCases (deudor4, deuda8, deudaPara4, nombre7, nombre4);
                                    ifSegundosCases (deudor5, deuda8, deudaPara5, nombre7, nombre5);
                                    ifSegundosCases (deudor6, deuda8, deudaPara6, nombre7, nombre6);
                                    ifSegundosCases (deudor7, deuda8, deudaPara7, nombre8, nombre7);
                                  }
                            break;
                            default:
                                alert(`Ocurrió un error. ${enter}`);
                            break;
                        }
                        // (A diferencia del switch anterior, en este caso sí podría haber hecho una función por cada case, sin embargo, habrían quedado más de 30 parámetros, entonces tomé la decisión de dividir entre ifAcreedor e IfSegundosCases.
                        // Esto se debe a que cada variable enumerada en verdad corresponderá a un campo de un mismo array en el futuro, lo que le dará especial síntesis al código.)
                    }
                    continuar = prompt(`Si desea dividir otro gasto y sus deudas, pulse ENTER. Sino, escriba "FIN".`).toUpperCase();
                    if (continuar == `FIN`) {
                        alert(`¡Gracias por utilizar el SDM (Sistema de Dvisión Monetaria)! Ahora sus gastos están bien repartidos. ¡Hasta pronto!`);
                    } else if (continuar != ``) {
                        alert(`Ocurrió un error. ${enter}`);
                    }
                    // (Este else if existe precisamente porque presionar ENTER es como no escribir nada. Si no escribe nada (ENTER) o escribe FIN, entonces escribió algo errado.)
                }
            }
        } 
    }
}