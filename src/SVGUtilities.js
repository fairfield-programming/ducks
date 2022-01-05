function stripParentTags(input) {

    // Set Output to Input
    let output = input; 

    // Cut Out Unnecessary Stuff
    output = output.replace(/<svg[\sa-zA-Z0-9\=\"\:\/\.]*>/g, "");
    output = output.replace(/<\/svg>/g, "");
    
    // Return the Trimmed Output
    return output.trim();

}

module.exports = {
    stripParentTags
};