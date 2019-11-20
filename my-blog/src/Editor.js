import React, { Component } from 'react';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html';

export default class HtmlEditor extends Component {

    constructor(props) {
        super(props);
        const blocksFromHTML = convertFromHTML(this.props.html);
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
        );

        this.state = {
            editorState: EditorState.createWithContent(state)
        }
    }

    onEditorStateChange = (editorState) => {
      this.setState({
        editorState,
      });
      this.props.onChange(stateToHTML(editorState.getCurrentContent()));
    };
  
    render() {
      const { editorState } = this.state;
      return (
        <div>
          <Editor
            editorState={editorState}
            wrapperClassName="html-editor-wrapper"
            editorClassName="html-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
      );
    }
  }