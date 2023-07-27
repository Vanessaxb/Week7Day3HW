import styles from './Styles.module.css'
import EmployeeListItem from './EmployeeListItem';

function EmployeeList(props) {
    return (
        <div className={styles.employeelist}>
        <EmployeeListItem />
        </div>        
            
    )
    }
    
    export default EmployeeList;