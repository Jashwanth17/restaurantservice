const { createCompany, getCompanyById, updateCompany, deleteCompany } = require('../../database/models/company');

const addCompany = async (data) => {
    return await createCompany(data);
};

const getCompany = async (id) => {
    return await getCompanyById(id);
};

const editCompany = async (id, data) => {
    return await updateCompany(id, data);
};

const removeCompany = async (id) => {
    return await deleteCompany(id);
};

module.exports = {
    addCompany,
    getCompany,
    editCompany,
    removeCompany,
};
