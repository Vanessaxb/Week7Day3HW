import EPHeader from "../components/EPHeader";
import styles from '../components/Styles.module.css'

function EmployeePage() {
    return (
        <div className={styles.EmployeePage}>
            <EPHeader />
            <ul>
                <img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=1060" alt="React Image" />
                <div className='Images'> 
                    <h3>James King</h3>
                    <h4>President</h4>
                </div>
            </ul>
            
        </div>
    )

}


export default EmployeePage;