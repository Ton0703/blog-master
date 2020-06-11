import React from 'react'
import marked from 'marked'
import xss from 'xss'
import hljs from 'highlight.js';
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import './index.scss'

const translateMarkdown = (plainText, isGuardXss = false) => {
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

  function MdEditor(props) {
    return (
        <SimpleMDE
           className='MD'
           value={props.value}
           onChange={props.onChange}
           options={{ autofocus: true, previewRender: translateMarkdown, toolbar: [
            'bold',
            'italic',
            'heading',
            '|',
            'quote',
            'code',
            'table',
            'horizontal-rule',
            'unordered-list',
            'ordered-list',
            '|',
            'link',
            'image',
            '|',
            'side-by-side',
            'fullscreen',
            '|',
            'guide'
         ] }}
        >
            
        </SimpleMDE>
    )
}
export default MdEditor