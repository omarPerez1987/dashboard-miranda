<<<<<<< HEAD
import { KpiCardStyled } from "../../componentsStyle/kpis/KpisCardStyled"

export const KpisCard = ({Icon,number, text})=>{
    return(
        <KpiCardStyled>
            <div className="icon__container">
                <Icon/>
            </div>
            <div className="text__container">
                <p>{number}</p>
                <span>{text}</span>
            </div>
        </KpiCardStyled>
)
}
=======
import { KpiCardStyled } from "../../componentsStyle/kpis/KpisCardStyled";
import { KpisCardProps } from "../../interfaces/propsInterface/propsInterface";

export const KpisCard: React.FC<KpisCardProps> = ({ Icon, number, text }) => {
  return (
    <KpiCardStyled>
      <div className="icon__container">
        <Icon />
      </div>
      <div className="text__container">
        <p>{number}</p>
        <span>{text}</span>
      </div>
    </KpiCardStyled>
  );
};
>>>>>>> 71934316653164d45b7ae8721a42e37f7d52f0cf
