/* put js filename link in <script> section at bottom of html file */

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      375, // scroll speed in ms //
      'linear'
    )
  })