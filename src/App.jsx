import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <section className="card">
        <h1>React 19 スターター</h1>
        <p>2024+ スタイルの .jsx / フック(use*)で構成。</p>
        <button className="btn" onClick={() => setCount(c => c + 1)}>
          React Count: {count}
        </button>
      </section>
    </main>
  )
}
