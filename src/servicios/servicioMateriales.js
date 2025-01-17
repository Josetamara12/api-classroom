const { google } = require('googleapis');
const { oauth2Client } = require('./servicioAutenticacion');

// crear material 
const crearMaterial = async (courseId, courseWorkMaterial) => {
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    try {
        const material = await classroom.courses.courseWorkMaterials.create({
            courseId,
            requestBody: courseWorkMaterial,
        });
        return material.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    crearMaterial

};