import React from 'react';
import { FirestoreDocument, FirestoreMutation } from "@react-firebase/firestore";
import HtmlEditor from './Editor';

import {
    IfFirebaseAuthed,
    IfFirebaseUnAuthed
  } from "@react-firebase/auth";

export default class About extends React.Component {
    page = null;
    constructor(props) {
        super(props);
        this.state = {
            page: null
        }
    }
    updatePage(p) {
        this.page = p;
    }
    updatePageContent = (html) => {
        this.page.Content = html;
    }
    updateTitle = (evt) => {
        this.page.Title = evt.target.textContent;
    }
    render() {
        return (
            <div>
                <FirestoreDocument path="pages/w0ufk0omkbzomT2sR4rA">
                {d => {
                    if (d.isLoading !== false) {
                        return (
                            <div>Loading</div>
                        )
                    } else {
                        this.updatePage(d.value);
                        return (
                            <div>
                            
                            <IfFirebaseAuthed>
                                {() => {
                                    return (
                                        <div>
                                        <h1 contentEditable onInput={this.updateTitle}>{d.value.Title}</h1>
                                        <div>
                                            <FirestoreMutation type="update" path="pages/w0ufk0omkbzomT2sR4rA">
                                            {({ runMutation }) => {
                                                return (
                                                <div>
                                                    <button
                                                    onClick={() => {
                                                        runMutation({
                                                            Content: this.page.Content,
                                                            Title: this.page.Title
                                                        }).then(res => {
                                                            console.log("Ran mutation ", res);
                                                        });
                                                    }}
                                                    >
                                                    Save
                                                    </button>
                                                </div>
                                                );
                                            }}
                                            </FirestoreMutation>
                                        <HtmlEditor html={d.value.Content} onChange={this.updatePageContent} />
                                        </div>
                                        </div>
                                    )
                                }}
                            </IfFirebaseAuthed>
                            <IfFirebaseUnAuthed>
                                {() => {
                                    return (
                                        <div dangerouslySetInnerHTML={{__html: d.value.Content}}></div>
                                    )
                                }}
                            </IfFirebaseUnAuthed>
                            </div>
                        )
                    }
                    
                }}
            </FirestoreDocument>
            </div>
        )
    }
  }