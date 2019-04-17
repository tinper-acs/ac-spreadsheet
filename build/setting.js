'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSettings = getSettings;

/**
 * Parse component settings into Handosntable-compatible settings.
 */
function getSettings(properties) {
  var newSettings = {};

  if (properties.settings) {
    var settings = properties.settings;
    for (var key in settings) {
      if (settings.hasOwnProperty(key)) {
        newSettings[key] = settings[key];
      }
    }
  }

  for (var _key in properties) {
    if (_key !== 'settings' && properties.hasOwnProperty(_key)) {
      newSettings[_key] = properties[_key];
    }
  }
  return newSettings;
}