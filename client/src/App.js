import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Main from "./components/Main";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Login from "./components/Login";
import axios from "axios";
import TestExplore from "./components/Explore/TestExplore"
import UsersAndTopics from "./components/UsersOrTopics/UsersOrTopics";
import DummyProfile from './components/DummyProfiles/dummyProfile';
import DummyProfile2 from './components/DummyProfiles/dummyProfile2';
import DummyProfile3 from './components/DummyProfiles/dummyProfile3';
import DummyProfile4 from './components/DummyProfiles/dummyProfile4';
import DummyPosts from './components/Explore/DPosts/DPosts';
import DProfile from './components/Explore/DProfiles/DProfiles';
import Explore from './components/Explore/Explore'
import personData from "./Data/JSON/person.json";
import commentsData from "./Data/JSON/comments.json";
import postData from "./Data/JSON/posts.json";
//import PostDetails from './components/PostDetails/PostDetails';
// import Navbar from './components/Navbar/Navbar';
import "./App.css";

//users
//posts
//keep both together
//


function App() {
	const user = localStorage.getItem("token");
	const [people, setPeople] = useState([]);
	const [posts, setPosts] = useState([]);
	const [comments, setComments] = useState([]);
	const [selectedPerson, setSelectedPerson] = useState();


	useEffect(() => {
		//getData();
		setPeople(personData);
		setPosts(postData);
		setComments(commentsData);
	}, []);

	const onSelectedPerson = (person) => {
		setSelectedPerson(person);
	}

	const clearSelectedPerson = () => {
		setSelectedPerson(null);
	}
	// const getData = () => {
	// 	//var url = `https://randomuser.me/api/?results=500`;
	// 	var url = 'http://localhost:4000';
	// 	fetch(url)
	// 		.then(r => r.json())
	// 		.then(data => {
	// 			console.log("getData setting people")
	// 			console.log(data);

	// 			setPeople(data.results);
	// 			// setFilteredPeople(data.results);
	// 		}).catch(e => console.log(e));
	// }

	// const user = JSON.parse(localStorage.getItem('profile'));
	return (
		<div className="App">
			<div className=''>

			</div>
			{/* <section>
				{
					selectedPerson ?
						<DProfile person={selectedPerson} /> :
						<DummyPosts people={people} onSelectedPerson={onSelectedPerson} />
				}
			</section>
			<button onClick={() => clearSelectedPerson()}>Back</button> */}
			{/* <div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "80%", left: "-8rem" }}></div> */}
			<BrowserRouter>
				<Routes>
					{/* user && */}
					{<Route path="/testExplore" exact element={<TestExplore />} />}
					{<Route path="/main" exact element={<Main />} />}
					{/* <Route path="/posts" exact component={Middle} /> */}
					<Route path="/dprofile" exact element={<DProfile />} />
					

					<Route path="/dposts" exact element={<DummyPosts />} />

					<Route path="/dummyProfile" exact element={<DummyProfile/>} />
					<Route path="/dummyProfile2" exact element={<DummyProfile2 />} />
					<Route path="/dummyProfile3" exact element={<DummyProfile3 />} />
					<Route path="/dummyProfile4" exact element={<DummyProfile4 />} />

					<Route path="/explore" exact element={<Explore />} />
					{/* <Route path="/posts/search" exact component={Middle} /> */}
					<Route path="/signup" exact element={<Signup />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/feed" exact element={<Feed />} />
					<Route path="/dposts/:id" exact element={<DummyPosts />} />
					{/* <Route path={['/user/:name', '/topics/:name']} component={UsersAndTopics} /> */}
					<Route path="/" element={<Navigate replace to="/login" />} />
				</Routes>
			</BrowserRouter>


		</div>
	);
}

export default App