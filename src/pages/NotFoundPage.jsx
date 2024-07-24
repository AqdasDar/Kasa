import {Link} from "react-router-dom";
import './NotFoundPage.scss';

function NotFoundPage() {
    return (
        <div className="error">
            <h1 className="error__h1">404</h1>
            <p className="error__p">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default NotFoundPage;
