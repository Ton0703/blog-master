import React from 'react'
import {translateMarkdown} from './index'
import SimpleMDE from 'react-simplemde-editor'
import 'easymde/dist/easymde.min.css'
import './index.scss'



export default function MdEditor(props) {
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
