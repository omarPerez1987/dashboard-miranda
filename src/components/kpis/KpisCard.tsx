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
