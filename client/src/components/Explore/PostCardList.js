
import { useEffect, useState } from 'react';
import PostCard from "../DummyProfiles/dummyProfiles";

function PostCardList({ people, onSelectedPerson}) {
    

    const [filteredPeople, setFilteredPeople] = useState([]); // The filtered list of people
    const [nameFilter, setNameFilter] = useState('');
    const [topicFilter, setTopicFilter] = useState('');
    

    useEffect(() => {
        setFilteredPeople(people);
    }, []);

    useEffect(() => { // This will fire whenever the state variables I mention change
        
        var tempPeople = people.filter((person) => {
            return person.first_name.toLowerCase().includes(nameFilter.toLowerCase()) ||
                person.last_name.toLowerCase().includes(nameFilter.toLowerCase()) 
                || person.topic.toLowerCase().includes(topicFilter.toLowerCase())
              
                
        }, []);

        // var tempPeople = people.filter((person) => {
        //     return person.gender.toLowerCase() === (genderFilter.toLowerCase())
        // });

        // var tempPeople = people.filter((person) => {
        //     return person.dob.age.toString() === (ageFilter)
        // });
        // var tempPeople = [];

        // people.forEach((person) => {
        
        //     if (person.name.first.toLowerCase().includes(nameFilter.toLowerCase()) ||
        //         person.name.last.toLowerCase().includes(nameFilter.toLowerCase())) {
        //         tempPeople.push(person);
        //     }
        //     else if (person.gender.toLowerCase() === genderFilter.toLowerCase()){
        //         tempPeople.push(person);
        //     }
        //     else if (person.dob.age === ageFilter){
        //         tempPeople.push(person);
        //     }
        // });

        setFilteredPeople(tempPeople);
    }, [nameFilter, topicFilter ]// This are the variables that will trigger htis useEffect
    );

    return (
        <div className="App">
            <div>
                <b>Filters</b>
                <div>
                    <div>
                        <label>Name: </label>
                        <input type='text' placeholder='name filter'
                            value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} />
                    </div>
                    <div>
                        <label>Topic: </label>
                        <input type='text' placeholder='topic filter'
                            value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} />
                    </div>
                    
                </div>
            </div>
            <br />
            {
                filteredPeople?.map((person, index) => (
//not using index
                    <PostCard key={person.id} person={person} onSelectedPerson={onSelectedPerson}/>
                ))
            }
        </div>
    );
}

export default PostCardList;