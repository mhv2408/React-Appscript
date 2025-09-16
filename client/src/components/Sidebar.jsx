function Sidebar() {
  const handleOpenDialog = () => {
    google.script.run.showCustomDialog();
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial" }}>
      <h2>Sidebar</h2>
      <p>This is my React-powered sidebar.</p>
      <button onClick={handleOpenDialog}>Open Dialog</button>
    </div>
  );
}

export default Sidebar;
