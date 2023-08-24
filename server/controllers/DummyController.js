const fs = requires('fs');

//firstName, lastName, emial, password, followers, following, topics, bio, education, experience, current employer, current position
class DummyUser {
    constructor(firstName, lastName, email, password, followers, following, pfp, education, experience, topic, posts, comments, likes, currentEmployer, currentPosition) {
        this.firstName = firstName;
        this.lastname = lastName;
        this.email = email;
        this.password = password;

        this.pfp = pfp;
        this.followers = followers;
        this.following = following;
        this.bio = bio;
        this.education = education;
        this.experience = experience;

        this.currentPosition = currentPosition;
        this.currentEmployer = currentEmployer;
        this.postPhoto = postPhoto;
        this.createdAt = createdAt;
        this.caption = caption;
        this.like = likes;
        this.comments = comments;

        this.topic = topic;
        this.posts = posts
    }
}

exports.generator = {

    person: JSON.parse(fs.readFileSync(person.json)),
    post: JSON.parse(fs.readFileSync(posts.json)),
    comments: JSON.parse(fs.readFileSync(comments.json)),

    // firstName: person.first_name
    getPersonInfo: function () {
        for (i in person) {
            firstName = person[this.getRandomNumber(0, 999)].first_name;
            lastName = person.last_name[this.getRandomNumber(0, 999)];
            email = person.email[this.getRandomNumber(0, 999)];
            password = person.password[this.getRandomNumber(0, 999)];
            gender = person.gender[this.getRandomNumber(0, 999)];
     pfp = person.first_name[this.getRandomNumber(0, 999)];
            followers= person.followers[this.getRandomNumber(0, 999)];
            following =  person.following[this.getRandomNumber(0, 999)];
            bio = person.bio[this.getRandomNumber(0, 999)];
            education =person.education[this.getRandomNumber(0, 999)];
            experience= person.experience[this.getRandomNumber(0, 999)];
            currentEmployer= person.currentEmployer[this.getRandomNumber(0, 999)];
            currentPosition= person.currentPosition[this.getRandomNumber(0, 999)];
    postPhoto =person.first_name[this.getRandomNumber(0, 999)];
            createdAt =person.createdAt[this.getRandomNumber(0, 999)];
      //  caption = 
            likes =person.likes[this.getRandomNumber(0, 999)];
    
            topic =person.topic[this.getRandomNumber(0, 999)];
   
        }
    },
    getPostInfo: function() {
        posts =person.first_name[this.getRandomNumber(0, 999)];
    },
    getCommentInfo: function(){
        for (i in comments){
            comment1 = comments.comment1[this.getRandomNumber(0, 999)];
        }
        
    },
    
    getRandomPeople: function (count) {
        var results = [];
        for (var i = 0; i < count; i++) {
            results.push(this.getRandomPerson());
        }
        console.log(results);
        return results;
    },


    getRandomPerson: function () {
        var firstName = this.getGender(this.firstName);
        var lastName = this.getRandomEntryFromArray(this.lastNames);
        var username = this.getUsername(this.username);
        var pfp = this.getRandomEntryFromArray(this.pfps);

        return new Person(firstName, lastName,);
    },

    getPersonDetail: function () {
        var firstName = this.getGender(this.firstName);
        var lastName = this.getRandomEntryFromArray(this.lastNames);
        var username = this.getUsername(this.username);
        var address = this.getMultipleRandomEntriesFromArray(this.address);
        var gender = this.getGender(this.gender)
        var picture = this.getGender(this.picture);

        return new Person(firstName, lastName, email, password, followers, following, pfp, education, experience, topic, posts);
    },

    getRandomEntryFromArray: function (items) {
        return items[Math.floor(Math.random() * items.length)];
    },

    getMultipleRandomEntriesFromArray: function (items) {
        var howMany = Math.floor(Math.random() * items.length);
        if (howMany <= 0) howMany = 1;
        const shuffled = items.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, howMany);
    },

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getPersonPicture() {

    },
};