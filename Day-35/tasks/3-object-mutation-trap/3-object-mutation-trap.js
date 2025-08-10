console.log(`✅ 3. Object Mutation Trap\n
  
  const config = {
    appName: "CoolApp",
    version: "1.0",
  };

  function updateConfig(newConfig) {
    config = { ...config, ...newConfig };
  }

  updateConfig({ version: "2.0" });


- Error: Assignment to constant variable.
- Goal: Fix the error without changing const to let, and apply a clean way to update nested configs.
  
`);
console.log(`Ans: ✔ Clean fix
  
   // Clean fix:
  const config = {
    appName: "CoolApp",
    version: "1.0",
  };

  function updateConfig(newConfig) {
    Object.assign(config, newConfig);
  }

  updateConfig({ version: "2.0" });

  console.log(config);

\n`);
{
  // Clean fix:
  const config = {
    appName: "CoolApp",
    version: "1.0",
  };

  function updateConfig(newConfig) {
    Object.assign(config, newConfig);
  }

  updateConfig({ version: "2.0" });

  console.log(config);
}

console.log(`Ans: ✔ Clean fix with updated nested config \n`)
{
  function deepMerge(target, source) {
    for (const key in source) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {
        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  const config = {
    appName: "CoolApp",
    version: "1.0",
    settings: {
      theme: "light",
      notifications: true,
    },
  };

  function updateConfig(newConfig) {
    deepMerge(config, newConfig);
  }

  updateConfig({
    version: "2.0",
    settings: {
      theme: "dark",
    },
  });

  console.log(config);
  // Output: 
  /*
    {
      appName: "CoolApp",
      version: "2.0",
      settings: {
        theme: "dark",
        notifications: true
      }
    }
  */

}

  