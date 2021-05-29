import Topbar from './components/Topbar';

function App() {
  return (
    <div className="container">
      <Topbar />
      <div className="body">
        <input type="text" placeholder="Sök stad..." />
      </div>
    </div>
  );
}

export default App;
