import { useState } from "react";
import styles from './Header.module.css'


const HeaderData = () => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);

    const calculaImc = () => {
        const alturaAoQuadrado = (altura / 100 * altura / 100)
        setImc((peso / alturaAoQuadrado).toFixed(2))
    };

    const resetaImc = () => {
        setImc(0);
    }

    return (
        <div className={styles.container}>
            <h1>Calcule seu IMC</h1>
            <form>
                <input onBlur={({ target }) => parseInt(setAltura(target.value))} placeholder="Insira sua altura em cm" required type="number" />
                <input onBlur={({ target }) => parseInt(setPeso(target.value))} placeholder="Insira seu peso em KG" required type="number" />
            </form>
            {imc !== 0 ? (
                <div className={styles.imc}>
                    <h2>IMC: {imc}</h2>
                    <button type="button" onClick={resetaImc}>Recalcular</button>
                </div>
            ) : (
                <button type="button" onClick={calculaImc}>Calcular</button>)}

        </div>
    )
}

export default HeaderData;