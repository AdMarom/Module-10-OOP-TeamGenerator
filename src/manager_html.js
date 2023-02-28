const ManagerHTML = (manager) => {
    return `
    <div id="manager_div"> 
    <p>Name: ${manager.getName()}</p>
    <p>Email: ${manager.getEmail()}</p>
    <p>Id: ${manager.getId()}</p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
    </div>
    `
}