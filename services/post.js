const Post = require('../models/Post');

async function createPost(post) {
    const result = new Post(post);
    await result.save();

    return result;
}

async function getPosts() {
    // or .lean();
    return Post.find({});
}

async function getPostById(id) {
    return Post.findById(id).populate('author', 'firstName lastName');
}

async function updatePost(id, post) {
    const existing = await Post.findById(id);

    existing.title = post.title;
    existing.keyword = post.keyword;
    existing.location = post.location;
    existing.date = post.date;
    existing.image = post.image;
    existing.description = post.description;

    await existing.save();
}

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost
}