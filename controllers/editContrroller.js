import Student from "../model/studentSchema.js";
const editController = async (req, res) => {
    try {
        let { id } = req.params;
        let stuInfo = await Student.findById(id);
        res.render("edit.ejs", { stuInfo });
    } catch (error) {
        console.log(error)
    }
}

const updateController = async (req, res) => {

    try {
        let { id } = req.params;
        let UpdatedInfo = await Student.findByIdAndUpdate(id, req.body);
        res.redirect('/read');
    } catch (error) {
        console.log(error);
    }

}


const deleteController = async (req, res) => {
    let { id } = req.params;
    let deleted = await Student.findByIdAndDelete(id);
    res.redirect("/read")
}

export { editController, updateController, deleteController };