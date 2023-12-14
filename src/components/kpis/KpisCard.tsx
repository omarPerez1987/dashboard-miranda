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