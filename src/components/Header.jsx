import {NavLink} from 'react-router-dom'

const Header = props => {
    return (
        <div className="card">
            <h2>Author name: {props.name}</h2>
            {/* <NavLink to='#'>
                {/* props.navigation */}
            {/* </NavLink> */} 

            <h3></h3>
        </div>
    )
}

export default Header