import styles from './List.module.css'

const ListImc = () => {
    return (
        <div className={styles.container}>
            <h2>Confira o resultado na lista abaixo:</h2>
            <ul>
                <li>
                    <b>18,5 ou menos</b>
                    <h3>Abaixo do peso normal</h3>
                    <p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>
                </li>
                <li>
                    <b>Entre 18,6 e 24,9</b>
                    <h3>Peso normal</h3>
                    <p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
                </li>
                <li>
                    <b>Entre 25,0 e 29,9</b>
                    <h3>Sobrepeso</h3>
                    <p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
                </li>
                <li>
                    <b>Entre 30,0 e 34,9</b>
                    <h3>Obesidade grau 1</h3>
                    <p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
                </li>
                <li>
                    <b>Entre 35,0 e 39,9</b>
                    <h3>Obesidade grau 2</h3>
                    <p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>
                </li>
                <li>
                    <b>Acima de 40,0</b>
                    <h3>Obesidade grau 3</h3>
                    <p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>
                </li>
            </ul>
        </div>
    )
}

export default ListImc; 