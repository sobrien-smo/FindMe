import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img7 from "../images/image7.jpg";
import img6 from "../images/image6.jpg";
import art1 from "../images/art1.jpg";
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpeg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";
import art9 from "../images/art8.jpg";

import jr from "../images/jr.jpg";
import image9 from "../images/image9.png";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";
import event from "../images/event.png";
import building from "../images/building.jpg";
import bg2 from "../images/bg2.jpg";
import nasa from "../images/nasa.jpg";
import promotion from "../images/promotion.jpg";

import people from "../images/people.jpg";
import images from "../images/images.jpg";
import pit from "../images/pit.jpg";
import sd from "../images/sd.jpg";
import sd1 from "../images/sd1.jpg";
import sd2 from "../images/sd2.jpg";
import sd3 from "../images/sd3.jpg";
import sd4 from "../images/sd4.jpg";
import sd5 from "../images/sd5.jpg";
import sdp from "../images/sdp.jpg";
import sp from "../images/sp.jpg";

import setdesign from "../images/setdesign.jpg";
import theater1 from "../images/theater1.jpg";
import theater2 from "../images/theater1.jpg";
import theater3 from "../images/theater1.jpg";
import theater4 from "../images/theater1.jpg";
import theater5 from "../images/theater1.jpg";
import theater6 from "../images/theater1.jpg";
import people2 from "../images/people2.jpg";
import people3 from "../images/peple3.png";

export const DummyFollowers = [
  { id:1,
    name: "Andrew Thomas", img: img1, posts: [
      { id: 1, likes: 4418, commentNum: 2217, topics: "Cinema/Theater", caption:'New things coming soon!', postPhoto: theater6, comments: ["Have you considered contracting in the San Diego area?", "I'm attending a summit in the NYC area I think you would be interested in. I'll dm you the details.", "Would you consider working remotely?", "Its a pleasure working with you!"] },
      { id: 2, likes: 9926, commentNum: 13802, topics: "Cinema/Theater", caption:"This a great opportunity to make valuable connections! Who's going?", postPhoto: event, comments: [] },
      { id: 3, likes: 10004, commentNum: 6023, topics: "Writing/Literature",  caption:'My latest passion project needs an editor- any takers?', postPhoto: image10, comments: ["Impressive as always.", "I worked with a great editing/publishing team out of the NYC area last fall, I'll dm details.", "I look forward to working with you.", "Exciting!"] },
      { id: 4, likes: 15103, commentNum: 12164, topics: "Cinema/Theater",caption:'Updated schedule!', postPhoto: event, comments: ["Working hard or hardly working?", "Its a pleasure working with you!", "My team needs to see this.", "Can I dm you for a consultation?"] },
      { id: 5, likes: 7610, commentNum: 4576, topics: "Writing/Literature", caption:'Welcoming a new team tomorrow!', postPhoto: people3, comments: ["This reminds me I found the event you emailed me about! I'll forward the details asap!", "My team needs to see this.", "Working hard or hardly working?", "I'm attending a summit in the NYC area I think you would be interested in. I'll dm you the details."] },
      { id: 6, likes: 4089, commentNum: 4079, topics: "Writing/Literature",  caption:'So grateful to my team!', postPhoto: theater2, comments: ["My team needs to see this.", "Can't wait for our collab!", "Exciting!", "Have you considered contracting in the San Diego area?"] },
      { id: 7, likes: 483, commentNum: 19748, topics: "Cinema/Theater",  caption:'My current project-', postPhoto: theater3, comments: ["Are you available for a quick one-on one?", "I would love to learn more!", "Impressive as always.", "Your new team is lucky to have you!"] },
      { id: 8, likes: 2093, commentNum: 1126, topics: "Cinema/Theater",  caption:'On my way to our first day!', postPhoto: theater1, comments: ["Can't wait for our collab!", "I would love to learn more!", "My team needs to see this.", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },
      { id: 9, likes: 14737, commentNum: 11161, topics: "Music",  caption:'One of my favorite parts of any production is the music!', postPhoto: pit, comments: ["I'm attending a summit in the NYC area I think you would be interested in. I'll dm you the details.", "Are you available for a quick one-on one?", "Its a pleasure working with you!", "I agree!"] },
      { id: 10, likes: 13949, commentNum: 16659, topics: "Art",  caption:'My team and I are looking for a talented Set Designer- this is our current project', postPhoto: setdesign, comments: ["This is a solid start.", "In our last production last summer Travis was very helpful- I'll dm you is contact info", "Exciting!", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },

    ], education: "The Julliard School", experience: "D'Amore Inc", bio:"The world is a stage.", bg: "theater1", followers: 54511, following: 3212, currentPosition: "Producer", currentEmployer: "Hartman CO."
  },
  { id:2, name: "Teresa Summers", img: img7, posts: [
    { id: 1, likes: 442218, commentNum: 222217, topics: "Computer Science", caption:'New things coming soon!', postPhoto: building, comments: ["Have you considered contracting work?", "Would you consider working remotely?", "Its a pleasure working with you!"] },
    { id: 2, likes: 69326, commentNum: 134802, topics: "Computer Science", caption:"This a great opportunity to make valuable connections! Who's going?", postPhoto: event, comments: ["My coworkers need to see this.", "Dropping this link to my team!", "Thanks for the info!"] },
    { id: 3, likes: 1002644, commentNum: 60423, topics: "Computer Science",  caption:'New promotion!', postPhoto: promotion, comments: ["Impressive as always.", "Your team is lucky to have you!", "I look forward to working with you.", "Exciting!"] },
    { id: 4, likes: 11103, commentNum: 121644, topics: "Computer Science",caption:'Updated schedule!', postPhoto: event, comments: ["Working hard or hardly working?", "Its a pleasure working with you!", "Can I dm you for a consultation?"] },
    { id: 5, likes: 76190, commentNum: 458676, topics: "Computer Science", caption:'Welcoming a new team tomorrow!', people2: event, comments: ["This reminds me I found the event you emailed me about! I'll forward the details asap!", "Working hard or hardly working?"] },
    { id: 6, likes: 420089, commentNum: 42079, topics: "Computer Science",  caption:'So grateful to my team!', postPhoto: people3, comments: [ "Can't wait for our collab!", "Exciting!", "They are lucky to have you, I enjoyed working with you."] },
    { id: 7, likes: 48113, commentNum: 197148, topics: "Computer Science",  caption:'My current project-', postPhoto: image9, comments: ["Are you available for a quick one-on one?", "I would love to learn more!", "Impressive as always.", "Your new team is lucky to have you!"] },
    { id: 8, likes: 209763, commentNum: 11026, topics: "Computer Science",  caption:'On my way to our first day!', postPhoto: image11, comments: ["Can't wait for our an update!", "I would love to learn more!"] },
    { id: 9, likes: 1423737, commentNum: 13161, topics: "Computer Science",  caption:'One of my favorite parts of my job is the people I work with.', postPhoto: people2, comments: ["I'll dm you the details for the next steps of our collab.", "Are you available for a quick one-on one?", "Its a pleasure working with you!", "I agree!"] },
    { id: 10, likes: 133949, commentNum: 166459, topics: "Computer Science",  caption:'My team and I are looking for a junior data analyst- who is up for the challenge?', postPhoto: jr, comments: ["DMing you details on my previous experience.", "Exciting!", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },

  ], education: "Neumont College of Computer Science", experience: "Extern || AdvancedMD", bg: nasa, bio: "Data-driven.", followers: 85490, following: 765, currentPosition: "Senior Systems Administrator", currentEmployer: "NASA" },
  { id:3, name: "Keith Brenning", img: img2, posts: [
    { id: 1, likes: 448, commentNum: 2017, topics: "Art", caption:'New things coming soon!', postPhoto: art1, comments: ["Have you considered contracting in the San Diego area?", "I'm attending a summit in the NYC area I think you would be interested in. I'll dm you the details.", "Would you consider working remotely?", "Its a pleasure working with you!"] },
    { id: 2, likes: 926, commentNum: 802, topics: "Art", caption:"This a great opportunity to make valuable connections! Who's going?", postPhoto: event, comments: [] },
    { id: 3, likes: 1004, commentNum: 6023, topics: "Art",  caption:'My latest passion project!', postPhoto: art2, comments: ["Impressive as always.", "I worked with a great photographer of the NYC area last fall, I'll dm details.", "I look forward to working with you.", "Exciting!"] },
    { id: 4, likes: 5103, commentNum: 1164, topics: "Art",caption:'Updated schedule!', postPhoto: event, comments: ["Working hard or hardly working?", "Its a pleasure working with you!", "My team needs to see this.", "Can I dm you for a consultation?"] },
    { id: 5, likes: 760, commentNum: 5976, topics: "Art", caption:'Welcoming a new collab tomorrow!', postPhoto: art9, comments: ["This reminds me I found the event you emailed me about! I'll forward the details asap!", "My team needs to see this.", "Working hard or hardly working?"] },
    { id: 6, likes: 489, commentNum: 4099, topics: "Art",  caption:'So grateful to my team!', postPhoto: people3, comments: ["My team needs to see this.", "Can't wait for our collab!", "Exciting!", "Have you considered contracting in the San Diego area?"] },
    { id: 7, likes: 4867, commentNum: 748, topics: "Art",  caption:'My current project-', postPhoto: art3, comments: ["Are you available for a quick one-on one?", "I would love to learn more!", "Impressive as always.", "Your new team is lucky to have you!"] },
    { id: 8, likes: 2093, commentNum: 1926, topics: "Art",  caption:'Found a new opportunity in Houston.', postPhoto: image11, comments: ["Can't wait for our collab!", "I would love to learn more!", "My team needs to see this.", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },
    { id: 9, likes: 1437, commentNum: 1061, topics: "Art",  caption:'One of my favorite parts of any project is seeing people react to it', postPhoto: people, comments: ["Are you available for a quick one-on one?", "Its a pleasure working with you!", "I agree!"] },
    { id: 10, likes: 1349, commentNum: 1659, topics: "Art",  caption:'This is my current project.', postPhoto: art5, comments: ["This is a solid start.", "Exciting!", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },

  ], education: "UCLA", experience: "", followers: 87632, following: 12845, bg: image11, bio:"Try new things" ,currentPosition: "Visual Artist", currentEmployer: "Mixed mediums"},
  { id:4, name: "Natasha Smith", img: img6, posts: [
    { id: 1, likes: 4248, commentNum: 2217, topics: "Spatial Design", caption:'New things coming soon!', postPhoto: sd1, comments: ["Have you considered contracting in the San Diego area?", "I'm attending a summit in the NYC area I think you would be interested in. I'll dm you the details.", "Would you consider working remotely?", "Its a pleasure working with you!"] },
    { id: 2, likes: 9216, commentNum: 8012, topics: "Spatial Design", caption:"This a great opportunity to make valuable connections! Who's going?", postPhoto: event, comments: [] },
    { id: 3, likes: 1024, commentNum: 6053, topics: "Spatial Design", caption:'My latest passion project!', postPhoto: sdp, comments: ["Impressive as always.", "I worked with a great photographer of the NYC area last fall, I'll dm details.", "I look forward to working with you.", "Exciting!"] },
    { id: 4, likes: 5153, commentNum: 1114, topics: "Spatial Design", caption:'Updated schedule!', postPhoto: sd4, comments: ["Working hard or hardly working?", "Its a pleasure working with you!", "My team needs to see this.", "Can I dm you for a consultation?"] },
    { id: 5, likes: 7612, commentNum: 5276, topics: "Spatial Design", caption: 'Welcoming a new collab tomorrow!', postPhoto: sd2, comments: ["This reminds me I found the event you emailed me about! I'll forward the details asap!", "My team needs to see this.", "Working hard or hardly working?"] },
    { id: 6, likes: 4826, commentNum: 4499, topics: "Spatial Design",  caption:'So grateful to my team!', postPhoto: people3, comments: ["My team needs to see this.", "Can't wait for our collab!", "Exciting!", "Have you considered contracting in the San Diego area?"] },
    { id: 7, likes: 4617, commentNum: 758, topics: "Spatial Design",  caption: 'An update on my current project-', postPhoto: sd5, comments: ["Are you available for a quick one-on one?", "I would love to learn more!", "Impressive as always.", "Your new team is lucky to have you!"] },
    { id: 8, likes: 2043, commentNum: 1546, topics: "Spatial Design",  caption:'I found a new opportunity in LA.', postPhoto: sd3, comments: ["Can't wait for our collab!", "I would love to learn more!", "My team needs to see this.", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },
    { id: 9, likes: 1417, commentNum: 1862, topics: "Spatial Design",  caption:'One of my favorite parts of any project is seeing people react to it', postPhoto: sp, comments: ["Are you available for a quick one-on one?", "Its a pleasure working with you!", "I agree!"] },
    { id: 10, likes: 1249, commentNum: 2653, topics: "Spatial Design",  caption:"Here's an update-", postPhoto: sd, comments: ["This is a solid start.", "Exciting!", "This reminds me I found the event you emailed me about! I'll forward the details asap!"] },

  ],  experience: "Jacobson LLC", education: "Stanford", followers: 12743, following: 4512, bio: "Noting yet.",bg: bg2, currentPosition: "Senior Architect", currentEmployer: "Boehm-Koss" },
];