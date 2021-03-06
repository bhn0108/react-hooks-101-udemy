import React, { useReducer, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from '../reducers'

const App = () => {
  const [state, dispach] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = (e) => {
    e.preventDefault()

    dispach({
      type: 'CREATE_EVENT',
      title,
      body
    })

    setTitle()
    setBody()
  }

  return (
    <div className='container-fluid'>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className='form-group'>
          <label htmlFor='formEventTitle'>タイトル</label>
          <input className='form-control' id='formEventTitle' value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='form-group'>
          <label htmlFor='formEventTitle'>ボディー</label>
          <textarea className='form-control' id='formEventTitle' value={body} onChange={e => setBody(e.target.value)} />
        </div>
      </form>
      <button className='btn btn-primary' onClick={addEvent}>イベントを作成する</button>
      <button className='btn btn-danger'>全てのイベントを削除する</button>

      <h4>イベント一覧</h4>
      <table className='table table-hover' >
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default App
