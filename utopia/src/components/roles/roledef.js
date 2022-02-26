import '../style/roles.css'

const Roledef = () => {
    return(
        <div className="content">
            <div class="content__container">
                <p class="content__container__text"> Usuario:</p>
                <ul class="content__container__list">
                    <li class="content__container__list__item">Tu rol de esta semana es</li>
                    <li class="content__container__list__item"> ROL </li>
                    <li class="content__container__list__item">conoce a tus compañeros</li>
                    <li class="content__container__list__item">!</li>
                </ul>
            </div>
        </div>
    )
}

export default Roledef;