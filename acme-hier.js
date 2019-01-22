function showManagementStructure(users){

    // Initilize with the boss and then call a recursive show user
    const boss = users.find( (usr) => !usr.managerId);
    showUser(boss, users, 0)

}

function showUser(usr, users, level){

    // Log current user level
    console.log(`${new Array(level).fill('-').join('')} ${usr.name}`)
    // Get the reports
    const reports = users.filter( (rep) => rep.managerId === usr.id )
    if (reports.length){
        level++;
        reports.forEach(report => showUser(report, users, level));
        level--;
    }
}

module.exports = {showManagementStructure: showManagementStructure}
