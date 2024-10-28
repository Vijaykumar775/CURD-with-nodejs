import Student from "../model/studentSchema.js"

const readController = async (req, res) => {
    try {
        let stuInfo = await Student.find({})
        res.render("read.ejs", { stuInfo })
    } catch (error) {
        console.log(error)
    }
}

export { readController };