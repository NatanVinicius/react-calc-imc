import styles from './App.module.css';
import { useState } from 'react';
import poweredImg from './assets/powered.png';
import arrowImg from './assets/leftarrow.png'
import { levels, calculatorIMC, level } from './helpers/levels';
import { GridItem } from './components/GridItem';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null>(null);

  const handleCalculatorBtn = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(heightField && weightField) {
      setToShow(calculatorIMC(weightField, heightField));
    } else {
      alert('Campos inválidos');
    };
  };

  const handleClickBack = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
    levels.forEach(item => {
      item.yourIMC = null;
    });
  };


  return (
    <div className={styles.main}>
      <header>
          <div className={styles.headerContainer}>
            <img src={poweredImg} alt="Logo" />
          </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculadora de IMC</h1>
          <p>A sigla IMC que significa índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
          <form action="">
            <input 
            type="number" 
            placeholder="Digite sua altura Ex. 1.75 (em metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => {setHeightField(parseFloat(e.target.value))}}
            disabled={toShow ? true : false}
            />
            <input type="number" 
            name="weightField" 
            placeholder="Digite o seu peso Ex 85.5 (em kg)"
            id="weightField"
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => {setWeightField(parseFloat(e.target.value))}}
            disabled={toShow ? true : false}
            />
          </form>
          <button onClick={handleCalculatorBtn} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
                {levels.map((item, key) => (
                  <GridItem key={key} data={item}/>
                ))}
              </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.arrowRight}><img src={arrowImg} alt="Botão voltar" onClick={handleClickBack}/></div>
              <GridItem data={toShow} />
            </div>
          }
        </div>        
      </div>
    </div>
  );
};

export default App;