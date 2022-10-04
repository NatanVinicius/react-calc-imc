import { level } from "../../helpers/levels"
import styles from './GridItem.module.css';
import imgUp from '../../assets/up.png';
import imgDown from '../../assets/down.png'

type Props = {
    data: level;
}

export const GridItem = ({ data }: Props) => {
    return (
            <div className={styles.gridItem}>
                <div className={styles.main} style={{backgroundColor: data.color}}>
                    <div className={styles.icon}>
                        <img src={data.icon == 'up' ? imgUp : imgDown} alt="" width="30px" />
                    </div>
                    <div className={styles.title}>{data.title}</div>
                        {data.yourIMC && 
                            <div className={styles.yourImc}>Seu IMC é de {data.yourIMC.toFixed(2)} </div>
                        }
                    <div className={styles.imcTxt}>
                        
                        <>
                            IMC esta entre {data.imc[0]} e {data.imc[1]}
                        </>
                    </div>
                </div>
            </div>
    )
};

