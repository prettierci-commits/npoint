import React, { Component, PropTypes } from 'react';
import {} from 'brace';
import AceEditor from 'react-ace';
import {} from './JsonEditor.css';

import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/ext/language_tools';
import 'brace/theme/github';

export default class JsonEditor extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    rows: PropTypes.number,
  }

  render() {
    return (
      <div className="json-editor">
        <AceEditor
          mode="javascript"
          theme="github"
          className='json-ace-editor'
          value={this.props.value}
          onChange={(newValue) => this.props.onChange(newValue)}
          editorProps={{$blockScrolling: true}}
          width='100%'
          showPrintMargin={false}
          tabSize={2}
          maxLines={this.props.rows}
          readOnly={this.props.readOnly}
          annotations={[]}
          markers={[]}
          setOptions={{useWorker: false}}
        />
      </div>
    );
  }
}
