
  /**
   * Parse component settings into Handosntable-compatible settings.
   */
 export function getSettings(properties){
    let newSettings = {};

    if (properties.settings) {
      let settings = properties.settings;
      for (const key in settings) {
        if (settings.hasOwnProperty(key)) {
          newSettings[key] = settings[key];
        }
      }
    }

    for (const key in properties) {
      if (key !== 'settings' && properties.hasOwnProperty(key)) {
        newSettings[key] = properties[key];
      }
    }
    return newSettings;
  }
