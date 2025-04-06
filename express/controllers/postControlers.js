// postControllers.js

// working with json
//pretend like this is a db

let posts = [
    {
        "id" = "1",
        "title" = "Senior Vue Developer",
        "type" = "Full-Time",
        "description" = "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
        "location" = "Boston, MA",
        "salary" = "$70K - $80K",
        "company" = {
            "name" = "NewTek Solutions",
            "description" = "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
            "contactEmail" = "contact@teksolutions.com",
            "contactPhone" = "555-555-5555"
        }
    },
    {
        "id" = "2",
        "title" = "Front-End Engineer (Vue)",
        "type" = "Full-Time",
        "description" = "Join our team as a Front-End Developer in sunny Miami, FL. We are looking for a motivated individual with a passion for crafting beautiful and responsive web applications. Experience with UI/UX design principles and a strong attention to detail are highly desirable.",
        "location" = "Miami, FL",
        "salary" = "$70K - $80K",
        "company" = {
            "name" = "Veneer Solutions",
            "description" = "Veneer Solutions is a creative agency specializing in digital design and development. Our team is dedicated to pushing the boundaries of creativity and innovation to deliver exceptional results for our clients.",
            "contactEmail" = "contact@loremipsum.com",
            "contactPhone" = "555-555-5555"
        }
    },
    {
        "id" = "3",
        "title" = "Vue.js Developer",
        "type" = "Full-Time",
        "description" = "Are you passionate about front-end development? Join our team in vibrant Brooklyn, NY, and work on exciting projects that make a difference. We offer competitive compensation and a collaborative work environment where your ideas are valued.",
        "location" = "Brooklyn, NY",
        "salary" = "$70K - $80K",
        "company" = {
            "name" = "Dolor Cloud",
            "description" = "Dolor Cloud is a leading technology company specializing in digital solutions for businesses of all sizes. With a focus on innovation and customer satisfaction, we are committed to delivering cutting-edge products and services.",
            "contactEmail" = "contact@dolorsitamet.com",
            "contactPhone" = "555-555-5555"
        }
    },
    {
        "id" = "4",
        "title" = "Vue Front-End Developer",
        "type" = "Part-Time",
        "description" = "Join our team as a Part-Time Front-End Developer in beautiful Pheonix, AZ. We are looking for a self-motivated individual with a passion for creating engaging user experiences. This position offers flexible hours and the opportunity to work remotely.",
        "location" = "Pheonix, AZ",
        "salary" = "$60K - $70K",
        "company" = {
            "name" = "Alpha Elite",
            "description" = "Alpha Elite is a dynamic startup specializing in digital marketing and web development. We are committed to fostering a diverse and inclusive workplace where creativity and innovation thrive.",
            "contactEmail" = "contact@adipisicingelit.com",
            "contactPhone" = "555-555-5555"
        }
    },
    {
        "id" = "5",
        "title" = "Full Stack Vue Developer",
        "type" = "Full-Time",
        "description" = "Exciting opportunity for a Full-Time Front-End Developer in bustling Atlanta, GA. We are seeking a talented individual with a passion for building elegant and scalable web applications. Join our team and make an impact!",
        "location" = "Atlanta, GA",
        "salary" = "$90K - $100K",
        "company" = {
            "name" = "Browning Technologies",
            "description" = "Browning Technologies is a rapidly growing technology company specializing in e-commerce solutions. We offer a dynamic and collaborative work environment where employees are encouraged to think creatively and innovate.",
            "contactEmail" = "contact@consecteturadipisicing.com",
            "contactPhone" = "555-555-5555"
        }
    },
    {
        "id" = "6",
        "title" = "Vue Native Developer",
        "type" = "Full-Time",
        "description" = "Join our team as a Front-End Developer in beautiful Portland, OR. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
        "location" = "Portland, OR",
        "salary" = "$100K - $110K",
        "company" = {
            "name" = "Port Solutions INC",
            "description" = "Port Solutions is a leading technology company specializing in software development and digital marketing. We are committed to providing our clients with cutting-edge solutions and our employees with a supportive and rewarding work environment.",
            "contactEmail" = "contact@ipsumlorem.com",
            "contactPhone" = "555-555-5555"
        }
    }

]


// @desc Get all posts
//@route Get /api/posts
export const getPosts = (req, res) => {

    //you can use res.send but use res.json

    //dealing with query strings
    const limit = parseInt(req.query.limit)

    if (!isNaN(limit) && limit > 0) {
        res.status(200).json(posts.slice(0, limit))

    } else {
        res.json(posts)
    }

    // console.log(req.query);
}

// @desc Get single posts
//@route Get /api/posts/ =id
export const getPost = (req, res, next) => {
    //you can use res.send but use res.json

    const id = parseInt(req.params.id)

    //id becomes a string
    console.log(typeof (req.params.id));
    //

    const post = posts.find((post) => post.id == id)

    if (!post) {
        const error = new Error(` A Post with the id of ${id} not found`)
        error.status = 404
        return next(error)
    }
    res.status(200).json(post)
}

// @desc Edit posts
//@route Put /api/posts/ =id
    export const editPost = (req, res, next) => {
        //
        const id = parseInt(req.params.id)
        const post = posts.find((post) => post.id == id)

        if (!post) {
            const error = new Error(` A Post with the id of ${id} not found`)
            error.status = 404
            return next(error)
        }
            post.title = req.body.title;
            post.type = req.body.type;
            post.description = req.body.description;
            post.location = req.body.location;
            post.salary = req.body.salary;
            post.company.name = req.body.company.name;
            post.company.description = req.body.company.description;
            post.company.contactEmail = req.body.company.contactEmail;
            post.company.contactPhone = req.body.company.contactPhone;
            res.status(200).json(post)
    }

// @desc delete a post
//@route delete /api/posts/ =id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id)
    const post = posts.find((post) => post.id == id)

    if (!post) {
        const error = new Error(` A Post with the id of ${id} not found`)
        error.status = 404
        return next(error)
    }
    posts = posts.filter((post) => post.id != id)
    res.status(200).json(post)
    console.log(posts);
}

// @desc Create a post
//@route Post /api/posts

 export const createPost = (req, res, next) => {

    const newPost = {
        id = posts.length + 1, // Still using this for now, but remember the earlier discussion
        title = req.body.title,
        type = req.body.type,
        description = req.body.description,
        location = req.body.location,
        salary = req.body.salary,
        company = {
            name = req.body.company.name,
            description = req.body.company.description,
            contactEmail = req.body.company.contactEmail,
            contactPhone = req.body.company.contactPhone,
        },
    };

    if (!newPost.title) {
        const error = new Error('No title');
        error.status = 400;
        return next(error);
    } else {
        posts.push(newPost);
        res.status(201).json(newPost); // Send the newly created job object in the response
        console.log(newPost);
    }

    
    // const newPost ={
    //   id  = posts.length+1,
    //   title  = req.body.title
    // }

    // if (!newPost.title) {
    //   const error = new Error('No title')
    //     error.status= 400
    //     return next(error)
    // }else{
    //   posts.push(newPost)
    //   res.status(201).json('Created')
    //   console.log(newPost);
      
    // }
}