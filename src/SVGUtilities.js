function stripParentTags(input) {

    // Set Output to Input
    let output = input; 

    // Cut Out Unnecessary Stuff
    output = output.replace(/<svg[\sa-zA-Z0-9\=\"\:\/\.]*>/g, "");
    output = output.replace(/<\/svg>/g, "");
    
    // Return the Trimmed Output
    return output.trim();

}

function getItemData(type, number) {

    // Get the File Path
    const itemPath = path.join(
      __dirname,
      "../../../",
      "ducks/",
      type,
      `/${number}.svg`,
    );
  
    // Check if File Exists
    if (!fs.existsSync(itemPath)) return [];
  
    // Get the File Data
    const itemData = fs.readFileSync(itemPath, "ascii");
    const strippedData = stripSVGData(itemData);
  
    // Return the String
    return strippedData.split("\n");

  }