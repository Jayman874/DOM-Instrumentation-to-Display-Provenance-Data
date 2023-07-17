const logger = {}

logger.addScripts = function (...args) {
  return {
    before() {
      for (i = 0; i < args[0].scripts.length; i++){
        const ast = esprima.parse(args[0].scripts[i].innerText);
        console.log(JSON.stringify(ast, null, 2));
        if (ast.body.length > 0 && ast.body[0].body != undefined){
          for (j = 0; j < ast.body[0].body.body.length; j++){
            if (ast.body[0].body.body[j].type == 'VariableDeclaration'){
              if (ast.body[0].body.body[j].declarations[0].init.callee.name == 'XMLHttpRequest'){
                //console.log(ast.body[0].body.body[j].declarations[0].id.name);
              }
            }
          }
        }
      }
    }
  }
}