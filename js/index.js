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
            // Funciones:
            function sumador (n1, n2) {
                let resultado = n1 + n2;
                return resultado;
            }
            function pagosNegativos (protoPagoReal) {
                // ("pagosNegativos" es una función que evalúa si el usuario ingresó un pago negativo, lo que implicaría que debe dinero extra por fuera del total estipulado. Ergo, es preciso alertárselo.)
                if (protoPagoReal < 0) {
                    return alert(`ATENCIÓN: Tu pago es menor a cero. Ten en cuenta que pagarás una deuda extra a los acreedores del grupo de ${-protoPagoReal}.`)
                }
            }
            // ("sumador" es una función que suma dos números. La reutilicé para algunas restas, volviendo al sustraendo negativo.)
            function ifAcreedor2 (nombreY, deudaParaY) {
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
            let amigos = [];
            class Amigo {
                nombre;
                pagoReal;
                deuda;
                totalReal;
                deudaPara1;
                deudor;
                constructor (x, pagoIdeal, totalReal, deudor) {
                    this.nombre = ingresoNombres (x);
                    this.pagoReal = ingresoPagos (this.nombre);
                    this.deuda = sumador (pagoIdeal, -this.pagoReal);
                    this.totalReal = sumador (totalReal, this.pagoReal);
                    this.deudaPara = -this.deuda;
                    // (Si su deuda es negativa, se multiplica por -1 y es lo que le deben, es decir, la deuda para con él, no de él. Eso es deudaPara.)
                    this.deudor = deudor;
                }
                ifAcreedor1 (deudaTotal) {
                    // (Si el usuario es acreedor, quiere decir que su deuda es negativa o vale cero, es decir, que le deben dinero o no pero no tiene deuda.)
                    let resultado;
                    if (this.deuda < 0 || this.deuda == 0) {
                        resultado = sumador (deudaTotal, this.deudaPara);
                        this.deudor = false;
                        // (La variable deudor, por otro lado, es un booleano que define si la persona es deudora o no.)
                    } else {
                        this.deudor = true;
                        resultado = deudaTotal;
                    }
                    return resultado;
                }
            }
            for (let i=0; i < cantAmigos; i++) {
            // (For de ingresos por cada amigo.)
                let amigoVar = new Amigo (i+1, pagoIdeal, totalReal, true);
                pagosNegativos (amigoVar.pagoReal);
                totalReal = amigoVar.totalReal;
                deudaTotal = amigoVar.ifAcreedor1 (deudaTotal);
                amigos.push (amigoVar);
            }
            if (total != totalReal) {
                alert(`El total original estipulado (${total}) difiere del monto sumado entre sus compañeros (${amigoVar.totalReal}). ${enter}`);
            } else {
                for (let j = 0; j <= amigos.length-1; j++) {
                    let objetoJ = amigos[j];
                    if (objetoJ.deudor == false) {
                        ifAcreedor2 (objetoJ.nombre, objetoJ.deudaPara);
                    } else {
                        for (let k = 0; k <= amigos.length-1; k++) {
                            while (k != j && k <= amigos.length-1) {
                                let objetoK = amigos[k];
                                ifSegundosCases (objetoK.deudor, objetoJ.deuda, objetoK.deudaPara, objetoJ.nombre, objetoK.nombre);
                                k++;
                            }
                        }
                    }
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