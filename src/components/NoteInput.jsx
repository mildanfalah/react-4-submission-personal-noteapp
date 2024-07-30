import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter : 50</p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Judul"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Isi catatan ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Tambah</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
