import marked from 'marked'
import xss from 'xss'
import hljs from 'highlight.js';

export const translateMarkdown = (plainText, isGuardXss = false) => {
    return marked(isGuardXss ? xss(plainText) : plainText, {
      renderer: new marked.Renderer(),
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: true,
      smartLists: true,
      smartypants: true,
      highlight: function(code) {
        /*eslint no-undef: "off"*/
        return hljs.highlightAuto(code).value
      }
    })
  }

  export const decodeQuery = url => {
    const params = {}
    url.substr(1).split('&').forEach(v => {
      const d = v.split('=')
      if (d[1] && d[0]) params[d[0]] = d[1]
    })
    return params
  }