import React from "react";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi data
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    // this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: showFormattedDate(),
          },
        ],
      };
    });
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input type="text" placeholder="Cari catatan ..." />
          </div>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          {notes.length > 0 ? (
            <NoteList
              notes={this.state.notes}
              onDelete={this.onDeleteHandler}
              onArchive={this.onArchive}
            />
          ) : (
            <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
          )}

          <h2>Arsip</h2>
          <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
        </div>
      </div>
    );
  }
}

export default NoteApp;
