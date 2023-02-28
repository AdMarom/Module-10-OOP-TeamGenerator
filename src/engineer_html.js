const EngineerHTML = (engineer) => {
    return `
    <div id="engineer_div"> 
    <p>Name: ${engineer.getName()}</p>
    <p>Email: ${engineer.getEmail()}</p>
    <p>Id: ${engineer.getId()}</p>
    <p>GitHub: ${engineer.getGitHub()}</p>
    </div>
    `
}