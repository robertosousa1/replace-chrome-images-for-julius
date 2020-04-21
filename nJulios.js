//nVampeta 
(function ($) {

  var self = $.nVampeta = new function () { };

  $.extend(self, {

      nJuliusBackgrounds: [
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/04.png'
      ],

      nJuliusImgs: [
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/01.jpg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/02.jpeg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/03.jpeg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/04.png',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/05.jpg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/06.jpg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/07.jpg',
          'https://raw.githubusercontent.com/robertosousa1/replace-chrome-images-for-julius/master/imgs/08.jpg',
      ],

      handleImages: function (lstImgs, time) {
          $.each($('img'), function (i, item) {
              if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                  var h = $(item).height();
                  var w = $(item).width();

                  if (h > 0 && w > 0) {
                      $(item).css('width', w + 'px').css('height', h + 'px');
                      $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                  }
                  else {
                      $(item).load(function () {
                          if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                              var h = $(item).height();
                              var w = $(item).width();
                              $(item).css('width', w + 'px').css('height', h + 'px');
                              $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                          }
                      });
                  }
              }
          });

          if (time > 0) {
              setTimeout(function () { self.handleImages(lstImgs, time); }, time);
          }
      },

      handleLogo: function (bgImgs, time) {
          $backgroundImages = $(
              '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
              '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
              '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
              '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
          )
              .filter(function () {
                  backgroundImg = $(this).css('background-image');
                  return backgroundImg && backgroundImg != 'none';
              }
              );

          $backgroundImages.each(function (i, item) {
              $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
              $(item).css('background-position', '0 0');
              $(item).css('background-repeat', 'no-repeat');
              $(item).css('background-size', 'contain');
          });
      }
  });

  $(function () {
      self.handleImages(self.nJuliusImgs, 3000);
      self.handleLogo(self.nJuliusBackgrounds, 3000);
  });
})(jQuery);