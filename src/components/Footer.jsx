import {Link} from 'react-router-dom'



const Footer = props => {
    const githubUrl = props.githubUrl

    return (
        <div className="card">
            {/* <Link to = githubUrl>Link to Developer Github Profile</Link> */}
            <p>Footer</p>
        </div>
    )
}

export default Footer