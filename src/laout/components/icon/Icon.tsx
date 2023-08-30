
import iconsSprite from "../photo/icon-svg.svg"

type iconPropsType = {
    iconId : string
}
function Icon(props: iconPropsType){
    return(
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}

export default Icon