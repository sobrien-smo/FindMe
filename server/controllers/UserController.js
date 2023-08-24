const User =require ("../models/UserModel");
const jwt = require ('jsonwebtoken');
const bcrypt = require("bcrypt");

 export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        if (user) {
            const { password, ...otherDetails } = user._doc;
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("No user found");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

 export const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        users = users.map((user) => {
            const { password, ...otherDetails } = user._doc
            return otherDetails
        })
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
};

 export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { ID, currentUserAdmin, password } = req.body;
    if (id === ID) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
            const user = await User.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            const token = jwt.sign(
                { username: user.username, id: user.ID },
                process.env.JWTKEY,
                { expiresIn: "1h" }
            );
            console.log({ user, token })
            res.status(200).json({ user, token });
        } catch (error) {
            console.log("Error")
            res.status(500).json(error);
        }
    } else {
        res
            .status(403)
            .json("Access Denied.");
    }
};

 export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdmin } = req.body;
    if (currentUserId == id || currentUserAdmin) {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User Deleted");
        } catch (error) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("User was not deleted, try again");
    }
};

export const followUser = async (req, res) => {
    const id = req.params.id;
    const { ID } = req.body;
    console.log(id, ID)
    if (ID == id) {
        res.status(403).json("Something went wrong");
    } else {
        try {
            const followUser = await User.findById(id);
            const followingUser = await User.findById(ID);

            if (!followUser.followers.includes(ID)) {
                await followUser.updateOne({ $push: { followers: ID } });
                await followingUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed");
            } else {
                res.status(403).json("Already following");
            }
        } catch (error) {
            console.log(error)
            res.status(500).json(error);
        }
    }
};

 export const unfollowUser = async (req, res) => {
    const id = req.params.id;
    const { ID } = req.body;

    if (ID === id) {
        res.status(403).json("Something went wrong")
    }
    else {
        try {
            const unFollowUser = await User.findById(id)
            const unFollowingUser = await User.findById(ID)


            if (unFollowUser.followers.includes(_id)) {
                await unFollowUser.updateOne({ $pull: { followers: ID } })
                await unFollowingUser.updateOne({ $pull: { following: id } })
                res.status(200).json("User unfollowed")
            }
            else {
                res.status(403).json("You are not following this User")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    };
  
};
