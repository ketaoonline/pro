;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M831.174656 861.126656 193.420288 861.126656c-70.44608 0-127.536128-55.538688-127.536128-124.050432L65.88416 365.04064c0-68.458496 57.090048-123.968512 127.536128-123.968512l89.099264 0c18.939904-45.45536 64.667648-77.504512 118.189056-77.504512l223.19104 0c53.521408 0 99.2768 32.049152 118.21568 77.504512l89.058304 0c70.444032 0 127.592448 55.510016 127.592448 123.968512l0 372.035584C958.76608 805.586944 901.618688 861.126656 831.174656 861.126656L831.174656 861.126656zM512.304128 318.60224c-123.285504 0-223.21664 97.123328-223.21664 216.976384s99.93216 217.029632 223.21664 217.029632c123.25888 0 223.188992-97.176576 223.188992-217.029632S635.563008 318.60224 512.304128 318.60224L512.304128 318.60224zM512.304128 690.5856c-88.049664 0-159.42144-69.382144-159.42144-155.005952s71.371776-155.008 159.42144-155.008c88.049664 0 159.449088 69.383168 159.449088 155.008S600.354816 690.5856 512.304128 690.5856L512.304128 690.5856z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-saoyisao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.388584 542.953989 94.531783 542.953989c-17.705969 0-32.073777-14.366196-32.073777-32.066323 0-17.705244 14.367808-32.072463 32.073777-32.072463l833.855778 0c17.7336 0 32.073777 14.368242 32.073777 32.072463C960.461338 528.587793 946.122184 542.953989 928.388584 542.953989L928.388584 542.953989zM832.17237 927.802054 639.746082 927.802054c-17.7336 0-32.072754-14.33959-32.072754-32.073486 0-17.732873 14.339154-32.072463 32.072754-32.072463l192.426288 0c17.705969 0 32.073777-14.366196 32.073777-32.066323L864.246147 671.238724c0-17.733896 14.334037-32.073486 32.0748-32.073486 17.7336 0 32.067637 14.33959 32.067637 32.073486l0 160.351058C928.388584 884.631836 885.22069 927.802054 832.17237 927.802054L832.17237 927.802054zM351.099486 927.802054l-160.358652 0c-53.04218 0-96.209051-43.171242-96.209051-96.212272L94.531783 671.238724c0-17.733896 14.366784-32.073486 32.067637-32.073486 17.704946 0 32.073777 14.33959 32.073777 32.073486l0 160.351058c0 17.700127 14.397485 32.066323 32.067637 32.066323l160.358652 0c17.705969 0 32.073777 14.33959 32.073777 32.072463C383.173263 913.462464 368.805455 927.802054 351.099486 927.802054L351.099486 927.802054zM126.600444 382.602931c-17.700853 0-32.067637-14.367219-32.067637-32.066323L94.532807 190.18555c0-53.045123 43.167894-96.211249 96.209051-96.211249l160.358652 0c17.705969 0 32.073777 14.367219 32.073777 32.072463 0 17.699104-14.367808 32.066323-32.073777 32.066323l-160.358652 0c-17.670152 0-32.067637 14.402011-32.067637 32.072463L158.674221 350.536608C158.674221 368.236735 144.305389 382.602931 126.600444 382.602931L126.600444 382.602931zM896.320948 382.602931c-17.740763 0-32.0748-14.367219-32.0748-32.066323L864.246147 190.18555c0-17.671475-14.367808-32.072463-32.073777-32.072463L639.746082 158.113087c-17.7336 0-32.072754-14.367219-32.072754-32.066323 0-17.705244 14.339154-32.072463 32.072754-32.072463l192.426288 0c53.04832 0 96.216214 43.166125 96.216214 96.211249L928.388584 350.536608C928.388584 368.236735 914.054547 382.602931 896.320948 382.602931L896.320948 382.602931zM896.320948 382.602931"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontwohover" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928.103418 949.151291 97.987197 949.151291c-19.265786 0-30.919197-15.074324-33.595142-29.081339l-0.345877-1.810229 0-99.178837c0-11.245112 5.015224-20.158109 14.503319-25.774013 32.69361-19.346627 198.884676-117.955482 260.21858-159.419849 31.5516-21.332864 42.499953-48.324612 45.632293-69.721945-53.630455-52.346205-85.386716-134.385687-85.386716-221.769896 0-73.257467 21.803585-142.337799 61.392232-194.515159 19.644409-25.892717 42.644239-46.289256 68.359924-60.625776 27.108405-15.112186 55.978942-22.773679 85.812411-22.773679 29.823236 0 58.691727 7.662517 85.800132 22.773679 25.714661 14.335497 48.713468 34.733059 68.358901 60.625776 39.588647 52.178383 61.390185 121.258715 61.390185 194.515159 0 87.177502-31.646767 169.110559-85.083817 221.468021 3.040243 21.508873 13.833053 48.662303 45.161572 70.079078 60.626799 41.447994 224.978984 140.064013 257.310344 159.41064 9.400091 5.628184 14.367219 14.522762 14.367219 25.726941l0 99.158371-0.338714 1.789763C958.896748 934.055478 947.302689 949.151291 928.103418 949.151291L928.103418 949.151291zM102.997304 910.201188 922.933675 910.201188l0-86.165452c-41.119513-24.63405-195.651029-117.558439-254.710123-157.936055-51.413973-35.149545-61.496609-83.251076-62.928215-108.795868l-0.523933-9.342786 6.965645-6.248308c49.743938-44.61308 79.440283-119.122051 79.440283-199.314465 0-64.807005-18.989493-125.525901-53.470819-170.972976-33.264615-43.845601-76.994582-67.991534-123.126248-67.991534-46.14497 0-89.876983 24.145933-123.142621 67.991534-34.481326 45.447075-53.470819 106.165971-53.470819 170.972976 0 80.398098 29.813003 155.01247 79.749322 199.596897l7.02909 6.274914-0.557702 9.405207c-1.5104 25.477254-11.781324 73.447802-63.60155 108.481713-59.749826 40.395012-216.044498 133.331681-257.586636 157.943218L102.99935 910.201188 102.997304 910.201188z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangmu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64.303027 64.303538l0 895.392924 895.392924 0 0-895.392924L64.303027 64.303538zM890.819257 890.819768 133.178697 890.819768 133.178697 133.179208l757.64056 0L890.819257 890.819768z"  ></path>' +
    '' +
    '<path d="M236.493737 339.809289l68.876694 0 0 68.876694-68.876694 0L236.493737 339.809289z"  ></path>' +
    '' +
    '<path d="M374.246101 339.809289l413.259138 0 0 68.876694L374.246101 408.685983 374.246101 339.809289z"  ></path>' +
    '' +
    '<path d="M236.493737 477.561653l68.876694 0 0 68.876694-68.876694 0L236.493737 477.561653z"  ></path>' +
    '' +
    '<path d="M374.246101 477.561653l413.259138 0 0 68.876694L374.246101 546.438347 374.246101 477.561653z"  ></path>' +
    '' +
    '<path d="M236.493737 615.314017l68.876694 0 0 68.876694-68.876694 0L236.493737 615.314017z"  ></path>' +
    '' +
    '<path d="M374.246101 615.314017l413.259138 0 0 68.876694L374.246101 684.190711 374.246101 615.314017z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gongzuojingli" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M771.776 640.8c-0.128 1.824 0.768-1.728 0 0z m-145.504 0c-0.8-1.856-0.032 2.336 0 0z m145.504-339.168c0.224-22.112-15.008-36.736-24.352-48.48-9.152-11.52-32.544-19.456-49.728-19.168-15.168 0.224-37.792 7.968-47.232 19.168-14.688 17.632-24.032 41.376-24.256 48.48-0.288 9.888 0 339.168 0 339.168 7.872 18.08 63.36 111.104 63.648 111.936 1.728 4.16 5.152 6.816 8.928 6.816 2.72 0.096 5.344-1.216 7.232-3.52 0.832-1.056 1.344-2.016 1.984-3.264 0.416-0.896 57.184-98.048 63.648-111.968 0.416-14.304 0.864-316.832 0.128-339.168z m-65.12 301.088c-1.856 9.76-4.352 36.96-7.52 54.432-3.104-18.592-5.664-43.968-7.456-54.432 0.32-27.296-0.096-246.72 0-253.6-0.064-6.016 0-2.528 0-18.112 3.04 0 4.768 0.064 7.456 0 3.296-0.128 5.664 0 7.52 0 0.032 7.776 0.032 7.776 0 18.112-0.096 9.024 0.032 126.336 0 253.6z m16.672 38.08" fill="" ></path>' +
    '' +
    '<path d="M888.8 960.288H135.2c-40 0-72.544-32.576-72.544-72.544V134.112c0-40 32.544-72.544 72.544-72.544h753.632c40 0 72.576 32.544 72.576 72.544v753.632c-0.032 39.968-32.608 72.544-72.608 72.544zM143.264 879.68h737.504V142.176H143.264V879.68z" fill="" ></path>' +
    '' +
    '<path d="M486.016 293.472h-242.24c-22.272 0-40.288-18.048-40.288-40.288 0-22.272 18.016-40.288 40.288-40.288h242.24c22.24 0 40.256 18.016 40.256 40.288 0 22.24-18.016 40.288-40.256 40.288zM486.016 459.424h-242.24c-22.272 0-40.288-18.048-40.288-40.32 0-22.24 18.016-40.288 40.288-40.288h242.24c22.24 0 40.256 18.048 40.256 40.288 0 22.272-18.016 40.32-40.256 40.32zM486.016 613.664h-242.24c-22.272 0-40.288-18.016-40.288-40.32 0-22.24 18.016-40.288 40.288-40.288h242.24c22.24 0 40.256 18.016 40.256 40.288s-18.016 40.32-40.256 40.32zM486.016 779.616h-242.24c-22.272 0-40.288-18.016-40.288-40.288s18.016-40.32 40.288-40.32h242.24c22.24 0 40.256 18.016 40.256 40.32 0 22.272-18.016 40.288-40.256 40.288z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jineng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M327.68 810.666667l324.266667-407.893334c73.386667 17.066667 151.893333-6.826667 201.386666-69.973333 42.666667-52.906667 52.906667-122.88 34.133334-182.613333l-87.04 109.226666-117.76-30.72L626.346667 119.466667 713.386667 10.24C648.533333 6.826667 583.68 32.426667 541.013333 85.333333c-49.493333 61.44-56.32 145.066667-22.186666 211.626667l-324.266667 407.893333c-49.493333-5.12-100.693333 15.36-133.12 58.026667C8.533333 829.44 18.773333 926.72 85.333333 977.92c66.56 52.906667 163.84 40.96 215.04-25.6 34.133333-40.96 42.666667-93.866667 27.306667-141.653333z m-116.053333 124.586666l-81.92-11.946666-30.72-76.8 51.2-64.853334 81.92 11.946667 30.72 76.8-51.2 64.853333z"  ></path>' +
    '' +
    '<path d="M701.44 597.333333l-54.613333-46.08-51.2 61.44-314.026667-267.946666-52.906667-90.453334-121.173333-75.093333L51.2 245.76l92.16 107.52 97.28 37.546667 314.026667 266.24-51.2 61.44 54.613333 46.08c25.6-13.653333 58.026667-11.946667 80.213333 6.826666 23.893333 20.48 30.72 51.2 20.48 78.506667l170.666667 145.066667c27.306667 23.893333 68.266667 20.48 92.16-6.826667l59.733333-69.973333c23.893333-27.306667 20.48-68.266667-6.826666-92.16L802.133333 682.666667c-25.6 13.653333-58.026667 11.946667-80.213333-6.826667-23.893333-20.48-30.72-52.906667-20.48-78.506667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)