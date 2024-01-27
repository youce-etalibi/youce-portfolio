import './notFound.css';
import { Link } from 'react-router-dom'
export default function NotFound(){
    return(
        <>
            <div className="parent404">
                <div className="parentText404">
                    <h1>404</h1>
                    <h3>This page not found</h3>
                    <h6>Go back to home</h6>
                    <center>
                    <Link to='/' className='LinkBack'>
                        <i className='bx bx-arrow-back'></i>
                    </Link>
                    </center>
                </div>
            </div>
        </>
    )
}