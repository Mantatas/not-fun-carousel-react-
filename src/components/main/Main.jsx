import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import QuotesContainer from '../quotesContainer/QuotesContainer';

const Main = () => {
    return(
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <QuotesContainer />
        </div>
    )
}


export default Main