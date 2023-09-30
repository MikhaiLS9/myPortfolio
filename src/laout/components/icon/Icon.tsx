
import iconsSprite from "../photo/icon-svg.svg"

type iconPropsType = {
    iconId : string
}
function Icon(props: iconPropsType){
    return(
        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={ `${iconsSprite}#${props.iconId}`}/>
        </svg>
    )
}

export default Icon