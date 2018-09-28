/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  'use strict';

  Drupal.AudiofieldProjekktor = {};

  Drupal.AudiofieldProjekktor.generate = function (context, file, settings) {
    $.each($(context).find('#' + file).once('generate-projekktor'), function (index, item) {
      projekktor($(item), {
        debug: false,
        playerFlashMP4: settings.swfpath,
        playerFlashMP3: settings.swfpath,
        enableFullscreen: false,
        streamType: 'http',
        controls: true,
        thereCanBeOnlyOne: true,
        volume: settings.volume,
        autoplay: !!settings.autoplay,
        plugin_display: {}
      }, {});
    });
  };

  Drupal.behaviors.audiofieldprojekktor = {
    attach: function attach(context, settings) {
      jQuery(function () {
        $.each(settings.audiofieldprojekktor, function (key, settingEntry) {
          $.each(settingEntry.files, function (key2, file) {
            Drupal.AudiofieldProjekktor.generate(context, file, settingEntry);
          });
        });
      });
    }
  };
})(jQuery, Drupal);