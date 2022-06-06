import { connect } from "react-redux";
import { add, remove, getPeople } from '../rtk-store/people';

const People = props => {
    function getPeopleData() {
        props.getPeople();
    }

    return (
        <>
            <button onClick={getPeopleData} > Get People Data</button>
            <ul>
                {props.people.map((person, index) => {
                    return(
                        <li key={index} onClick={()=>props.remove(person)}>
                            {person}
                        </li>
                    )
                })}
            </ul>
        </>

    )
}

const mapStateToProps = state => ({
    people: state.people
})

const mapDispatchToProps = { add, remove, getPeople };

export default connect(mapStateToProps, mapDispatchToProps)(People);

