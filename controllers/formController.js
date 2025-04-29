import Form from "../models/formModel.js";

export const addForm = async (req, res) => {
  try {
    const data = req.body;
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Please fill all the fields",
        success: false,
      });
    }

    const form = new Form({
      name,
      email,
      message,
    });
    await form.save();

    return res.json({
      message: "Form submitted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    return res.json({
      message: "Forms fetched successfully",
      success: true,
      data: forms,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getSingleForm = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await Form.findById(id);
    return res.json({
      message: "Form fetched successfully",
      success: true,
      data: form,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
