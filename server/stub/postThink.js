
const posts = [
    {
        id: 1,
        thumbnail: '/images/works/1.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution',
        slug:''
    },
    {
        id: 2,
        thumbnail: '/images/works/2.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 3,
        thumbnail: '/images/works/3.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 4,
        thumbnail: '/images/works/4.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 5,
        thumbnail: '/images/works/5.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 6,
        thumbnail: '/images/works/6.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 7,
        thumbnail: '/images/works/7.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 8,
        thumbnail: '/images/works/8.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 9,
        thumbnail: '/images/works/9.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
    {
        id: 10,
        thumbnail: '/images/works/10.jpg',
        title: 'UP & UNDER',
        catagory: 'Execution'
    },
]
module.exports.getPostById = id => posts[id-1];