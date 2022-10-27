const { readDirSync } = require("fs");

module.exports = (client) => {
  client.handleComponents = async () => {
    const componentFolders = readDirSync(`./src/components`);
    for (const folder of componentFolders) {
      const componentFiles = readDirSync(`./src/components/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      const { buttons } = client;

      switch (folder) {
        case "buttons":
            for ( const file of componentFiles) {
                const button = require(`../../components/${folder}/${file}`);
                buttons.set(button.data.name, button);
            }
            
            break;
      
        default:
            break;
      }
    }
  };
};