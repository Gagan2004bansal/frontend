import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

function MyEditor() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onChange = newEditorState => {
        setEditorState(newEditorState);
    };

    const addImage = (url) => {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', { src: url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
            editorState,
            { currentContent: contentStateWithEntity },
            'create-entity'
        );
        setEditorState(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '));
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            setEditorState(newState);
            return 'handled';
        }
        return 'not-handled';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                addImage(reader.result);
            };
        }
    };

    return (
        <div onDrop={handleDrop} style={{ border: '1px solid #ccc', padding: '10px', minHeight: '200px' }}>
            <Editor
                editorState={editorState}
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
                placeholder="Enter text here..."
            />
        </div>
    );
}

export default MyEditor;
