import HPHeader from "../components/HPHeader";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
// import EmployeeListItem from "../components/EmployeeListItem";

function HomePage() {
    return (
        <div className="HomePage">
            <HPHeader />
            <SearchBar />
            <EmployeeList />
            
        </div>
    )

}


  export default HomePage;