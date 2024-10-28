import Student from "../model/studentSchema.js";

const homeController = (req, res) => {
    res.render("index.ejs");
};

const createController = async (req, res) => {
    let { name, city, email, contact } = req.body;
    const studentInfo = new Student({
        name: name,
        city: city,
        email: email,
        contact: contact,
    });
    studentInfo.save().then(() => {
        console.log("saved Successfully")
    }).catch((err) => {
        console.log(err);
    });
    res.render('index.ejs');
}

export { homeController, createController };