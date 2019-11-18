import React from 'react';
import { FirestoreDocument } from "@react-firebase/firestore";

export default class About extends React.Component {
    render() {
        return (
            <div>
                About
                <FirestoreDocument path="pages/w0ufk0omkbzomT2sR4rA">
                {d => {
                    if (d.isLoading !== false) {
                        return (
                            <div>Loading</div>
                        )
                    } else {
                        return (
                            <div>
                            <p>Something? {d.value.Title}</p>
                            <div dangerouslySetInnerHTML={{__html: d.value.Content}}></div>
                            </div>
                        )
                    }
                    
                }}
            </FirestoreDocument>
            </div>
        )
    }
  }