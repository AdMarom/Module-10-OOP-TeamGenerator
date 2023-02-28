const InternHTML = (intern) => {
    return `
    <div id="intern_div"> 
    <p>Name: ${intern.getName()}</p>
    <p>Email: ${intern.getEmail()}</p>
    <p>Id: ${intern.getId()}</p>
    <p>School: ${intern.getSchool()}</p>
    </div>
    `
}