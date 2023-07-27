import styles from './Styles.module.css'

function EmployeeListItem(props) {
    return (
    <div className={styles.employeelistitem}>
        <ul>
            <img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=1060" alt="React Image" />
            <div className='Images'> 
                <h3>James King</h3>
                <h4>President</h4>
            </div>
        </ul>

        <ul>            
            <img src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg?w=2000" alt="React Image" />
            <div className='Images'> 
                <h3>Julie Taylor</h3>
                <h4>VP of Marketing</h4>
            </div>
        </ul>
        <ul>
            <img src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58483.jpg" alt="React Image" />
            <div className='Images'>
                <h3>Eugese Lee</h3>
                <h4>CFO</h4>
            </div>
        </ul>
        <ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmwLJmlH3zjO6Adannsq2VyfXCUmT7OMxpvpYvBTqUOHgoW0IWsy6v2dLefjYvl9UqHuI&usqp=CAU" alt="React Image" />
            <div className='Images'>
                <h3>Ana Williams</h3>
                <h4>VP of Sales</h4>
            </div>
        </ul>
    </div>
    )    
}
    
    export default EmployeeListItem;