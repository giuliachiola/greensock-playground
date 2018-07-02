module.exports = {

  patternlab: {
    // command: "php <%= corePath %>/builder.php -gp"
    command: "php <%= corePath %>/console -gp"
  },

  patternlab_exp: {
    // command: "php <%= corePath %>/builder.php -gp"
    command: "php <%= corePath %>/console --export"
  },

  // icons: {
  // 	command: "php build_icons_data.php <%= srcPath %>/_icons <%= srcPath %>/_data/_icons.json"
  // },

  killLab: {
  	command: "php killLab.php <%= dstPath %>"
  },
};
